'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Layers } from 'lucide-react';

export default function MentionsLegalesPage() {
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
              Mentions <span className="text-[#1e3a8a]">Légales</span>
            </h1>

            <div className="space-y-8 font-light leading-relaxed text-[#374151]">
              <section>
                <h2 className="mb-4 text-2xl font-light text-[#0f172a]">Éditeur du site</h2>
                <p className="mb-2">
                  <strong>Raison sociale :</strong> Obsidian Partners
                </p>
                <p className="mb-2">
                  <strong>Forme juridique :</strong> E.I
                </p>
                <p className="mb-2">
                  <strong>Capital social :</strong> 0€
                </p>
                <p className="mb-2">
                  <strong>Siège social :</strong> Bordeaux
                </p>
                <p className="mb-2">
                  <strong>Email :</strong> contact@obsidianpartners.fr
                </p>
                <p className="mb-2">
                  <strong>Date de création :</strong> 2025
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-light text-[#0f172a]">Directeur de la publication</h2>
                <p>Romain Auroux</p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-light text-[#0f172a]">Hébergement</h2>
                <p className="mb-2">
                  <strong>Hébergeur :</strong> Base44
                </p>
                <p className="mb-2">Plateforme d&apos;hébergement pour applications web</p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-light text-[#0f172a]">Propriété intellectuelle</h2>
                <p>
                  L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété
                  intellectuelle. Tous les droits de reproduction sont réservés.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-light text-[#0f172a]">Protection des données</h2>
                <p>
                  Conformément à la loi &quot;Informatique et Libertés&quot; et au RGPD, vous disposez d&apos;un droit
                  d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-light text-[#0f172a]">Cookies</h2>
                <p>
                  Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur et réaliser des statistiques de
                  visites. Vous pouvez refuser l&apos;utilisation des cookies en configurant votre navigateur.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
