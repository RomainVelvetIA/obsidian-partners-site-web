'use client';

import { motion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-extralight text-[#0f172a] md:text-5xl">
            Études de <span className="text-[#1e3a8a]">Cas</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-[#374151]">
            Découvrez comment nous avons accompagné nos clients dans leur transformation IA
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
            <FileText className="h-8 w-8 text-[#1e3a8a]" />
          </div>

          <p className="mb-8 text-xl font-light leading-relaxed text-[#0f172a] md:text-2xl">
            
          </p>

          <a
            href="https://www.notion.so/2afdbc20b5fb807c9c35e15cce4873c3?v=2afdbc20b5fb80d283bb000cc1404215&source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-light text-[#374151] transition-all duration-300 hover:scale-105"
            style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
          >
            Découvrez nos études de cas
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

