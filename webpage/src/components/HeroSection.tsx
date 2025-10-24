import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden min-w-[320px]">
      {/* Simple Background */}
              <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 bg-gray-400/10 rounded-full blur-xl sm:blur-2xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-gray-300/10 rounded-full blur-xl sm:blur-2xl"></div>
        </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="text-center md:text-left order-2 md:order-1 flex flex-col items-center md:items-start">
            {/* Main Headline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
              <span className="text-black">Supercharge Your Shopify Store's</span>
              <br />
              <span className="text-blue-600">Visibility For AI</span>
            </h1>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-xl sm:max-w-2xl mx-auto sm:mx-0 leading-relaxed">
            Kabini is the leading AI monitoring platform for Shopify stores. See how your products rank on top AI tools and grow your sales with ease.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center sm:justify-start mb-8 sm:mb-10 md:mb-12 lg:mb-14">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-xl shadow-lg hover:shadow-xl w-full sm:w-auto font-medium"
                asChild
              >
                <a href="https://app.kabini.ai">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </a>
              </Button>
            </div>
            
            {/* Feature Highlights */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center sm:justify-start mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-xs sm:text-sm md:text-base text-gray-600">CHATGPT</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-xs sm:text-sm md:text-base text-gray-600">PERPLEXITY</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-xs sm:text-sm md:text-base text-gray-600">GEMINI</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-xs sm:text-sm md:text-base text-gray-600">CLAUDE</span>
              </div>
            </div>
            

          </div>

          {/* Right Column - AI Visibility Chart */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 items-center">
            <div className="rounded-xl border border-blue-200/50 hover:border-blue-400/60 bg-white shadow-sm hover:shadow-md transform hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300 w-full max-w-[280px] sm:max-w-[320px] md:max-w-md lg:max-w-lg">
              <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8">
                <img
                  src="/AI%20Visibility%20-2.svg"
                  alt="AI Visibility"
                  className="block w-full h-auto object-contain rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;