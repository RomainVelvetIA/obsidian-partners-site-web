import { LeadData, QuizResponses, ROIInputs, ROIResults, ToolRecommendation } from './types';

const WEBHOOK_URL = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL || '';

export interface LeadSubmissionData {
    lead: Partial<LeadData>;
    quiz: Partial<QuizResponses>;
    roi: ROIResults | null;
    roiInputs: ROIInputs;
    recommendations: ToolRecommendation[];
    timestamp: string;
}

// Submit lead to webhook (Google Sheets or CRM)
export async function submitLead(data: LeadSubmissionData): Promise<boolean> {
    try {
        // Store in localStorage as backup
        const leads = getStoredLeads();
        leads.push(data);
        localStorage.setItem('leadMagnetLeads', JSON.stringify(leads));

        // Send to webhook if configured
        if (WEBHOOK_URL) {
            // Transform data to match Google Apps Script expectation
            const payload = {
                nom: data.lead.nom,
                email: data.lead.email,
                societe: data.lead.societe,
                telephone: data.lead.telephone,
                newsletter: data.lead.newsletter,
                userProfile: {
                    secteur: data.quiz.secteur,
                    maturite: data.quiz.maturite,
                    outilsActuels: data.quiz.outilsActuels,
                    autresOutils: data.quiz.autresOutils,
                    secteursImplementation: data.quiz.secteursImplementation,
                    problematiques: data.quiz.problematiques
                },
                roiData: {
                    tempsRepetitif: data.roiInputs.tempsRepetitif,
                    coutActuel: data.roiInputs.coutActuel,
                    budgetAutomation: data.roiInputs.budgetAutomation,
                    objectifsAutomation: data.roiInputs.objectifsAutomation,
                    roiPercentage: data.roi?.roiPercentage,
                    gainMensuel: data.roi?.gainMensuel
                }
            };

            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8', // Use text/plain to avoid preflight with no-cors, though GAS handles it
                },
                body: JSON.stringify(payload),
                mode: 'no-cors', // For Google Apps Script
            });

            // Note: no-cors mode doesn't allow reading response
            // We assume success if no error is thrown
            console.log('Lead submitted to webhook');
        }

        return true;
    } catch (error) {
        console.error('Error submitting lead:', error);
        // Still return true since we saved locally
        return true;
    }
}

// Get all stored leads from localStorage
export function getStoredLeads(): LeadSubmissionData[] {
    try {
        const stored = localStorage.getItem('leadMagnetLeads');
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Error reading stored leads:', error);
        return [];
    }
}

// Validate email format
export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone format (French format)
export function validatePhone(phone: string): boolean {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Export leads to CSV
export function exportLeadsToCSV(): void {
    const leads = getStoredLeads();
    if (leads.length === 0) {
        alert('Aucun lead à exporter');
        return;
    }

    const headers = [
        'Date',
        'Nom',
        'Email',
        'Société',
        'Téléphone',
        'Secteur',
        'Maturité',
        'ROI %',
        'Gain Mensuel',
        'Consentement',
        'Newsletter',
    ];

    const rows = leads.map((lead) => [
        lead.timestamp,
        lead.lead.nom || '',
        lead.lead.email || '',
        lead.lead.societe || '',
        lead.lead.telephone || '',
        lead.quiz.secteur || '',
        lead.quiz.maturite || '',
        lead.roi?.roiPercentage || 0,
        lead.roi?.gainMensuel || 0,
        lead.lead.consent ? 'Oui' : 'Non',
        lead.lead.newsletter ? 'Oui' : 'Non',
    ]);

    const csvContent = [headers, ...rows].map((row) => row.join(',')).join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
}
