import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Check, Star, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/3 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Simple Urgency Badge */}
          <Badge className="mb-6 bg-white text-blue-600 border-0 shadow-lg font-semibold text-lg px-6 py-3">
            Limited Time: 50% Off First Month
          </Badge>
          
          {/* Simple Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            <span className="block">Ready to Dominate</span>
            <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              AI Shopping?
            </span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            Don't let competitors own the AI shelf. Optimize your products and win.
          </p>
          
          {/* Simple Social Proof */}
          <div className="flex justify-center items-center gap-6 md:gap-8 mb-8">
            <div className="flex items-center gap-2 text-blue-100">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-blue-600"></div>
                <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-blue-600"></div>
                <div className="w-8 h-8 bg-blue-300 rounded-full border-2 border-blue-600"></div>
              </div>
              <span className="text-sm font-medium">2,000+ users trust us</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-blue-200 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 rating</span>
            </div>
          </div>
          
          {/* Simple Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Sparkles className="w-8 h-8 text-blue-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">AI-Powered Analysis</h3>
              <p className="text-blue-100 text-sm">Get instant insights from multiple AI models</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-blue-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Real-time Monitoring</h3>
              <p className="text-blue-100 text-sm">Track your performance across all AI platforms</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Star className="w-8 h-8 text-blue-200 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Smart Optimization</h3>
              <p className="text-blue-100 text-sm">Automatically optimize for AI search engines</p>
            </div>
          </div>

          {/* Simple CTAs */}
          <div className="space-y-6">
            {/* Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
              >
                <Users className="w-5 h-5 mr-2" />
                Talk to Sales
              </Button>
            </div>
          </div>
          
          {/* Simple Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-blue-100">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-yellow-300" />
              <span className="text-sm">7-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-yellow-300" />
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-yellow-300" />
              <span className="text-sm">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-yellow-300" />
              <span className="text-sm">24/7 support</span>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default CTASection;