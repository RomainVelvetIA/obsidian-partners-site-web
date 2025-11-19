'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowLeft,
  BarChart3,
  Check,
  DollarSign,
  FileCheck,
  Map,
  MessageCircle,
  Search,
  Settings,
  Target
} from 'lucide-react';

interface StepCard {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  duration: string;
}

const analysisSteps: StepCard[] = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Recueil de l’Information',
    description: 'Collecte d’informations pour comprendre vos objectifs stratégiques, vos processus internes et vos problématiques actuelles.',
    duration: '1 jour'
  },
  {
    icon: Search,
    number: '02',
    title: 'Analyse stratégique',
    description: 'Identification des opportunités clés où l\'IA peut apporter une réelle valeur ajoutée à votre entreprise.',
    duration: '1-2 jours'
  },
  {
    icon: FileCheck,
    number: '03',
    title: 'Comparaison des acteurs',
    description: 'Comparaison exhaustive des solutions selon le cahier des charges établi.',
    duration: '3-4 jours'
  },
  {
    icon: Check,
    number: '04',
    title: 'Recommandations',
    description: 'Nous vous recommandons les meilleures solutions identifiées',
    duration: '1 jour'
  }
];

const auditSteps: StepCard[] = [
  {
    icon: Map,
    number: '01',
    title: 'Cartographie complète de votre fonctionnement',
    description: "Analyse complète de vos processus pour comprendre précisément comment votre entreprise crée, transfère et utilise l’information quotidiennement.",
  },
  {
    icon: BarChart3,
    number: '02',
    title: "Détection des frictions et inefficiences cachées",
    description: 'Identification des tâches répétitives et chronophages, ainsi que les pertes de temps qui impactent votre performance opérationnelle.',
  },
  {
    icon: Target,
    number: '03',
    title: 'Analyse du potentiel d’automatisation et d’IA',
    description: 'Nous évaluons chaque opportunité pour déterminer où l’intelligence artificielle peut générer des gains immédiats et mesurables puis rédigeons un cahier des charges.',
  },
  {
    icon: Settings,
    number: '04',
    title: "Recommandations structurées et feuille de route priorisée",
    description: "Nous vous livrons le cahier des charges, ainsi qu’un plan d’action clair, classé, mentionnant les meilleures solutions du marché sélectionnées.",
  }
];

const CardGrid = ({ steps }: { steps: StepCard[] }) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    {steps.map((step, index) => (
      <motion.div
        key={step.number}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative h-full"
      >
        <div
          className="flex h-full flex-col rounded-2xl p-4 md:p-6 transition-all duration-300 hover:scale-[1.02]"
          style={{ background: '#e0e5ec', boxShadow: '10px 10px 20px #bec3c9, -10px -10px 20px #ffffff' }}
        >
          <div
            className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-xl"
            style={{ background: '#e0e5ec', boxShadow: 'inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff' }}
          >
            <span className="text-sm font-light text-[#1e3a8a]">{step.number}</span>
          </div>

          <div
            className="mb-4 inline-flex rounded-xl p-3"
            style={{ background: '#e0e5ec', boxShadow: 'inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff' }}
          >
            <step.icon className="h-6 w-6 text-[#1e3a8a]" />
          </div>

          <h3 className="mb-2 text-lg font-light text-[#0f172a]">{step.title}</h3>
          <p className="mb-4 flex-grow text-sm font-light leading-relaxed text-[#374151]">{step.description}</p>

          <div
            className="inline-flex self-start rounded-lg px-3 py-1"
            style={{ background: '#e0e5ec', boxShadow: 'inset 2px 2px 4px #bec3c9, inset -2px -2px 4px #ffffff' }}
          >
            <span className="text-xs font-light text-[#374151]">{step.duration}</span>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

export default function ProcessSection() {
  return (
    <section id="process" className="px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-extralight text-[#0f172a] md:text-5xl">
            Notre <span className="text-[#1e3a8a]">accompagnement</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-[#374151]">
            Deux approches méthodologiques adaptées à vos besoins
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div
            className="mb-4 inline-flex rounded-2xl px-4 py-2 md:px-6 md:py-3"
            style={{ background: '#e0e5ec', boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff' }}
          >
            <h3 className="text-xl md:text-2xl font-light text-[#0f172a]">
              Analyse des <span className="text-[#1e3a8a]">Besoins</span>
            </h3>
          </div>
          <p className="text-sm font-light text-[#374151]">Durée : environ 1 semaine</p>
        </motion.div>

        <CardGrid steps={analysisSteps} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div
            className="mb-4 inline-flex rounded-2xl px-4 py-2 md:px-6 md:py-3"
            style={{ background: '#e0e5ec', boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff' }}
          >
            <h3 className="text-xl md:text-2xl font-light text-[#0f172a]">
              Audit <span className="text-[#1e3a8a]">Approfondi</span>
            </h3>
          </div>
          <p className="text-sm font-light text-[#374151]">Durée : Variable</p>
        </motion.div>

        <div className="mt-10">
          <CardGrid steps={auditSteps} />
        </div>
      </div>
    </section>
  );
}
