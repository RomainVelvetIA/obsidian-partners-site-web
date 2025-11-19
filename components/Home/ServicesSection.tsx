'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { CheckCircle, Search, Settings } from 'lucide-react';

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const services: ServiceCard[] = [
  {
    icon: Search,
    title: 'Analyse des Besoins',
    description:
      'Nous analysons vos besoins avec une approche sur mesure pour vous recommander les solutions IA les plus innovantes et performantes du marché.',
    features: [
      'Identification précise de vos problématiques métiers',
      'Analyse comparative des acteurs du marché',
      'Sélection des technologies adaptées',
      'Évaluation en situation réelle',
      'Conseil et accompagnement dans la mise en œuvre'
    ]
  },
  {
    icon: Settings,
    title: 'Audit Approfondi',
    description:
      "Vous souhaitez intégrer l'IA mais ne savez pas par où commencer ? Nous menons un audit complet de vos processus métiers pour identifier puis livrer les solutions d'optimisation.",
    features: [
      'Évaluation complète de vos systèmes existants',
      'Cartographie de vos processus métiers',
      'Identification des inefficacités et des risques',
      'Rédaction d\'un cahier des charges détaillé',
      'Recommandations d\'optimisation et plan d\'action'
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-extralight text-[#0f172a] md:text-5xl">
            L'Art de Comprendre
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-[#374151]">
            Notre méthode d'Audit et d'Analyse
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="rounded-3xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02]"
              style={{ background: '#e0e5ec', boxShadow: '12px 12px 24px #bec3c9, -12px -12px 24px #ffffff' }}
            >
              <div
                className="mb-6 inline-flex rounded-2xl p-4"
                style={{ background: '#e0e5ec', boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff' }}
              >
                <service.icon className="h-8 w-8 text-[#1e3a8a]" />
              </div>

              <h3 className="mb-4 text-xl md:text-2xl font-light text-[#0f172a]">{service.title}</h3>
              <p className="mb-6 font-light leading-relaxed text-[#374151]">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className="mt-1 flex-shrink-0 rounded-lg p-1"
                      style={{ background: '#e0e5ec', boxShadow: 'inset 3px 3px 6px #bec3c9, inset -3px -3px 6px #ffffff' }}
                    >
                      <CheckCircle className="h-4 w-4 text-[#1e3a8a]" />
                    </div>
                    <span className="text-sm font-light text-[#374151]">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
