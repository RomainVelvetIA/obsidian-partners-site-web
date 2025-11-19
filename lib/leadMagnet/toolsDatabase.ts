import { Tool, ToolRecommendation, QuizResponses } from './types';

// AI Tools Database - Converted from JavaScript
export const aiTools: Tool[] = [
    // Marketing & Communication Tools
    {
        id: 'jasper',
        nom: 'Jasper AI',
        categorie: 'Génération de Contenu',
        description:
            "Plateforme complète de création de contenu marketing avec l'IA. Génération d'articles, posts sociaux, emails, et plus encore avec des templates prêts à l'emploi.",
        prixMensuel: 'À partir de 49€/mois',
        fonctionnalites: [
            'Génération de contenus longs et courts',
            'Templates pour tous types de contenu',
            'Support multilingue',
            'Optimisation SEO intégrée',
            'Brand Voice personnalisable',
        ],
        secteurs: ['marketing', 'ventes'],
        maturiteRecommandee: ['debutant', 'exploration', 'utilisateur'],
        problematiquesResolues: ['temps', 'tachesRepetitives'],
        pointsForts: ['Puissant pour le contenu long', 'Templates variés', 'SEO intégré'],
        url: 'https://www.jasper.ai',
    },
    {
        id: 'copy-ai',
        nom: 'Copy.ai',
        categorie: 'Copywriting',
        description:
            'Assistant IA spécialisé dans la création de copy marketing et publicitaire. Parfait pour les landing pages, publicités et contenu commercial.',
        prixMensuel: 'Gratuit puis 49$/mois',
        fonctionnalites: [
            '90+ templates de copywriting',
            'Génération de variantes multiples',
            'Ton de voix personnalisable',
            'Intégration avec outils marketing',
            'Traduction instantanée',
        ],
        secteurs: ['marketing', 'ventes'],
        maturiteRecommandee: ['debutant', 'exploration'],
        problematiquesResolues: ['temps', 'tachesRepetitives'],
        pointsForts: ['Facile à prendre en main', 'Excellent pour ads', 'Freemium généreux'],
        url: 'https://www.copy.ai',
    },
    {
        id: 'midjourney',
        nom: 'Midjourney',
        categorie: "Génération d'Images",
        description:
            "Générateur d'images IA de haute qualité. Idéal pour créer des visuels marketing, des illustrations et du contenu visuel unique.",
        prixMensuel: 'À partir de 10$/mois',
        fonctionnalites: [
            'Images ultra-réalistes',
            'Styles artistiques variés',
            'Haute résolution',
            'Variations infinies',
            'Communauté active',
        ],
        secteurs: ['marketing'],
        maturiteRecommandee: ['exploration', 'utilisateur'],
        problematiquesResolues: ['temps', 'couts'],
        pointsForts: ['Qualité exceptionnelle', 'Créativité illimitée', 'Prix abordable'],
        url: 'https://www.midjourney.com',
    },

    // HR Tools
    {
        id: 'eightfold',
        nom: 'Eightfold AI',
        categorie: 'Recrutement',
        description:
            "Plateforme de gestion des talents propulsée par l'IA. Matching candidats, recommandations de carrière et analytics RH avancés.",
        prixMensuel: 'Sur devis',
        fonctionnalites: [
            'Matching intelligent candidat-poste',
            'Analyse de compétences',
            'Prédiction de performance',
            'Gestion de carrière',
            'Réduction des biais',
        ],
        secteurs: ['rh'],
        maturiteRecommandee: ['utilisateur', 'expert'],
        problematiquesResolues: ['temps', 'qualite', 'competences'],
        pointsForts: ['Très puissant', 'Réduction des biais', 'Analytics avancés'],
        url: 'https://www.eightfold.ai',
    },
    {
        id: 'paradox',
        nom: 'Paradox (Olivia)',
        categorie: 'Recrutement Automatisé',
        description:
            "Assistant conversationnel pour automatiser le recrutement. Screening de candidats, planification d'entretiens et onboarding.",
        prixMensuel: 'Sur devis',
        fonctionnalites: [
            'Chatbot conversationnel',
            'Screening automatique',
            "Planification d'entretiens",
            'SMS et messaging',
            'Intégration ATS',
        ],
        secteurs: ['rh'],
        maturiteRecommandee: ['debutant', 'exploration'],
        problematiquesResolues: ['temps', 'tachesRepetitives'],
        pointsForts: ['Facile à déployer', 'Gain de temps majeur', 'Expérience candidat'],
        url: 'https://www.paradox.ai',
    },

    // Finance Tools
    {
        id: 'bookkeep',
        nom: 'Bookkeep AI',
        categorie: 'Comptabilité Automatisée',
        description:
            'Automatisation intelligente de la comptabilité et catégorisation des transactions. Connexion directe avec vos comptes bancaires.',
        prixMensuel: 'À partir de 50$/mois',
        fonctionnalites: [
            'Catégorisation automatique',
            'Rapprochement bancaire',
            "Détection d'anomalies",
            'Prévisions financières',
            'Intégration comptable',
        ],
        secteurs: ['finance'],
        maturiteRecommandee: ['debutant', 'exploration'],
        problematiquesResolues: ['temps', 'tachesRepetitives', 'qualite'],
        pointsForts: ['Automatisation complète', 'Détection erreurs', 'ROI rapide'],
        url: 'https://www.bookkeep.com',
    },
    {
        id: 'trullion',
        nom: 'Trullion',
        categorie: 'Audit & Conformité',
        description:
            'IA pour automatiser la comptabilité de contrats, leases et revenus. Conformité IFRS 16 et ASC 842.',
        prixMensuel: 'Sur devis',
        fonctionnalites: [
            'Extraction de données de contrats',
            'Comptabilité de leases',
            'Conformité automatique',
            'Audit trail complet',
            'Reporting financier',
        ],
        secteurs: ['finance'],
        maturiteRecommandee: ['expert'],
        problematiquesResolues: ['temps', 'qualite', 'competences'],
        pointsForts: ['Conformité garantie', 'Audit facilité', 'Gain de temps audit'],
        url: 'https://www.trullion.com',
    },

    // Sales Tools
    {
        id: 'gong',
        nom: 'Gong.io',
        categorie: 'Revenue Intelligence',
        description:
            "Analyse conversationnelle des appels commerciaux. Insights automatiques, coaching et prévisions de vente améliorées.",
        prixMensuel: 'Sur devis',
        fonctionnalites: [
            "Transcription d'appels",
            'Analyse de sentiment',
            'Deal intelligence',
            'Coaching automatique',
            'Prévisions de CA',
        ],
        secteurs: ['ventes'],
        maturiteRecommandee: ['utilisateur', 'expert'],
        problematiquesResolues: ['qualite', 'competences', 'scalabilite'],
        pointsForts: ['Insights puissants', 'Coaching data-driven', 'Prévisions précises'],
        url: 'https://www.gong.io',
    },
    {
        id: 'drift',
        nom: 'Drift',
        categorie: 'Conversational Marketing',
        description:
            'Chatbot intelligent pour qualifier les leads et booker des meetings automatiquement. Marketing conversationnel complet.',
        prixMensuel: 'À partir de 2500$/mois',
        fonctionnalites: [
            'Chatbot conversationnel',
            'Qualification de leads',
            'Booking automatique',
            'Personnalisation avancée',
            'Analytics en temps réel',
        ],
        secteurs: ['ventes', 'marketing'],
        maturiteRecommandee: ['utilisateur', 'expert'],
        problematiquesResolues: ['temps', 'scalabilite'],
        pointsForts: ['Qualification automatique', 'Conversions améliorées', 'Données riches'],
        url: 'https://www.drift.com',
    },

    // Tech & Development
    {
        id: 'github-copilot',
        nom: 'GitHub Copilot',
        categorie: 'Pair Programming IA',
        description:
            'Assistant de code propulsé par IA. Suggestions de code en temps réel, génération de fonctions et documentation automatique.',
        prixMensuel: '10$/mois',
        fonctionnalites: [
            'Autocomplétion intelligente',
            'Génération de code',
            'Support multi-langages',
            'Explications de code',
            'Tests automatiques',
        ],
        secteurs: ['production'],
        maturiteRecommandee: ['utilisateur', 'expert'],
        problematiquesResolues: ['temps', 'productivite'],
        pointsForts: ['Productivité +40%', 'Apprentissage rapide', 'Prix imbattable'],
        url: 'https://github.com/copilot',
    },
    {
        id: 'tabnine',
        nom: 'Tabnine',
        categorie: 'Code Completion',
        description:
            'Autocomplétion de code IA avec support pour tous les langages. Fonctionne en local pour la sécurité des données.',
        prixMensuel: 'Gratuit puis 12$/mois',
        fonctionnalites: [
            'Autocomplétion locale',
            'Support tous langages',
            'Sécurité des données',
            'Apprentissage du style',
            'Intégrations IDE',
        ],
        secteurs: ['production'],
        maturiteRecommandee: ['debutant', 'exploration', 'utilisateur', 'expert'],
        problematiquesResolues: ['temps', 'productivite'],
        pointsForts: ['Sécurité maximale', 'Local-first', 'Gratuit pour commencer'],
        url: 'https://www.tabnine.com',
    },

    // Universal Tools
    {
        id: 'chatgpt',
        nom: 'ChatGPT (Teams/Enterprise)',
        categorie: 'Assistant IA Universel',
        description:
            'Assistant conversationnel polyvalent pour toutes les tâches: rédaction, analyse, code, recherche. Version entreprise avec données privées.',
        prixMensuel: '25$/mois par utilisateur',
        fonctionnalites: [
            'Conversations illimitées',
            'GPT-4 inclus',
            'Données privées',
            'Espace de travail partagé',
            'Intégrations possibles',
        ],
        secteurs: ['marketing', 'rh', 'finance', 'ventes', 'support', 'production'],
        maturiteRecommandee: ['debutant', 'exploration', 'utilisateur', 'expert'],
        problematiquesResolues: ['temps', 'productivite', 'competences'],
        pointsForts: ['Polyvalent', 'Puissant', 'Données privées'],
        url: 'https://openai.com/chatgpt',
    },
    {
        id: 'notion-ai',
        nom: 'Notion AI',
        categorie: 'Workspace Augmenté',
        description:
            'IA intégrée directement dans Notion. Rédaction, résumés, traduction et organisation automatique de vos documents.',
        prixMensuel: '10$/mois par utilisateur',
        fonctionnalites: [
            'Rédaction assistée',
            'Résumés automatiques',
            'Traduction instantanée',
            'Amélioration de texte',
            'Q&A sur vos docs',
        ],
        secteurs: ['marketing', 'rh', 'finance', 'ventes', 'support', 'production'],
        maturiteRecommandee: ['debutant', 'exploration'],
        problematiquesResolues: ['temps', 'productivite'],
        pointsForts: ['Intégré à Notion', 'Facile', 'Prix doux'],
        url: 'https://www.notion.so/product/ai',
    },
    {
        id: 'zapier',
        nom: 'Zapier (avec IA)',
        categorie: 'Automatisation',
        description:
            'Automatisation no-code entre 5000+ applications. Nouvelles fonctionnalités IA pour créer des workflows intelligents.',
        prixMensuel: 'Gratuit puis 29$/mois',
        fonctionnalites: [
            '5000+ intégrations',
            'Workflows intelligents',
            'Traitement de données IA',
            'Déclencheurs conditionnels',
            'Templates prêts',
        ],
        secteurs: ['marketing', 'rh', 'finance', 'ventes', 'support', 'production'],
        maturiteRecommandee: ['debutant', 'exploration', 'utilisateur', 'expert'],
        problematiquesResolues: ['temps', 'tachesRepetitives', 'scalabilite'],
        pointsForts: ['5000+ apps', 'No-code', 'ROI rapide'],
        url: 'https://zapier.com',
    },
    {
        id: 'perplexity',
        nom: 'Perplexity Pro',
        categorie: 'Recherche IA',
        description:
            "Moteur de recherche IA qui cite ses sources. Parfait pour la veille, recherche et synthèse d'information.",
        prixMensuel: '20$/mois',
        fonctionnalites: [
            'Recherche avec sources',
            'Synthèse instantanée',
            'Mode focus (academic, writing)',
            'GPT-4 et Claude',
            "Recherche d'images",
        ],
        secteurs: ['marketing', 'rh', 'finance', 'ventes', 'support', 'production'],
        maturiteRecommandee: ['debutant', 'exploration', 'utilisateur', 'expert'],
        problematiquesResolues: ['temps', 'competences'],
        pointsForts: ['Sources citées', 'Veille efficace', 'Synthèse rapide'],
        url: 'https://www.perplexity.ai',
    },
    {
        id: 'intercom',
        nom: 'Intercom Fin',
        categorie: 'Support Client IA',
        description:
            "Chatbot de support client propulsé par IA. Résout jusqu'à 50% des demandes automatiquement.",
        prixMensuel: 'À partir de 74$/mois',
        fonctionnalites: [
            'Résolution automatique',
            'Apprentissage continu',
            'Multicanal (web, mobile, email)',
            'Analytics détaillés',
            'Escalade intelligente',
        ],
        secteurs: ['support', 'ventes', 'marketing'],
        maturiteRecommandee: ['utilisateur', 'expert'],
        problematiquesResolues: ['temps', 'scalabilite', 'couts'],
        pointsForts: ['50% tickets résolus', 'Multicanal', 'Satisfaction client'],
        url: 'https://www.intercom.com',
    },
];

