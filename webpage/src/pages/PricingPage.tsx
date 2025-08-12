import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const PricingPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleStartTrial = () => {
    window.location.href = "https://app.kabini.ai";
  };

  const plans = [
    { 
      name: "Starter", 
      price: "$19", 
      cta: "Start Free Trial", 
      highlighted: false, 
      description: "Perfect for individuals and small websites", 
      features: [
        "Unlimited question generation", 
        "Basic AI access", 
        "Content insights", 
        "Email support", 
        "5 website analysis/month"
      ], 
      badge: "Most Popular" 
    },
    { 
      name: "Pro", 
      price: "$49", 
      cta: "Upgrade to Pro", 
      highlighted: true, 
      description: "Ideal for growing businesses and agencies", 
      features: [
        "Everything in Starter", 
        "Advanced AI models", 
        "Semantic relevance checks", 
        "Priority support", 
        "Unlimited website analysis", 
        "Vector matching technology", 
        "Browser automation"
      ], 
      badge: "Best Value" 
    },
    { 
      name: "Enterprise", 
      price: "$99", 
      cta: "Contact Sales", 
      highlighted: false, 
      description: "For large teams and enterprise solutions", 
      features: [
        "Everything in Pro", 
        "Custom AI model training", 
        "White-label solutions", 
        "Dedicated account manager", 
        "API access", 
        "Custom integrations", 
        "24/7 phone support", 
        "SLA guarantees"
      ], 
      badge: "Premium" 
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="mb-8 text-center text-gray-700 text-base max-w-2xl">
        <span className="font-semibold text-blue-700">Start your 7-day free trial!</span> No charge today. <span className="font-semibold">Get full access to all features for 7 days.</span>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto p-8">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.highlighted ? 'border-primary shadow-lg' : 'border-gray-200'} transition-all duration-300 hover:shadow-xl`}>
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white font-semibold px-4 py-1 flex items-center"><Star className="w-3 h-3 mr-1" />{plan.badge}</Badge>
              </div>
            )}
            <CardHeader className="text-center pb-4">
              <div className="mb-2"><Badge variant="outline" className="text-xs bg-gray-100">{plan.name}</Badge></div>
              <CardTitle className="text-3xl md:text-4xl font-bold">{plan.price}<span className="text-lg text-gray-500 font-normal">/mo</span></CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-blue-600" /></div>
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </CardContent>
            <CardContent>
              <Button variant={plan.highlighted ? "default" : "outline"} className={`w-full ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700' : ''}`} size="lg" onClick={handleStartTrial}>{plan.cta}</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingPage; 
