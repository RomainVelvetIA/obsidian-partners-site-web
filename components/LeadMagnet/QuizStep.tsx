import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizResponses } from '@/lib/leadMagnet/types';

interface QuizStepProps {
    onNext: (responses: Partial<QuizResponses>) => void;
    initialResponses: Partial<QuizResponses>;
}

export default function QuizStep({ onNext, initialResponses }: QuizStepProps) {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [responses, setResponses] = useState<Partial<QuizResponses>>(initialResponses);

    const handleOptionSelect = (key: keyof QuizResponses, value: any) => {
        setResponses((prev) => ({ ...prev, [key]: value }));
    };

    const handleMultiSelect = (key: keyof QuizResponses, value: string) => {
        const current = (responses[key] as string[]) || [];
        const updated = current.includes(value)
            ? current.filter((item) => item !== value)
            : [...current, value];
        setResponses((prev) => ({ ...prev, [key]: updated }));
    };

    const nextQuestion = () => {
        if (currentQuestion < 5) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            onNext(responses);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 1) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const isQuestionValid = () => {
        switch (currentQuestion) {
            case 1:
                return !!responses.secteur;
            case 2:
                return !!responses.maturite;
            case 3:
                return (responses.outilsActuels?.length || 0) > 0;
            case 4:
                return (responses.secteursImplementation?.length || 0) > 0;
            case 5:
                return (responses.problematiques?.length || 0) > 0;
            default:
                return false;
        }
    };

    const getButtonStyle = (isSelected: boolean) => ({
        background: '#e0e5ec',
        boxShadow: isSelected
            ? 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff'
            : '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff',
        border: isSelected ? '1px solid #1e3a8a' : 'none'
    });

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-extralight text-[#0f172a] mb-2">Parlez-nous de Votre Entreprise</h2>
                <p className="text-[#64748b] font-light">Question {currentQuestion}/5</p>
            </div>

            <AnimatePresence mode="wait">
                {currentQuestion === 1 && (
                    <motion.div
                        key="q1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-light text-[#0f172a] mb-6">
                            Dans quel secteur d&apos;activité évoluez-vous ?
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { id: 'services', icon: '💼', label: 'Services & Conseil' },
                                { id: 'ecommerce', icon: '🛒', label: 'E-commerce & Retail' },
                                { id: 'saas', icon: '💻', label: 'SaaS & Tech' },
                                { id: 'industrie', icon: '🏭', label: 'Industrie & Manufacturing' },
                                { id: 'sante', icon: '🏥', label: 'Santé & Bien-être' },
                                { id: 'autre', icon: '🏢', label: 'Autre Secteur' },
                            ].map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleOptionSelect('secteur', option.id)}
                                    className="p-6 rounded-xl text-left transition-all flex items-center space-x-4"
                                    style={getButtonStyle(responses.secteur === option.id)}
                                >
                                    <span className="text-3xl">{option.icon}</span>
                                    <span className="text-lg font-light text-[#374151]">{option.label}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {currentQuestion === 2 && (
                    <motion.div
                        key="q2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-light text-[#0f172a] mb-6">
                            Où en êtes-vous dans l&apos;automatisation de processus avec l&apos;IA ?
                        </h3>
                        <div className="grid gap-4">
                            {[
                                {
                                    id: 'debutant',
                                    icon: '🌱',
                                    label: 'Débutant',
                                    desc: "Je découvre l&apos;automatisation IA",
                                },
                                {
                                    id: 'exploration',
                                    icon: '🔍',
                                    label: 'En exploration',
                                    desc: 'Je teste quelques outils',
                                },
                                {
                                    id: 'utilisateur',
                                    icon: '🚀',
                                    label: 'Utilisateur actif',
                                    desc: "J&apos;utilise régulièrement des outils IA",
                                },
                                {
                                    id: 'expert',
                                    icon: '⭐',
                                    label: 'Expert',
                                    desc: "J&apos;ai déployé plusieurs solutions",
                                },
                            ].map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleOptionSelect('maturite', option.id)}
                                    className="p-6 rounded-xl text-left transition-all flex items-center space-x-4"
                                    style={getButtonStyle(responses.maturite === option.id)}
                                >
                                    <span className="text-3xl">{option.icon}</span>
                                    <div>
                                        <div className="text-lg font-light text-[#374151]">{option.label}</div>
                                        <div className="text-sm text-[#64748b] font-light">{option.desc}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {currentQuestion === 3 && (
                    <motion.div
                        key="q3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-light text-[#0f172a] mb-6">
                            Quels outils IA utilisez-vous actuellement ?
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { id: 'chatgpt', icon: '💬', label: 'ChatGPT / Claude' },
                                { id: 'copilot', icon: '💻', label: 'GitHub Copilot' },
                                { id: 'midjourney', icon: '🎨', label: 'Midjourney / DALL-E' },
                                { id: 'zapier', icon: '⚡', label: 'Zapier / Make' },
                                { id: 'notion', icon: '📝', label: 'Notion AI' },
                                { id: 'aucun', icon: '❌', label: 'Aucun pour le moment' },
                            ].map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleMultiSelect('outilsActuels', option.id)}
                                    className="p-4 rounded-xl text-left transition-all flex items-center space-x-4"
                                    style={getButtonStyle(responses.outilsActuels?.includes(option.id) || false)}
                                >
                                    <span className="text-2xl">{option.icon}</span>
                                    <span className="text-lg font-light text-[#374151]">{option.label}</span>
                                </button>
                            ))}
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm text-[#64748b] mb-2 font-light">Autres outils (optionnel)</label>
                            <input
                                type="text"
                                value={responses.autresOutils || ''}
                                onChange={(e) => handleOptionSelect('autresOutils', e.target.value)}
                                placeholder="Ex: Jasper, Copy.ai, etc."
                                className="w-full p-3 rounded-lg text-[#374151] outline-none font-light"
                                style={{ background: '#e0e5ec', boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff' }}
                            />
                        </div>
                    </motion.div>
                )}

                {currentQuestion === 4 && (
                    <motion.div
                        key="q4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-light text-[#0f172a] mb-6">
                            Dans quels secteurs souhaitez-vous implémenter l&apos;automatisation IA ?
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { id: 'marketing', icon: '📱', label: 'Marketing & Com' },
                                { id: 'rh', icon: '👥', label: 'Ressources Humaines' },
                                { id: 'finance', icon: '💰', label: 'Finance & Compta' },
                                { id: 'ventes', icon: '🎯', label: 'Ventes & BizDev' },
                                { id: 'support', icon: '💬', label: 'Support Client' },
                                { id: 'production', icon: '⚙️', label: 'Production & Ops' },
                            ].map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleMultiSelect('secteursImplementation', option.id)}
                                    className="p-4 rounded-xl text-left transition-all flex items-center space-x-4"
                                    style={getButtonStyle(responses.secteursImplementation?.includes(option.id) || false)}
                                >
                                    <span className="text-2xl">{option.icon}</span>
                                    <span className="text-lg font-light text-[#374151]">{option.label}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {currentQuestion === 5 && (
                    <motion.div
                        key="q5"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-light text-[#0f172a] mb-6">
                            Quelles sont vos principales problématiques actuelles ?
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { id: 'temps', icon: '⏰', label: 'Manque de temps' },
                                { id: 'couts', icon: '💸', label: 'Coûts élevés' },
                                { id: 'competences', icon: '🎓', label: 'Manque compétences' },
                                { id: 'tachesRepetitives', icon: '🔄', label: 'Tâches répétitives' },
                                { id: 'scalabilite', icon: '📈', label: 'Difficultés à scaler' },
                                { id: 'qualite', icon: '✨', label: 'Problèmes qualité' },
                            ].map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleMultiSelect('problematiques', option.id)}
                                    className="p-4 rounded-xl text-left transition-all flex items-center space-x-4"
                                    style={getButtonStyle(responses.problematiques?.includes(option.id) || false)}
                                >
                                    <span className="text-2xl">{option.icon}</span>
                                    <span className="text-lg font-light text-[#374151]">{option.label}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex justify-between mt-8">
                <button
                    onClick={prevQuestion}
                    disabled={currentQuestion === 1}
                    className={`px-6 py-3 rounded-lg text-[#374151] font-medium transition-all ${currentQuestion === 1
                        ? 'opacity-0 cursor-default'
                        : 'hover:scale-105'
                        }`}
                    style={currentQuestion !== 1 ? { background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' } : {}}
                >
                    ← Précédent
                </button>
                <button
                    onClick={nextQuestion}
                    disabled={!isQuestionValid()}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${isQuestionValid()
                        ? 'text-[#374151] hover:scale-105'
                        : 'text-gray-400 cursor-not-allowed opacity-50'
                        }`}
                    style={isQuestionValid() ? { background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' } : { background: '#e0e5ec', boxShadow: 'inset 2px 2px 5px #bec3c9, inset -2px -2px 5px #ffffff' }}
                >
                    {currentQuestion === 5 ? 'Voir mon ROI →' : 'Suivant →'}
                </button>
            </div>
        </div>
    );
}
