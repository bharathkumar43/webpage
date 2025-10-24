import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyKabiniSection from "@/components/WhyKabiniSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import CustomerBanner from "@/components/CustomerBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <WhyKabiniSection />
      <FeaturesSection />
      <CTASection />
      <HowItWorksSection />
      <TestimonialsSection />
      <WhoItsForSection />
      <CustomerBanner />
      <Footer />
    </div>
  );
};

export default Index;