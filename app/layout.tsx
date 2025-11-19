import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Obsidian Partners | Courtage en IA',
  description:
    "Obsidian Partners conçoit des parcours d'adoption de l'intelligence artificielle sur mesure pour les entreprises B2B."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
