'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Gift } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="cta" className="px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl p-6 md:p-12 text-center"
          style={{ background: '#e0e5ec', boxShadow: '16px 16px 32px #bec3c9, -16px -16px 32px #ffffff' }}
        >
          <div
            className="absolute right-0 top-0 h-40 w-40 rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, #1e3a8a 0%, transparent 70%)', filter: 'blur(40px)' }}
          />

          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{ background: '#e0e5ec', boxShadow: 'inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff' }}
          >
            <Gift className="h-4 w-4 text-[#1e3a8a]" />
            <span className="text-sm font-light text-[#374151]">Contactez-nous!</span>
          </div>

          <h2 className="mb-4 text-3xl font-extralight text-[#0f172a] md:text-5xl">
            Première Consultation <span className="text-[#1e3a8a]">Offerte</span>
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg font-light leading-relaxed text-[#374151]">
            Découvrez comment l&apos;IA peut transformer votre entreprise. Réservez votre consultation gratuite de 30 minutes
            avec nos experts.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://cal.com/romain-auroux-cwofup/obsidian-partners"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 md:gap-3 rounded-2xl px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-light text-[#0f172a] transition-all duration-300"
              style={{ background: '#e0e5ec', boxShadow: '8px 8px 16px #bec3c9, -8px -8px 16px #ffffff' }}
            >
              <Calendar className="h-5 w-5" />
              Réserver ma Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm font-light text-[#374151]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#1e3a8a]" />
              Sans engagement
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#1e3a8a]" />
              30 minutes
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#1e3a8a]" />
              100% gratuit
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
