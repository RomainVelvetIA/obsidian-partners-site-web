import Header from '@/components/Home/Header';
import HeroSection from '@/components/Home/HeroSection';
import LeadMagnetSection from '@/components/Home/LeadMagnetSection';
import ServicesSection from '@/components/Home/ServicesSection';
import ProblemsSection from '@/components/Home/ProblemsSection';
import ProcessSection from '@/components/Home/ProcessSection';
import ClientsSection from '@/components/Home/ClientsSection';
import CaseStudiesSection from '@/components/Home/CaseStudiesSection';
import CTASection from '@/components/Home/CTASection';
import FAQSection from '@/components/Home/FAQSection';
import Footer from '@/components/Home/Footer';
import { getOrganizationSchema, getFAQPageSchema, renderStructuredData } from '@/lib/seo/structuredData';

// FAQ data for structured data (must match FAQSection component)
const faqData = [
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

export default function HomePage() {
  const organizationSchema = getOrganizationSchema();
  const faqSchema = getFAQPageSchema(faqData);

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderStructuredData(organizationSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderStructuredData(faqSchema)}
      />

      <div className="min-h-screen bg-gradient-to-br from-[#e0e5ec] via-[#e8edf4] to-[#dce1e8]">
        <Header />
        <main>
          <HeroSection />
          <LeadMagnetSection />
          <ServicesSection />
          <ProblemsSection />
          <ProcessSection />
          <ClientsSection />
          <CaseStudiesSection />
          <CTASection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
