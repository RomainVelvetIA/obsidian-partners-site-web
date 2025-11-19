'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Quels types d'entreprises accompagnez-vous ?",
    answer:
      "Nous accompagnons principalement les entreprises B2B, peu importe leur taille et secteur d'activité, qui cherchent à automatiser leurs processus grâce à l'intelligence artificielle."
  },
  {
    question: 'Combien coûte une consultation initiale ?',
    answer:
      'La première consultation de 30 minutes est entièrement gratuite et sans engagement. Elle nous permet de comprendre vos besoins et de vous présenter nos solutions.'
  },
  {
    question: 'Quelle est la durée moyenne d\'un projet ?',
    answer:
      'Cela dépend de la complexité de votre besoin. Une analyse de besoins prend généralement 1 semaine, tandis qu\'un audit approfondi peut s\'étendre sur plusieurs semaines. L\'implémentation varie selon la solution choisie.'
  },
  {
    question: 'Proposez-vous un accompagnement post-implémentation ?',
    answer:
      'Oui, nous assurons un suivi post-implémentation pour garantir le bon fonctionnement de la solution et optimiser son utilisation. Nous restons disponibles pour tout ajustement nécessaire.'
  },
  {
    question: 'Comment garantissez-vous la pertinence de vos recommandations ?',
    answer:
      'Nous testons les solutions en conditions réelles et comparons systématiquement plusieurs acteurs du marché. Notre indépendance nous permet de recommander uniquement les solutions qui répondent vraiment à vos besoins.'
  },
  {
    question: 'Travaillez-vous avec des partenaires technologiques spécifiques ?',
    answer:
      'Nous collaborons avec un réseau diversifié de fournisseurs de solutions IA. Notre rôle de courtier nous permet de rester neutres et de sélectionner le meilleur partenaire pour chaque projet.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-extralight text-[#0f172a] md:text-5xl">
            Questions <span className="text-[#1e3a8a]">Fréquentes</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-[#374151]">
            Tout ce que vous devez savoir sur nos services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl"
              style={{ background: '#e0e5ec', boxShadow: '8px 8px 16px #bec3c9, -8px -8px 16px #ffffff' }}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-4 py-4 md:px-6 md:py-5 text-left transition-all duration-300"
                style={{ background: openIndex === index ? '#e0e5ec' : 'transparent' }}
              >
                <span className="pr-4 text-base md:text-lg font-light text-[#0f172a]">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-[#1e3a8a] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="mx-2 mb-4 rounded-xl px-4 py-3 md:mx-4 md:px-6 md:py-4"
                      style={{ background: '#e0e5ec', boxShadow: 'inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff' }}
                    >
                      <p className="font-light leading-relaxed text-[#374151]">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
