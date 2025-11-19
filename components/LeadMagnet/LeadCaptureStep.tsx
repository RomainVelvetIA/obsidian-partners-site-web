import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LeadData } from '@/lib/leadMagnet/types';
import { validateEmail, validatePhone } from '@/lib/leadMagnet/leadCapture';

interface LeadCaptureStepProps {
    onNext: (data: Partial<LeadData>) => void;
    onBack: () => void;
}

export default function LeadCaptureStep({ onNext, onBack }: LeadCaptureStepProps) {
    const [formData, setFormData] = useState<Partial<LeadData>>({
        nom: '',
        email: '',
        societe: '',
        telephone: '',
        consent: false,
        newsletter: false,
    });
    const [errors, setErrors] = useState<Partial<Record<keyof LeadData, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors: Partial<Record<keyof LeadData, string>> = {};

        if (!formData.nom) newErrors.nom = 'Le nom est requis';
        if (!formData.email) {
            newErrors.email = "L&apos;email est requis";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Format email invalide';
        }
        if (!formData.societe) newErrors.societe = 'La société est requise';
        if (formData.telephone && !validatePhone(formData.telephone)) {
            newErrors.telephone = 'Format téléphone invalide';
        }
        if (!formData.consent) newErrors.consent = 'Vous devez accepter les conditions';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            // Simulate API delay for better UX
            await new Promise((resolve) => setTimeout(resolve, 1000));
            onNext(formData);
            setIsSubmitting(false);
        }
    };

    const handleChange = (key: keyof LeadData, value: any) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
        if (errors[key]) {
            setErrors((prev) => ({ ...prev, [key]: undefined }));
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-extralight text-[#0f172a] mb-2">Recevez Votre Rapport Personnalisé</h2>
                <p className="text-[#64748b] font-light">
                    Laissez-nous vos coordonnées pour générer votre rapport PDF complet
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-8 rounded-2xl"
                    style={{ background: '#e0e5ec', boxShadow: '12px 12px 24px #bec3c9, -12px -12px 24px #ffffff' }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-[#374151] mb-2 font-light">
                                <span className="mr-2">👤</span>Nom complet *
                            </label>
                            <input
                                type="text"
                                value={formData.nom}
                                onChange={(e) => handleChange('nom', e.target.value)}
                                className={`w-full p-3 rounded-lg text-[#374151] outline-none font-light ${errors.nom ? 'border border-red-500' : ''}`}
                                style={{ background: '#e0e5ec', boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff' }}
                                placeholder="Jean Dupont"
                            />
                            {errors.nom && <p className="text-red-400 text-sm mt-1">{errors.nom}</p>}
                        </div>

                        <div>
                            <label className="block text-[#374151] mb-2 font-light">
                                <span className="mr-2">✉️</span>Email professionnel *
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                className={`w-full p-3 rounded-lg text-[#374151] outline-none font-light ${errors.email ? 'border border-red-500' : ''}`}
                                style={{ background: '#e0e5ec', boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff' }}
                                placeholder="jean.dupont@entreprise.fr"
                            />
                            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-[#374151] mb-2 font-light">
                                <span className="mr-2">🏢</span>Société *
                            </label>
                            <input
                                type="text"
                                value={formData.societe}
                                onChange={(e) => handleChange('societe', e.target.value)}
                                className={`w-full p-3 rounded-lg text-[#374151] outline-none font-light ${errors.societe ? 'border border-red-500' : ''}`}
                                style={{ background: '#e0e5ec', boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff' }}
                                placeholder="Nom de votre entreprise"
                            />
                            {errors.societe && <p className="text-red-400 text-sm mt-1">{errors.societe}</p>}
                        </div>

                        <div>
                            <label className="block text-[#374151] mb-2 font-light">
                                <span className="mr-2">📞</span>Téléphone (optionnel)
                            </label>
                            <input
                                type="tel"
                                value={formData.telephone}
                                onChange={(e) => handleChange('telephone', e.target.value)}
                                className={`w-full p-3 rounded-lg text-[#374151] outline-none font-light ${errors.telephone ? 'border border-red-500' : ''}`}
                                style={{ background: '#e0e5ec', boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff' }}
                                placeholder="+33 6 12 34 56 78"
                            />
                            {errors.telephone && <p className="text-red-400 text-sm mt-1">{errors.telephone}</p>}
                        </div>

                        <div className="space-y-4 pt-4">
                            <label className="flex items-start space-x-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.consent}
                                    onChange={(e) => handleChange('consent', e.target.checked)}
                                    className="mt-1 w-5 h-5 rounded border-gray-400 text-blue-600 focus:ring-blue-500"
                                    style={{ background: '#e0e5ec', boxShadow: 'inset 2px 2px 4px #bec3c9, inset -2px -2px 4px #ffffff' }}
                                />
                                <span className="text-sm text-[#64748b] font-light">
                                    J&apos;accepte de recevoir des informations sur les solutions IA et d&apos;être contacté par
                                    l&apos;équipe *
                                </span>
                            </label>
                            {errors.consent && <p className="text-red-400 text-sm">{errors.consent}</p>}

                            <label className="flex items-start space-x-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.newsletter}
                                    onChange={(e) => handleChange('newsletter', e.target.checked)}
                                    className="mt-1 w-5 h-5 rounded border-gray-400 text-blue-600 focus:ring-blue-500"
                                    style={{ background: '#e0e5ec', boxShadow: 'inset 2px 2px 4px #bec3c9, inset -2px -2px 4px #ffffff' }}
                                />
                                <span className="text-sm text-[#64748b] font-light">
                                    Je souhaite recevoir la newsletter avec les dernières actualités IA
                                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 rounded-lg text-[#374151] font-medium text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center hover:scale-[1.02]"
                            style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
                        >
                            {isSubmitting ? (
                                <span className="animate-pulse">Génération en cours...</span>
                            ) : (
                                '🎯 Générer mon Rapport Personnalisé'
                            )}
                        </button>

                        <p className="text-xs text-center text-[#64748b] font-light">
                            🔒 Vos données sont sécurisées et ne seront jamais partagées avec des tiers
                        </p>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col justify-center space-y-8"
                >
                    <div
                        className="p-8 rounded-2xl"
                        style={{ background: '#e0e5ec', boxShadow: '12px 12px 24px #bec3c9, -12px -12px 24px #ffffff' }}
                    >
                        <h4 className="text-xl font-light text-[#0f172a] mb-6">Ce que vous allez recevoir :</h4>
                        <ul className="space-y-4">
                            {[
                                'Votre analyse complète de ROI',
                                'Des recommandations personnalisées',
                                "Un plan d'action sur mesure",
                                "Des conseils d'experts en automatisation",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center space-x-3 text-[#374151] font-light">
                                    <span className="text-[#1e3a8a] text-xl">✅</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button
                        onClick={onBack}
                        className="px-6 py-3 rounded-lg text-[#374151] font-medium transition-all w-max hover:scale-105"
                        style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
                    >
                        ← Retour
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
