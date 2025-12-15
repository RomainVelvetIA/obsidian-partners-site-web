'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import WelcomeStep from '@/components/LeadMagnet/WelcomeStep';
import QuizStep from '@/components/LeadMagnet/QuizStep';
import ROIStep from '@/components/LeadMagnet/ROIStep';
import LeadCaptureStep from '@/components/LeadMagnet/LeadCaptureStep';
import ThankYouStep from '@/components/LeadMagnet/ThankYouStep';
import {
    AppState,
    Step,
    QuizResponses,
    ROIInputs,
    ROIResults,
    LeadData,
} from '@/lib/leadMagnet/types';
import { getToolRecommendations } from '@/lib/leadMagnet/toolsDatabase';
import { generatePDFReport } from '@/lib/leadMagnet/reportGenerator';
import { submitLead } from '@/lib/leadMagnet/leadCapture';
import './styles.css';

const logoUrl =
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/691b66a04c81a902668a15c7/c1dcec10b_Ajouteruntitre1.png';

export default function LeadMagnetPage() {
    const [state, setState] = useState<AppState>({
        currentStep: 0,
        quizResponses: {},
        roiInputs: {
            tempsRepetitif: 15,
            coutActuel: 2000,
            budgetAutomation: 500,
        },
        roiResults: null,
        leadData: {},
        recommendations: [],
    });

    const [step, setStep] = useState<Step>('welcome');

    // Load state from localStorage on mount
    // Load state from localStorage on mount
    useEffect(() => {
        // Check for reset param
        const searchParams = new URLSearchParams(window.location.search);
        if (searchParams.get('reset') === 'true') {
            localStorage.removeItem('leadMagnetState');
            // Clean URL
            window.history.replaceState({}, '', '/lead-magnet');
            return;
        }

        const savedState = localStorage.getItem('leadMagnetState');
        if (savedState) {
            try {
                const parsed = JSON.parse(savedState);
                setState(parsed);
                // Restore step based on progress
                if (parsed.leadData?.email) setStep('thankYou');
                else if (parsed.roiResults) setStep('leadCapture');
                else if (Object.keys(parsed.quizResponses).length > 0) setStep('roi');
            } catch (e) {
                console.error('Error loading state', e);
            }
        }
    }, []);

    // Save state to localStorage on change
    useEffect(() => {
        localStorage.setItem('leadMagnetState', JSON.stringify(state));
    }, [state]);

    const handleWelcomeNext = () => {
        if (typeof window !== 'undefined') {
            (window as any).dataLayer = (window as any).dataLayer || [];
            (window as any).dataLayer.push({ event: 'lead_magnet_start' });
        }
        setStep('quiz');
    };

    const handleQuizNext = (responses: Partial<QuizResponses>) => {
        const recommendations = getToolRecommendations(responses);
        setState((prev) => ({
            ...prev,
            quizResponses: responses,
            recommendations,
        }));
        setStep('roi');
    };

    const handleROINext = (inputs: ROIInputs, results: ROIResults) => {
        setState((prev) => ({
            ...prev,
            roiInputs: inputs,
            roiResults: results,
        }));
        setStep('leadCapture');
    };

    const handleLeadSubmit = async (data: Partial<LeadData>) => {
        if (typeof window !== 'undefined') {
            (window as any).dataLayer = (window as any).dataLayer || [];
            (window as any).dataLayer.push({
                event: 'generate_lead',
                lead_type: 'magnet_quiz'
            });
        }
        const leadData = { ...data, timestamp: new Date().toISOString() };
        setState((prev) => ({
            ...prev,
            leadData,
        }));

        // Submit to webhook
        await submitLead({
            lead: leadData,
            quiz: state.quizResponses,
            roi: state.roiResults,
            roiInputs: state.roiInputs,
            recommendations: state.recommendations,
            timestamp: leadData.timestamp,
        });

        // Generate PDF automatically
        generatePDFReport(
            state.quizResponses,
            state.roiResults,
            state.recommendations,
            leadData
        );

        setStep('thankYou');
    };

    const handleDownload = () => {
        generatePDFReport(
            state.quizResponses,
            state.roiResults,
            state.recommendations,
            state.leadData
        );
    };

    const handleRestart = () => {
        localStorage.removeItem('leadMagnetState');
        setState({
            currentStep: 0,
            quizResponses: {},
            roiInputs: {
                tempsRepetitif: 15,
                coutActuel: 2000,
                budgetAutomation: 500,
            },
            roiResults: null,
            leadData: {},
            recommendations: [],
        });
        setStep('welcome');
    };

    // Progress bar calculation
    const getProgress = () => {
        switch (step) {
            case 'welcome': return 0;
            case 'quiz': return 25;
            case 'roi': return 50;
            case 'leadCapture': return 75;
            case 'thankYou': return 100;
            default: return 0;
        }
    };

    return (
        <div className="min-h-screen bg-[#e0e5ec] text-[#0f172a] font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
            {/* Logo Header */}
            <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-6 md:py-4" style={{ background: 'rgba(224, 229, 236, 0.95)', backdropFilter: 'blur(10px)' }}>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 md:gap-3 transition-all duration-300 hover:scale-105"
                >
                    <Image
                        src={logoUrl}
                        alt="Obsidian Partners"
                        width={48}
                        height={48}
                        className="h-8 w-8 md:h-10 md:w-10 object-contain"
                    />
                    <span className="text-sm md:text-base lg:text-lg font-light text-[#0f172a] whitespace-nowrap">
                        Obsidian <span className="font-normal text-[#1e3a8a]">Partners</span>
                    </span>
                </Link>
            </div>

            {/* Background Effects - Removed dark blobs, kept clean neumorphic background */}

            {/* Progress Bar */}
            <div className="fixed top-[60px] md:top-[68px] left-0 w-full h-1 bg-[#bec3c9] z-50">
                <div
                    className="h-full bg-[#1e3a8a] transition-all duration-500 ease-out"
                    style={{ width: `${getProgress()}%` }}
                />
            </div>

            {/* Main Content */}
            <main className="relative z-10 container mx-auto px-4 py-12 pt-24 md:pt-28 min-h-screen flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    {step === 'welcome' && (
                        <WelcomeStep key="welcome" onNext={handleWelcomeNext} />
                    )}
                    {step === 'quiz' && (
                        <QuizStep
                            key="quiz"
                            onNext={handleQuizNext}
                            initialResponses={state.quizResponses}
                        />
                    )}
                    {step === 'roi' && (
                        <ROIStep
                            key="roi"
                            onNext={handleROINext}
                            onBack={() => setStep('quiz')}
                            initialInputs={state.roiInputs}
                        />
                    )}
                    {step === 'leadCapture' && (
                        <LeadCaptureStep
                            key="leadCapture"
                            onNext={handleLeadSubmit}
                            onBack={() => setStep('roi')}
                        />
                    )}
                    {step === 'thankYou' && (
                        <ThankYouStep
                            key="thankYou"
                            onDownload={handleDownload}
                            onRestart={handleRestart}
                            roiResults={state.roiResults}
                        />
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}
