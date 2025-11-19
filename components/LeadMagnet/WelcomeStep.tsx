import React from 'react';
import { motion } from 'framer-motion';

interface WelcomeStepProps {
    onNext: () => void;
}

export default function WelcomeStep({ onNext }: WelcomeStepProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-4xl mx-auto text-center"
        >
            <div className="mb-8">
                <div className="text-6xl mb-6">🤖</div>
                <h1 className="text-4xl md:text-5xl font-extralight mb-4 text-[#0f172a]">
                    Découvrez les Outils IA Parfaits pour <span className="text-[#1e3a8a]">Votre Entreprise</span>
                </h1>
                <p className="text-xl text-[#374151] mb-12 max-w-2xl mx-auto font-light">
                    Un quiz interactif et un simulateur de ROI pour transformer votre activité avec
                    l&apos;Intelligence Artificielle
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div
                        className="rounded-xl p-6 transition-all hover:scale-[1.02]"
                        style={{ background: '#e0e5ec', boxShadow: '12px 12px 24px #bec3c9, -12px -12px 24px #ffffff' }}
                    >
                        <div className="text-4xl mb-4">🎯</div>
                        <h3 className="text-xl font-light mb-2 text-[#0f172a]">Recommandations</h3>
                        <p className="text-[#374151] text-sm font-light">
                            Des outils IA adaptés à votre secteur et vos besoins spécifiques
                        </p>
                    </div>
                    <div
                        className="rounded-xl p-6 transition-all hover:scale-[1.02]"
                        style={{ background: '#e0e5ec', boxShadow: '12px 12px 24px #bec3c9, -12px -12px 24px #ffffff' }}
                    >
                        <div className="text-4xl mb-4">💰</div>
                        <h3 className="text-xl font-light mb-2 text-[#0f172a]">Calculateur ROI</h3>
                        <p className="text-[#374151] text-sm font-light">
                            Estimez vos économies et gains de productivité potentiels
                        </p>
                    </div>
                    <div
                        className="rounded-xl p-6 transition-all hover:scale-[1.02]"
                        style={{ background: '#e0e5ec', boxShadow: '12px 12px 24px #bec3c9, -12px -12px 24px #ffffff' }}
                    >
                        <div className="text-4xl mb-4">📊</div>
                        <h3 className="text-xl font-light mb-2 text-[#0f172a]">Rapport PDF</h3>
                        <p className="text-[#374151] text-sm font-light">
                            Recevez un plan d&apos;action personnalisé et détaillé
                        </p>
                    </div>
                </div>

                <button
                    onClick={onNext}
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-light text-[#374151] transition-all duration-200 rounded-full hover:scale-105"
                    style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
                >
                    Commencer le Quiz
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>

                <p className="mt-4 text-sm text-[#64748b] font-light">⏱️ 3 minutes seulement</p>
            </div>
        </motion.section>
    );
}

