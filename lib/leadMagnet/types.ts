// TypeScript types for the Lead Magnet application

export interface QuizResponses {
  secteur: string;
  maturite: string;
  outilsActuels: string[];
  autresOutils?: string;
  secteursImplementation: string[];
  problematiques: string[];
}

export interface ROIInputs {
  tempsRepetitif: number; // hours per week
  coutActuel: number; // € / month
  budgetAutomation: number; // € / month
  objectifsAutomation?: string;
}

export interface ROIResults {
  tempsEconomise: number; // hours per month
  gainMensuel: number; // € / month
  roiPercentage: number; // %
  gainAnnuel: number; // € / year
}

export interface LeadData {
  nom: string;
  email: string;
  societe: string;
  telephone?: string;
  consent: boolean;
  newsletter: boolean;
  timestamp: string;
}

export interface Tool {
  id: string;
  nom: string;
  categorie: string;
  description: string;
  fonctionnalites: string[];
  prixMensuel: number | string;
  secteurs: string[];
  maturiteRecommandee: string[];
  problematiquesResolues: string[];
  pointsForts: string[];
  url?: string;
}

export interface ToolRecommendation extends Tool {
  score: number;
  raisons: string[];
}

export interface AppState {
  currentStep: number;
  quizResponses: Partial<QuizResponses>;
  roiInputs: ROIInputs;
  roiResults: ROIResults | null;
  leadData: Partial<LeadData>;
  recommendations: ToolRecommendation[];
}

export type Step = 'welcome' | 'quiz' | 'roi' | 'leadCapture' | 'thankYou';
