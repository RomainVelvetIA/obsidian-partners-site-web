import { ROIInputs, ROIResults } from './types';

export function calculateROI(inputs: ROIInputs): ROIResults {
    const { tempsRepetitif, coutActuel, budgetAutomation } = inputs;

    // Calculate monthly time saved (assuming 70% automation efficiency)
    const automationEfficiency = 0.7;
    const heuresParSemaine = tempsRepetitif * automationEfficiency;
    const tempsEconomise = heuresParSemaine * 4.33; // Average weeks per month

    // Calculate monthly gain
    const economieDirecte = coutActuel * automationEfficiency;
    const gainMensuel = economieDirecte - budgetAutomation;

    // Calculate ROI percentage
    let roiPercentage = 0;
    if (budgetAutomation > 0) {
        roiPercentage = ((gainMensuel / budgetAutomation) * 100);
    }

    // Calculate annual gain
    const gainAnnuel = gainMensuel * 12;

    return {
        tempsEconomise: Math.round(tempsEconomise),
        gainMensuel: Math.round(gainMensuel),
        roiPercentage: Math.round(roiPercentage),
        gainAnnuel: Math.round(gainAnnuel),
    };
}

// Format currency for display
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

// Format percentage for display
export function formatPercentage(value: number): string {
    return `${value}%`;
}
