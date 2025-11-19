'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Clock, Shield, Target, TrendingUp, Users, Zap } from 'lucide-react';

interface ProblemCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const problems: ProblemCard[] = [
  {
    icon: Clock,
    title: 'Gain de temps',
    description:
      'Nous simplifions la sélection et l\'intégration des technologies IA, permettant à vos équipes de se concentrer sur leur cœur de métier.'
  },
  {
    icon: TrendingUp,
    title: 'Optimisation des coûts',
    description:
      'En négociant pour vous les meilleures solutions IA, nous vous garantissons un retour sur investissement maximal sans dépassement de budget.'
  },
  {
    icon: Target,
    title: 'Accès à l\'expertise',
    description:
      'En tant que courtiers IA, nous vous offrons une expertise pointue pour naviguer dans un marché complexe et en constante évolution.'
  },
  {
    icon: Users,
    title: 'Négociation avantageuse',
    description:
      'Nous mettons à profit notre réseau et notre connaissance du marché pour vous obtenir les meilleures conditions contractuelles et des solutions adaptées à vos besoins.'
  },
  {
    icon: Shield,
    title: 'Amélioration de l\'expérience',
    description:
      'Nous vous accompagnons tout au long du processus, garantissant une expérience fluide et un déploiement rapide des solutions IA, sans complexité.'
  },
  {
    icon: Zap,
    title: 'Renforcement de la compétitivité',
    description:
      'En vous apportant des solutions IA performantes, nous vous aidons à rester compétitif sur un marché en pleine transformation.'
  }
];

export default function ProblemsSection() {
  return (
    <section id="problems" className="px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-extralight text-[#0f172a] md:text-5xl">
            Les <span className="text-[#1e3a8a]">défis</span> que nous relevons pour vous
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl p-4 md:p-6 transition-all duration-300 hover:scale-[1.02]"
              style={{ background: '#e0e5ec', boxShadow: '8px 8px 16px #bec3c9, -8px -8px 16px #ffffff' }}
            >
              <div
                className="mb-4 inline-flex rounded-xl p-3"
                style={{ background: '#e0e5ec', boxShadow: 'inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff' }}
              >
                <problem.icon className="h-6 w-6 text-[#1e3a8a]" />
              </div>
              <h3 className="mb-2 text-lg font-light text-[#0f172a]">{problem.title}</h3>
              <p className="text-sm font-light leading-relaxed text-[#374151]">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
