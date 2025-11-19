import React from 'react';
import { motion } from 'framer-motion';
import { ROIResults } from '@/lib/leadMagnet/types';
import { formatCurrency, formatPercentage } from '@/lib/leadMagnet/roiCalculator';

interface ThankYouStepProps {
    onDownload: () => void;
    onRestart: () => void;
    roiResults: ROIResults | null;
}

export default function ThankYouStep({ onDownload, onRestart, roiResults }: ThankYouStepProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-4xl mx-auto text-center"
        >
            <div className="mb-12">
                <div className="text-6xl mb-6 animate-bounce">🎉</div>
                <h1 className="text-4xl md:text-5xl font-extralight mb-4 text-[#0f172a]">
                    Merci ! Votre Rapport est Prêt
                </h1>
                <p className="text-xl text-[#374151] font-light">
                    Votre rapport personnalisé a été généré avec succès
                </p>
            </div>

            {roiResults && (
                <div
                    className="p-8 rounded-2xl mb-12 max-w-3xl mx-auto"
                    style={{ background: '#e0e5ec', boxShadow: '12px 12px 24px #bec3c9, -12px -12px 24px #ffffff' }}
                >
                    <h3 className="text-2xl font-light text-[#0f172a] mb-6">Résumé de Votre ROI</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <div className="text-sm text-[#64748b] mb-1 font-light">Temps Gagné</div>
                            <div className="text-2xl font-light text-[#1e3a8a]">
                                {roiResults.tempsEconomise}h/mois
                            </div>
                        </div>
                        <div>
                            <div className="text-sm text-[#64748b] mb-1 font-light">Gain Mensuel</div>
                            <div className="text-2xl font-light text-[#1e3a8a]">
                                {formatCurrency(roiResults.gainMensuel)}
                            </div>
                        </div>
                        <div>
                            <div className="text-sm text-[#64748b] mb-1 font-light">ROI</div>
                            <div className="text-2xl font-light text-[#1e3a8a]">
                                {formatPercentage(roiResults.roiPercentage)}
                            </div>
                        </div>
                        <div>
                            <div className="text-sm text-[#64748b] mb-1 font-light">Gain Annuel</div>
                            <div className="text-2xl font-light text-[#1e3a8a]">
                                {formatCurrency(roiResults.gainAnnuel)}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
                <button
                    onClick={onDownload}
                    className="px-8 py-4 rounded-full text-[#374151] font-medium text-lg transition-all flex items-center hover:scale-105"
                    style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
                >
                    <span className="mr-2">📥</span> Télécharger le Rapport PDF
                </button>

                <button
                    onClick={onRestart}
                    className="px-8 py-4 rounded-full text-[#374151] font-medium transition-all flex items-center hover:scale-105"
                    style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
                >
                    <span className="mr-2">🔄</span> Recommencer
                </button>
            </div>

            <div
                className="p-8 rounded-2xl max-w-2xl mx-auto"
                style={{ background: '#e0e5ec', boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff' }}
            >
                <h4 className="text-xl font-light text-[#0f172a] mb-4">Besoin d&apos;Accompagnement ?</h4>
                <p className="text-[#374151] mb-6 font-light">
                    Notre équipe peut vous aider à déployer ces solutions dans votre entreprise et maximiser
                    votre ROI.
                </p>
                <a
                    href="https://cal.com/romain-auroux-cwofup/obsidian-partners"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-lg text-[#374151] transition-all hover:scale-105"
                    style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
                >
                    📅 Obtenez une Consultation Offerte
                </a>
            </div>
        </motion.div>
    );
}
