'use client';

import React, { useState, useEffect } from 'react';
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
            {/* Background Effects - Removed dark blobs, kept clean neumorphic background */}

            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-[#bec3c9] z-50">
                <div
                    className="h-full bg-[#1e3a8a] transition-all duration-500 ease-out"
                    style={{ width: `${getProgress()}%` }}
                />
            </div>

            {/* Main Content */}
            <main className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex flex-col justify-center">
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
