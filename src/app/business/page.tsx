import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BusinessHeroSection from '@/components/sections/BusinessHeroSection';
import BusinessFeaturesSection from '@/components/sections/BusinessFeaturesSection';
import BusinessSolutionsSection from '@/components/sections/BusinessSolutionsSection';
import BusinessTestimonialsSection from '@/components/sections/BusinessTestimonialsSection';
import BusinessPricingSection from '@/components/sections/BusinessPricingSection';
import BusinessCTASection from '@/components/sections/BusinessCTASection';

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BusinessHeroSection />
        <BusinessFeaturesSection />
        <BusinessSolutionsSection />
        <BusinessTestimonialsSection />
        <BusinessPricingSection />
        <BusinessCTASection />
      </main>
      <Footer />
    </div>
  );
}