// Calculate match score for a tool based on user profile
function calculateToolScore(tool: Tool, quizResponses: Partial<QuizResponses>): number {
    let score = 0;

    // Match secteur implementation (40 points)
    if (quizResponses.secteursImplementation && quizResponses.secteursImplementation.length > 0) {
        const matchingSecteurs = quizResponses.secteursImplementation.filter((secteur) =>
            tool.secteurs.includes(secteur)
        );
        score += (matchingSecteurs.length / quizResponses.secteursImplementation.length) * 40;
    }

    // Match maturite (30 points)
    if (quizResponses.maturite && tool.maturiteRecommandee.includes(quizResponses.maturite)) {
        score += 30;
    }

    // Match problematiques (30 points)
    if (quizResponses.problematiques && quizResponses.problematiques.length > 0) {
        const matchingProblematiques = quizResponses.problematiques.filter((prob) =>
            tool.problematiquesResolues.includes(prob)
        );
        score += (matchingProblematiques.length / quizResponses.problematiques.length) * 30;
    }

    return Math.round(score);
}

// Generate reasons for recommendation
function generateRecommendationReasons(
    tool: Tool,
    quizResponses: Partial<QuizResponses>
): string[] {
    const reasons: string[] = [];

    // Secteur match
    if (quizResponses.secteursImplementation) {
        const matchingSecteurs = quizResponses.secteursImplementation.filter((secteur) =>
            tool.secteurs.includes(secteur)
        );
        if (matchingSecteurs.length > 0) {
            const secteurNames: { [key: string]: string } = {
                marketing: 'Marketing & Communication',
                rh: 'Ressources Humaines',
                finance: 'Finance & Comptabilité',
                ventes: 'Ventes & Business Dev',
                support: 'Support Client',
                production: 'Production & Opérations',
            };
            reasons.push(
                `Adapté à vos besoins en ${matchingSecteurs.map((s) => secteurNames[s] || s).join(', ')}`
            );
        }
    }

    // Maturite match
    if (quizResponses.maturite) {
        const maturiteLabels: { [key: string]: string } = {
            debutant: 'débutants',
            exploration: 'utilisateurs en exploration',
            utilisateur: 'utilisateurs actifs',
            expert: 'experts',
        };
        if (tool.maturiteRecommandee.includes(quizResponses.maturite)) {
            reasons.push(
                `Idéal pour les ${maturiteLabels[quizResponses.maturite] || quizResponses.maturite}`
            );
        }
    }

    // Problematiques match
    if (quizResponses.problematiques) {
        const matchingProblematiques = quizResponses.problematiques.filter((prob) =>
            tool.problematiquesResolues.includes(prob)
        );
        if (matchingProblematiques.length > 0) {
            const probLabels: { [key: string]: string } = {
                temps: 'manque de temps',
                couts: 'coûts opérationnels',
                competences: 'manque de compétences IA',
                tachesRepetitives: 'tâches répétitives',
                scalabilite: 'difficultés à scaler',
                qualite: 'problèmes de qualité',
            };
            reasons.push(
                `Résout vos problématiques de ${matchingProblematiques.map((p) => probLabels[p] || p).join(', ')}`
            );
        }
    }

    // Add top strengths
    if (tool.pointsForts.length > 0) {
        reasons.push(tool.pointsForts[0]);
    }

    return reasons;
}

// Get tool recommendations based on quiz responses
export function getToolRecommendations(
    quizResponses: Partial<QuizResponses>,
    limit: number = 5
): ToolRecommendation[] {
    const toolsWithScores = aiTools.map((tool) => {
        const score = calculateToolScore(tool, quizResponses);
        const raisons = generateRecommendationReasons(tool, quizResponses);

        return {
            ...tool,
            score,
            raisons,
        };
    });

    // Sort by score and return top results
    return toolsWithScores.sort((a, b) => b.score - a.score).slice(0, limit);
}
