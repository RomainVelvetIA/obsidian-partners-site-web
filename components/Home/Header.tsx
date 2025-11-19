'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const logoUrl =
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/691b66a04c81a902668a15c7/c1dcec10b_Ajouteruntitre1.png';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Recherche dans les sections de la page
      const sections = document.querySelectorAll('section[id], h2, h3, p');
      const query = searchQuery.toLowerCase();

      for (const element of Array.from(sections)) {
        if (element.textContent?.toLowerCase().includes(query)) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          break;
        }
      }
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-6 md:py-4"
      style={{ background: 'rgba(224, 229, 236, 0.95)', backdropFilter: 'blur(10px)' }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 md:gap-3 transition-all duration-300 hover:scale-105 flex-shrink-0"
          >
            <Image
              src={logoUrl}
              alt="Obsidian Partners"
              width={64}
              height={64}
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <span className="text-sm md:text-base lg:text-xl font-light text-[#0f172a] whitespace-nowrap">
              Obsidian <span className="font-normal text-[#1e3a8a]">Partners</span>
            </span>
          </Link>

          <div className="flex-1" />

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="/#services"
              className="text-sm lg:text-base font-light text-[#0f172a] hover:text-[#1e3a8a] transition-colors whitespace-nowrap"
            >
              Services
            </a>
            <a
              href="/#process"
              className="text-sm lg:text-base font-light text-[#0f172a] hover:text-[#1e3a8a] transition-colors whitespace-nowrap"
            >
              Processus
            </a>
            <a
              href="/#clients"
              className="text-sm lg:text-base font-light text-[#0f172a] hover:text-[#1e3a8a] transition-colors whitespace-nowrap"
            >
              Clients
            </a>
            <a
              href="/#faq"
              className="text-sm lg:text-base font-light text-[#0f172a] hover:text-[#1e3a8a] transition-colors whitespace-nowrap"
            >
              FAQ
            </a>
            <a
              href="/blog"
              className="text-sm lg:text-base font-light text-[#0f172a] hover:text-[#1e3a8a] transition-colors whitespace-nowrap"
            >
              Blog
            </a>
          </nav>

          <form onSubmit={handleSearch} className="flex-1 max-w-md">
            <div
              className={`relative flex items-center rounded-xl transition-all duration-300 ${isSearchFocused ? 'scale-[1.02]' : ''
                }`}
              style={{
                background: '#e0e5ec',
                boxShadow: isSearchFocused
                  ? 'inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff'
                  : '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff'
              }}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="Rechercher..."
                className="w-full bg-transparent border-none outline-none px-4 py-2.5 md:py-3 text-sm md:text-base font-light text-[#374151] placeholder:text-[#9ca3af]"
              />
              <button
                type="submit"
                className="p-2 md:p-2.5 text-[#1e3a8a] hover:text-[#1e40af] transition-colors flex-shrink-0"
                aria-label="Rechercher"
              >
                <Search className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </header>
  );
}
