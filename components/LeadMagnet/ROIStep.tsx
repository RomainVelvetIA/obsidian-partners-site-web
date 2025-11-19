import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ROIInputs, ROIResults } from '@/lib/leadMagnet/types';
import { calculateROI, formatCurrency, formatPercentage } from '@/lib/leadMagnet/roiCalculator';
import ROIChart from './ROIChart';

interface ROIStepProps {
    onNext: (inputs: ROIInputs, results: ROIResults) => void;
    onBack: () => void;
    initialInputs: ROIInputs;
}

export default function ROIStep({ onNext, onBack, initialInputs }: ROIStepProps) {
    const [inputs, setInputs] = useState<ROIInputs>(initialInputs);
    const [results, setResults] = useState<ROIResults | null>(null);

    useEffect(() => {
        const newResults = calculateROI(inputs);
        setResults(newResults);
    }, [inputs]);

    const handleInputChange = (key: keyof ROIInputs, value: string | number) => {
        setInputs((prev) => ({
            ...prev,
            [key]: typeof value === 'string' ? value : Number(value),
        }));
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-extralight text-[#0f172a] mb-2">
                    Calculez Votre Retour sur Investissement
                </h2>
                <p className="text-[#64748b] font-light">
                    Estimez les gains de productivité et économies générés par l&apos;IA
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Formulaire */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                >
                    <div
                        className="p-6 rounded-xl"
                        style={{ background: '#e0e5ec', boxShadow: '12px 12px 24px #bec3c9, -12px -12px 24px #ffffff' }}
                    >
                        <label className="block text-[#374151] mb-2 font-light">
                            <span className="mr-2">⏰</span>
                            Temps passé sur tâches répétitives (h/semaine)
                        </label>
                        <input
                            type="number"
                            value={inputs.tempsRepetitif}
                            onChange={(e) => handleInputChange('tempsRepetitif', e.target.value)}
                            className="w-full p-3 rounded-lg text-[#374151] outline-none font-light"
                            style={{ background: '#e0e5ec', boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff' }}
                            min="0"
                        />
                    </div>

                    <div
                        className="p-6 rounded-xl"
                        style={{ background: '#e0e5ec', boxShadow: '12px 12px 24px #bec3c9, -12px -12px 24px #ffffff' }}
                    >
                        <label className="block text-[#374151] mb-2 font-light">
                            <span className="mr-2">💸</span>
                            Coût mensuel estimé de ces tâches (€)
                        </label>
                        <input
                            type="number"
                            value={inputs.coutActuel}
                            onChange={(e) => handleInputChange('coutActuel', e.target.value)}
                            className="w-full p-3 rounded-lg text-[#374151] outline-none font-light"
                            style={{ background: '#e0e5ec', boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff' }}
                            min="0"
                        />
                    </div>

                    <div
                        className="p-6 rounded-xl"
                        style={{ background: '#e0e5ec', boxShadow: '12px 12px 24px #bec3c9, -12px -12px 24px #ffffff' }}
                    >
                        <label className="block text-[#374151] mb-2 font-light">
                            <span className="mr-2">💰</span>
                            Budget mensuel automation envisagé (€)
                        </label>
                        <input
                            type="number"
                            value={inputs.budgetAutomation}
                            onChange={(e) => handleInputChange('budgetAutomation', e.target.value)}
                            className="w-full p-3 rounded-lg text-[#374151] outline-none font-light"
                            style={{ background: '#e0e5ec', boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff' }}
                            min="0"
                        />
                    </div>
                </motion.div>

                {/* Résultats */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                >
                    {results && (
                        <>
                            <div className="grid grid-cols-2 gap-4">
                                <div
                                    className="p-4 rounded-xl"
                                    style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
                                >
                                    <div className="text-sm text-[#64748b] mb-1 font-light">Gain Mensuel</div>
                                    <div className="text-2xl font-light text-[#1e3a8a]">
                                        {formatCurrency(results.gainMensuel)}
                                    </div>
                                </div>
                                <div
                                    className="p-4 rounded-xl"
                                    style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
                                >
                                    <div className="text-sm text-[#64748b] mb-1 font-light">ROI Estimé</div>
                                    <div className="text-2xl font-light text-[#1e3a8a]">
                                        {formatPercentage(results.roiPercentage)}
                                    </div>
                                </div>
                                <div
                                    className="p-4 rounded-xl"
                                    style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
                                >
                                    <div className="text-sm text-[#64748b] mb-1 font-light">Temps Gagné</div>
                                    <div className="text-2xl font-light text-[#1e3a8a]">
                                        {results.tempsEconomise}h / mois
                                    </div>
                                </div>
                                <div
                                    className="p-4 rounded-xl"
                                    style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
                                >
                                    <div className="text-sm text-[#64748b] mb-1 font-light">Gain Annuel</div>
                                    <div className="text-2xl font-light text-[#1e3a8a]">
                                        {formatCurrency(results.gainAnnuel)}
                                    </div>
                                </div>
                            </div>

                            <div
                                className="p-4 rounded-xl"
                                style={{ background: '#e0e5ec', boxShadow: '12px 12px 24px #bec3c9, -12px -12px 24px #ffffff' }}
                            >
                                <ROIChart results={results} coutActuel={inputs.coutActuel} />
                            </div>
                        </>
                    )}
                </motion.div>
            </div>

            <div className="flex justify-between mt-8">
                <button
                    onClick={onBack}
                    className="px-6 py-3 rounded-lg text-[#374151] font-medium transition-all hover:scale-105"
                    style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
                >
                    ← Retour
                </button>
                <button
                    onClick={() => results && onNext(inputs, results)}
                    className="px-6 py-3 rounded-lg text-[#374151] font-medium transition-all hover:scale-105"
                    style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
                >
                    Recevoir mon Rapport →
                </button>
            </div>
        </div>
    );
}
