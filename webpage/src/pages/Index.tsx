import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // Clean up URL params after login
    if (searchParams.get("loggedIn") === "true") {
      searchParams.delete("loggedIn");
      searchParams.delete("plan");
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  const featuresRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const createScrollHandler = (ref: React.RefObject<HTMLDivElement>) => () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        onScrollToFeatures={createScrollHandler(featuresRef)}
        onScrollToHowItWorks={createScrollHandler(howItWorksRef)}
        onScrollToTestimonials={createScrollHandler(testimonialsRef)}
        onScrollToPricing={createScrollHandler(pricingRef)}
        onScrollToContact={createScrollHandler(contactRef)} 
      />
      <HeroSection onScrollToPricing={createScrollHandler(pricingRef)} />
      <FeaturesSection ref={featuresRef} />
      <HowItWorksSection ref={howItWorksRef} />
      <PricingSection ref={pricingRef} />
      <TestimonialsSection ref={testimonialsRef} />
      <CTASection />
      <Footer ref={contactRef} />
    </div>
  );
};

export default Index;