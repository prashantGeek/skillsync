import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TeachHeroSection from '@/components/sections/TeachHeroSection';
import TeachBenefitsSection from '@/components/sections/TeachBenefitsSection';
import TeachHowItWorksSection from '@/components/sections/TeachHowItWorksSection';
import TeachPricingSection from '@/components/sections/TeachPricingSection';
import TeachCTASection from '@/components/sections/TeachCTASection';

export default function TeachPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TeachHeroSection />
        <TeachBenefitsSection />
        <TeachHowItWorksSection />
        <TeachPricingSection />
        <TeachCTASection />
      </main>
      <Footer />
    </div>
  );
}
