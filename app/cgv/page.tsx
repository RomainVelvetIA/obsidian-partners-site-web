'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Layers } from 'lucide-react';

const sections = [
  {
    title: 'Article 1 - Objet',
    content:
      "Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Obsidian Partners et ses clients dans le cadre de la fourniture de services de courtage en solutions d'intelligence artificielle."
  },
  {
    title: 'Article 2 - Services proposés',
    list: [
      "Analyse des besoins : identification et recommandation de solutions IA adaptées à une problématique définie",
      "Audit approfondi : analyse complète des processus métiers et accompagnement à l'implémentation"
    ]
  },
  {
    title: 'Article 3 - Consultation gratuite',
    content:
      "La première consultation de 30 minutes est offerte et sans engagement. Elle permet d'évaluer les besoins du client et de présenter nos services."
  },
  {
    title: 'Article 4 - Tarification',
    content:
      'Les tarifs sont communiqués sur devis personnalisé, établi après la consultation initiale gratuite. Les prix sont exprimés en euros HT, auxquels s\'ajoute la TVA au taux en vigueur.'
  },
  {
    title: 'Article 5 - Modalités de paiement',
    list: ['30% à la signature du devis', '40% à mi-parcours de la prestation', '30% à la livraison finale'],
    content: 'Les paiements peuvent être effectués par virement bancaire ou tout autre moyen convenu entre les parties.'
  },
  {
    title: "Article 6 - Obligations de l'entreprise",
    list: [
      'Réaliser les prestations avec professionnalisme et expertise',
      'Respecter les délais convenus dans le devis',
      'Maintenir la confidentialité des informations clients',
      'Fournir des recommandations objectives et indépendantes'
    ]
  },
  {
    title: 'Article 7 - Obligations du client',
    list: [
      'Fournir toutes les informations nécessaires à la réalisation de la prestation',
      'Respecter les échéances de paiement',
      'Collaborer activement lors de l\'audit et de l\'analyse',
      'Désigner un interlocuteur privilégié pour le suivi du projet'
    ]
  },
  {
    title: 'Article 8 - Confidentialité',
    content:
      'Les parties s\'engagent à maintenir confidentielles toutes les informations échangées dans le cadre de la prestation. Cette obligation perdure pendant toute la durée du contrat et 5 ans après sa fin.'
  },
  {
    title: 'Article 9 - Responsabilité',
    content:
      'Obsidian Partners, en qualité de courtier, met en relation le client avec des solutions d\'IA. Notre responsabilité se limite à la qualité de nos analyses et recommandations. La mise en œuvre relève des fournisseurs sélectionnés.'
  },
  {
    title: 'Article 10 - Résiliation',
    content:
      'En cas de manquement grave, le contrat peut être résilié de plein droit 15 jours après l\'envoi d\'une mise en demeure restée sans effet.'
  },
  {
    title: 'Article 11 - Droit applicable',
    content:
      'Les présentes CGV sont soumises au droit français. Tout litige relève des tribunaux compétents français.'
  }
];

export default function CGVPage() {
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
              Conditions Générales de <span className="text-[#1e3a8a]">Vente</span>
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
                </section>
              ))}
              <p className="text-sm">Dernière mise à jour : Janvier 2025</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
