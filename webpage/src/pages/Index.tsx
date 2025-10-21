import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyKabiniSection from "@/components/WhyKabiniSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CustomerBanner from "@/components/CustomerBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <WhyKabiniSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhoItsForSection />
      <ResultsSection />
      <TestimonialsSection />
      <CustomerBanner />
      <Footer />
    </div>
  );
};

export default Index;