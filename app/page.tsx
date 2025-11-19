import Header from '@/components/Home/Header';
import HeroSection from '@/components/Home/HeroSection';
import ServicesSection from '@/components/Home/ServicesSection';
import ProblemsSection from '@/components/Home/ProblemsSection';
import ProcessSection from '@/components/Home/ProcessSection';
import ClientsSection from '@/components/Home/ClientsSection';
import CaseStudiesSection from '@/components/Home/CaseStudiesSection';
import CTASection from '@/components/Home/CTASection';
import FAQSection from '@/components/Home/FAQSection';
import Footer from '@/components/Home/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0e5ec] via-[#e8edf4] to-[#dce1e8]">
      <Header />
      <main>
        <HeroSection />
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
  );
}
