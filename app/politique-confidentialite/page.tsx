'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Layers } from 'lucide-react';

const sections = [
  {
    title: 'Introduction',
    content:
      'Obsidian Partners accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité détaille la manière dont nous collectons, utilisons et protégeons vos informations.'
  },
  {
    title: 'Données collectées',
    list: [
      "Informations d'identification (nom, prénom, email)",
      'Informations professionnelles (entreprise, fonction)',
      'Données de navigation (adresse IP, cookies)',
      'Informations relatives à vos demandes et consultations'
    ]
  },
  {
    title: 'Utilisation des données',
    list: [
      'Répondre à vos demandes de contact et de consultation',
      'Vous fournir nos services de courtage en IA',
      'Améliorer notre site web et nos services',
      'Vous envoyer des informations sur nos services (avec votre consentement)',
      'Respecter nos obligations légales et réglementaires'
    ]
  },
  {
    title: 'Conservation des données',
    content:
      'Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, conformément à la législation en vigueur.'
  },
  {
    title: 'Vos droits',
    list: [
      'Droit d\'accès à vos données personnelles',
      'Droit de rectification de vos données',
      'Droit à l\'effacement et à la limitation du traitement',
      'Droit d\'opposition et droit à la portabilité'
    ],
    content: 'Pour exercer ces droits, contactez-nous à contact@obsidianpartners.fr.'
  },
  {
    title: 'Sécurité',
    content:
      'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou destruction.'
  },
  {
    title: 'Modifications',
    content:
      'Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.',
    footer: 'Dernière mise à jour : Janvier 2025'
  }
];

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0e5ec] via-[#e8edf4] to-[#dce1e8] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-8 flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-light text-[#374151] transition-all duration-300 hover:scale-105"
              style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
            >
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Link>
            <div className="flex items-center gap-2">
              <div
                className="rounded-xl p-2"
                style={{ background: '#e0e5ec', boxShadow: 'inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff' }}
              >
                <Layers className="h-5 w-5 text-[#1e3a8a]" />
              </div>
              <span className="text-lg font-light text-[#0f172a]">
                Obsidian <span className="font-normal text-[#1e3a8a]">Partners</span>
              </span>
            </div>
          </div>

          <div
            className="rounded-3xl p-10"
            style={{ background: '#e0e5ec', boxShadow: '12px 12px 24px #bec3c9, -12px -12px 24px #ffffff' }}
          >
            <h1 className="mb-8 text-4xl font-extralight text-[#0f172a]">
              Politique de <span className="text-[#1e3a8a]">Confidentialité</span>
            </h1>

            <div className="space-y-8 font-light leading-relaxed text-[#374151]">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-4 text-2xl font-light text-[#0f172a]">{section.title}</h2>
                  {section.content && <p className="mb-4">{section.content}</p>}
                  {section.list && (
                    <ul className="ml-4 list-disc space-y-2 text-sm">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.footer && <p className="mt-4 text-sm">{section.footer}</p>}
                </section>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
