'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/Home/ui/button';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 py-12 md:px-6 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e0e5ec]/50 to-[#e0e5ec]" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 md:px-6 md:py-3"
            style={{ background: '#e0e5ec', boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff' }}
          >
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-[#1e3a8a] flex-shrink-0" />
            <span className="text-xs md:text-sm font-light text-[#374151] text-center">
              Obsidian Partners, la première entreprise de courtage en intelligence artificielle
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-5xl font-extralight leading-tight text-[#0f172a] md:text-7xl"
        >
          L&apos;expertise IA, <span className="text-[#1e3a8a]">sans la complexité</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-12 max-w-3xl text-xl font-light leading-relaxed text-[#374151] md:text-2xl"
        >
          En tant que courtiers IA, nous vous guidons vers les solutions les plus fiables et performantes du marché.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" onClick={() => scrollToSection('cta')} className="gap-3">
            Consultation Gratuite
            <ArrowRight className="h-5 w-5 transition-transform hover:translate-x-1" />
          </Button>
          <Button size="lg" surface="inset" className="text-[#374151]" onClick={() => scrollToSection('services')}>
            Découvrir nos solutions
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
