'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calculator, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function LeadMagnetSection() {
    return (
        <section className="py-20 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl overflow-hidden p-8 md:p-16"
                    style={{ background: '#e0e5ec', boxShadow: '12px 12px 24px #bec3c9, -12px -12px 24px #ffffff' }}
                >
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                                style={{ background: '#e0e5ec', boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff' }}
                            >
                                <Sparkles className="w-4 h-4 text-[#1e3a8a]" />
                                <span className="text-[#374151]">Nouveau : Outil Gratuit</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-extralight mb-6 leading-tight text-[#0f172a]">
                                Découvrez le potentiel de l&apos;IA pour <span className="text-[#1e3a8a]">votre entreprise</span>
                            </h2>

                            <p className="text-[#374151] text-lg mb-8 font-light">
                                En 2 minutes, obtenez une analyse personnalisée, découvrez les outils adaptés à vos besoins et calculez votre retour sur investissement potentiel.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/lead-magnet?reset=true">
                                    <Button
                                        size="lg"
                                        className="w-full sm:w-auto gap-2"
                                    >
                                        Faire le test gratuitement
                                        <ArrowRight className="h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div
                                className="p-6 rounded-2xl transition-transform hover:scale-[1.02]"
                                style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                    style={{ background: '#e0e5ec', boxShadow: 'inset 3px 3px 6px #bec3c9, inset -3px -3px 6px #ffffff' }}
                                >
                                    <Sparkles className="w-6 h-6 text-[#1e3a8a]" />
                                </div>
                                <h3 className="font-light text-lg mb-2 text-[#0f172a]">Recommandations IA</h3>
                                <p className="text-sm text-[#374151] font-light">Les meilleurs outils sélectionnés pour votre secteur d&apos;activité.</p>
                            </div>

                            <div
                                className="p-6 rounded-2xl transition-transform hover:scale-[1.02]"
                                style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                    style={{ background: '#e0e5ec', boxShadow: 'inset 3px 3px 6px #bec3c9, inset -3px -3px 6px #ffffff' }}
                                >
                                    <Calculator className="w-6 h-6 text-[#1e3a8a]" />
                                </div>
                                <h3 className="font-light text-lg mb-2 text-[#0f172a]">Calculateur ROI</h3>
                                <p className="text-sm text-[#374151] font-light">Estimez vos économies et gains de productivité mensuels.</p>
                            </div>

                            <div
                                className="p-6 rounded-2xl transition-transform hover:scale-[1.02] sm:col-span-2"
                                style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                    style={{ background: '#e0e5ec', boxShadow: 'inset 3px 3px 6px #bec3c9, inset -3px -3px 6px #ffffff' }}
                                >
                                    <FileText className="w-6 h-6 text-[#1e3a8a]" />
                                </div>
                                <h3 className="font-light text-lg mb-2 text-[#0f172a]">Rapport PDF Personnalisé</h3>
                                <p className="text-sm text-[#374151] font-light">Recevez un plan d&apos;action complet et détaillé directement par email.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

