import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustIndicatorsSection from "@/components/TrustIndicatorsSection";
import WhyKabiniSection from "@/components/WhyKabiniSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CustomerBanner from "@/components/CustomerBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <TrustIndicatorsSection />
      <WhyKabiniSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CustomerBanner />
      <Footer />
    </div>
  );
};

export default Index;