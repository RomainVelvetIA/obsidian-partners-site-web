import { jsPDF } from 'jspdf';
import {
    QuizResponses,
    ROIResults,
    ToolRecommendation,
    LeadData,
} from './types';
import { formatCurrency } from './roiCalculator';

interface ProfileSummary {
    secteur: string;
    maturite: string;
    outilsActuels: string;
    secteursImplementation: string;
    problematiques: string;
}

function getProfileSummary(quizResponses: Partial<QuizResponses>): ProfileSummary {
    const secteurLabels: { [key: string]: string } = {
        services: 'Services & Conseil',
        ecommerce: 'E-commerce & Retail',
        saas: 'SaaS & Tech',
        industrie: 'Industrie & Manufacturing',
        sante: 'Santé & Bien-être',
        autre: 'Autre Secteur',
    };

    const maturiteLabels: { [key: string]: string } = {
        debutant: 'Débutant',
        exploration: 'En exploration',
        utilisateur: 'Utilisateur actif',
        expert: 'Expert',
    };

    const secteurImplementationLabels = {
        marketing: 'Marketing',
        rh: 'RH',
        finance: 'Finance',
        ventes: 'Ventes',
        support: 'Support',
        production: 'Production',
    };

    const problematiquesLabels = {
        temps: 'Manque de temps',
        couts: 'Coûts élevés',
        competences: 'Manque de compétences',
        tachesRepetitives: 'Tâches répétitives',
        scalabilite: 'Difficultés à scaler',
        qualite: 'Problèmes de qualité',
    };

    return {
        secteur: secteurLabels[quizResponses.secteur || ''] || quizResponses.secteur || 'Non spécifié',
        maturite:
            maturiteLabels[quizResponses.maturite || ''] || quizResponses.maturite || 'Non spécifié',
        outilsActuels: quizResponses.outilsActuels?.join(', ') || 'Aucun',
        secteursImplementation:
            quizResponses.secteursImplementation
                ?.map((s) => secteurImplementationLabels[s as keyof typeof secteurImplementationLabels] || s)
                .join(', ') || 'Non spécifié',
        problematiques:
            quizResponses.problematiques
                ?.map((p) => problematiquesLabels[p as keyof typeof problematiquesLabels] || p)
                .join(', ') || 'Non spécifié',
    };
}

function generatePersonalizedAdvice(
    quizResponses: Partial<QuizResponses>,
    roiResults: ROIResults | null
): string[] {
    const advice: string[] = [];

    // Based on implementation sectors
    if (quizResponses.secteursImplementation?.includes('marketing')) {
        advice.push(
            'Commencez par automatiser la création de contenu avec des outils comme Jasper ou Copy.ai pour un ROI rapide.'
        );
    }
    if (quizResponses.secteursImplementation?.includes('rh')) {
        advice.push(
            "Automatisez le screening de CVs et la planification d'entretiens pour économiser jusqu'à 70% du temps de recrutement."
        );
    }
    if (quizResponses.secteursImplementation?.includes('finance')) {
        advice.push(
            'La catégorisation automatique et le rapprochement bancaire peuvent réduire de 80% le temps de comptabilité.'
        );
    }
    if (quizResponses.secteursImplementation?.includes('ventes')) {
        advice.push(
            "Utilisez l'intelligence conversationnelle pour qualifier vos leads 24/7 et augmenter votre taux de conversion."
        );
    }

    // Based on maturity level
    if (quizResponses.maturite === 'debutant') {
        advice.push('Commencez par un seul outil bien maîtrisé plutôt que plusieurs outils sous-utilisés.');
        advice.push("Formez votre équipe avec des tutoriels et ressources fournies par les éditeurs.");
    } else if (quizResponses.maturite === 'expert') {
        advice.push(
            'Explorez les intégrations API pour créer des workflows personnalisés entre vos outils IA.'
        );
    }

    // Based on ROI
    if (roiResults) {
        if (roiResults.roiPercentage > 100) {
            advice.push(
                `Avec un ROI de ${roiResults.roiPercentage}%, l'investissement sera rentabilisé très rapidement. N'attendez pas pour commencer.`
            );
        } else if (roiResults.roiPercentage > 0) {
            advice.push(
                'Mesurez régulièrement vos métriques de productivité pour optimiser votre utilisation.'
            );
        }

        if (roiResults.tempsEconomise > 40) {
            advice.push(
                `Avec ${roiResults.tempsEconomise}h économisées par mois, vous pourrez réallouer ces ressources vers des tâches à plus forte valeur ajoutée.`
            );
        }
    }

    // General advice
    advice.push(
        "Commencez petit, mesurez les résultats, puis scalez progressivement votre adoption de l'IA."
    );
    advice.push(
        "Impliquez votre équipe dès le début pour faciliter l'adoption et recueillir des feedbacks."
    );

    return advice.slice(0, 6); // Limit to 6 pieces of advice
}

