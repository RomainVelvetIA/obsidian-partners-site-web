'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Quote, Star } from '@/components/Home/lucide-react';

export default function ClientsSection() {
  return (
    <section id="clients" className="px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-extralight text-[#0f172a] md:text-5xl">
            Ils nous font <span className="text-[#1e3a8a]">Confiance</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-[#374151]">
            Des entreprises satisfaites qui ont transformé leurs processus avec Obsidian Partners
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-6 md:p-10 text-center"
          style={{ background: '#e0e5ec', boxShadow: '12px 12px 24px #bec3c9, -12px -12px 24px #ffffff' }}
        >
          <div
            className="mb-6 inline-flex rounded-2xl p-4"
            style={{ background: '#e0e5ec', boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff' }}
          >
            <Quote className="h-8 w-8 text-[#1e3a8a]" />
          </div>

          <p className="mb-6 text-xl font-light italic leading-relaxed text-[#0f172a] md:text-2xl">
           
          </p>

          <div className="mb-6 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-[#1e3a8a] text-[#1e3a8a]" />
            ))}
          </div>

          <a
            href="https://fr.trustpilot.com/review/obsidianpartners.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-light text-[#374151] transition-all duration-300 hover:scale-105"
            style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
          >
            Voir tous les avis sur Trustpilot
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
