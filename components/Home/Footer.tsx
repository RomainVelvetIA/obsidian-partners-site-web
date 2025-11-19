'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';

const navigation = [
  { label: 'Services', id: 'services' },
  { label: 'Processus', id: 'process' },
  { label: 'Clients', id: 'clients' },
  { label: 'FAQ', id: 'faq' }
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#bec3c9]/30 px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-2xl font-light text-[#0f172a]">Obsidian Partners</h3>
            <p className="mb-6 font-light leading-relaxed text-[#374151]">
              Votre partenaire de confiance pour l&apos;intégration de solutions d&apos;intelligence artificielle sur mesure
              dans vos processus métiers.
            </p>
            <a
              href="mailto:contact@obsidianpartners.fr"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-light text-[#374151] transition-all duration-300 hover:scale-105"
              style={{ background: '#e0e5ec', boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
            >
              <Mail className="h-4 w-4" />
              contact@obsidianpartners.fr
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-light text-[#0f172a]">Navigation</h4>
            <ul className="space-y-3">
              {navigation.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="font-light text-[#374151] transition-colors hover:text-[#1e3a8a]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#bec3c9]/30 pt-8 text-sm font-light text-[#374151] md:flex-row">
          <p> 2025 Obsidian Partners. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
            <Link className="transition-colors hover:text-[#1e3a8a]" href="/mentions-legales">
              Mentions Légales
            </Link>
            <Link className="transition-colors hover:text-[#1e3a8a]" href="/politique-confidentialite">
              Politique de Confidentialité
            </Link>
            <Link className="transition-colors hover:text-[#1e3a8a]" href="/cgv">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
