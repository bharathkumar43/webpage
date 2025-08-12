import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const CTASection = () => {
  const handleStartTrial = () => {
    window.location.href = "https://app.kabini.ai";
  };

  const features = [
    "AI-powered question generation",
    "Semantic content analysis",
    "Multi-platform optimization",
    "Real-time performance tracking",
    "Advanced analytics dashboard",
    "24/7 customer support"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Ready to Transform Your Content?
          </Badge>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your{" "}
            <span className="text-primary">Free Trial</span>{" "}
            Today
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of content creators who are already using kabini.ai to boost their 
            visibility and engagement. No credit card required.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 text-left">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center items-center">
            <Button 
              size="lg" 
              className="group text-lg px-8 py-6 h-auto"
              onClick={handleStartTrial}
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by content creators worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-sm font-medium">✓ No credit card required</div>
              <div className="text-sm font-medium">✓ 7-day free trial</div>
              <div className="text-sm font-medium">✓ Cancel anytime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