export function generatePDFReport(
    quizResponses: Partial<QuizResponses>,
    roiResults: ROIResults | null,
    recommendations: ToolRecommendation[],
    leadData: Partial<LeadData>
): void {
    const doc = new jsPDF();

    // Set up styling
    const primaryColor: [number, number, number] = [102, 126, 234];
    const textColor: [number, number, number] = [51, 51, 51];
    const lightGray: [number, number, number] = [240, 240, 240];

    let yPos = 20;

    // Header
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, 210, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('Votre Rapport IA Personnalise', 105, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text("Recommandations d'outils et analyse ROI", 105, 30, { align: 'center' });

    yPos = 50;

    // Profile Summary Section
    doc.setTextColor(...textColor);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Votre Profil', 20, yPos);
    yPos += 10;

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    const profileSummary = getProfileSummary(quizResponses);

    doc.text(`Secteur: ${profileSummary.secteur}`, 25, yPos);
    yPos += 7;
    doc.text(`Maturite: ${profileSummary.maturite}`, 25, yPos);
    yPos += 7;
    doc.text(`Outils actuels: ${profileSummary.outilsActuels}`, 25, yPos);
    yPos += 7;
    doc.text(`Secteurs implementation: ${profileSummary.secteursImplementation}`, 25, yPos);
    yPos += 15;

    // ROI Summary Section
    if (roiResults) {
        doc.setFillColor(...lightGray);
        doc.roundedRect(15, yPos - 5, 180, 45, 3, 3, 'F');

        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...primaryColor);
        doc.text('Votre ROI Estime', 20, yPos + 3);
        yPos += 12;

        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...textColor);

        doc.text(`Temps economise: ${roiResults.tempsEconomise} heures/mois`, 25, yPos);
        yPos += 8;
        doc.text(`Gain mensuel net: ${formatCurrency(roiResults.gainMensuel)}`, 25, yPos);
        yPos += 8;

        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...primaryColor);
        doc.text(
            `ROI: ${roiResults.roiPercentage > 0 ? '+' : ''}${roiResults.roiPercentage}%`,
            25,
            yPos
        );
        yPos += 8;

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...textColor);
        doc.text(`Gain annuel: ${formatCurrency(roiResults.gainAnnuel)}`, 25, yPos);
        yPos += 15;
    }

    // Recommendations Section
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...textColor);
    doc.text('Outils IA Recommandes', 20, yPos);
    yPos += 10;

    recommendations.forEach((tool, index) => {
        // Check if we need a new page
        if (yPos > 250) {
            doc.addPage();
            yPos = 20;
        }

        // Tool card
        doc.setFillColor(...lightGray);
        doc.roundedRect(15, yPos - 3, 180, 8, 2, 2, 'F');

        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...primaryColor);
        doc.text(`${index + 1}. ${tool.nom}`, 20, yPos + 3);

        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 100, 100);
        doc.text(String(tool.prixMensuel), 170, yPos + 3);

        yPos += 10;

        doc.setFontSize(10);
        doc.setTextColor(...textColor);
        const descLines = doc.splitTextToSize(tool.description, 170);
        doc.text(descLines, 20, yPos);
        yPos += descLines.length * 5 + 3;

        doc.setFontSize(9);
        doc.setFont('helvetica', 'bold');
        doc.text('Points forts:', 20, yPos);
        yPos += 5;

        doc.setFont('helvetica', 'normal');
        tool.pointsForts.slice(0, 3).forEach((point) => {
            if (yPos > 270) {
                doc.addPage();
                yPos = 20;
            }
            doc.text(`- ${point}`, 23, yPos);
            yPos += 5;
        });

        doc.setFont('helvetica', 'italic');
        doc.setTextColor(...primaryColor);
        doc.text(`Compatibilite: ${tool.score}%`, 20, yPos);
        yPos += 10;
    });

    // Personalized Advice Section
    if (yPos > 220) {
        doc.addPage();
        yPos = 20;
    }

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...textColor);
    doc.text('Conseils Personnalises', 20, yPos);
    yPos += 10;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    const advice = generatePersonalizedAdvice(quizResponses, roiResults);
    advice.forEach((tip) => {
        if (yPos > 270) {
            doc.addPage();
            yPos = 20;
        }

        const lines = doc.splitTextToSize(`• ${tip}`, 170);
        doc.text(lines, 20, yPos);
        yPos += lines.length * 6 + 3;
    });

    // Footer
    if (yPos > 250) {
        doc.addPage();
        yPos = 20;
    }

    yPos = 280;
    doc.setFillColor(...primaryColor);
    doc.rect(0, yPos, 210, 17, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(
        `Genere par Obsidian Partners - ${new Date().toLocaleDateString('fr-FR')}`,
        105,
        yPos + 8,
        { align: 'center' }
    );

    if (leadData?.email) {
        doc.text(`Pour: ${leadData.nom} (${leadData.email})`, 105, yPos + 13, { align: 'center' });
    }

    // Save PDF
    const fileName = `Rapport-IA-${leadData?.nom?.replace(/\s+/g, '-') || 'Personnalise'}-${Date.now()}.pdf`;
    doc.save(fileName);
}
