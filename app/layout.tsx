import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Obsidian Partners | Courtage en IA',
  description:
    "Obsidian Partners conçoit des parcours d'adoption de l'intelligence artificielle sur mesure pour les entreprises B2B.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Obsidian Partners | Courtage en IA',
    description: "Obsidian Partners conçoit des parcours d'adoption de l'intelligence artificielle sur mesure pour les entreprises B2B.",
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obsidian Partners | Courtage en IA',
    description: "Obsidian Partners conçoit des parcours d'adoption de l'intelligence artificielle sur mesure pour les entreprises B2B.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://qtrypzzcjebvfcihiynt.supabase.co" />
      </head>
      <body>{children}</body>
    </html>
  );
}
