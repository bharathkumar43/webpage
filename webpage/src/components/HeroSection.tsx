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
              <span className="text-black">Supercharge Your Ecommerce</span>
              <br />
              <span className="text-blue-600">Visibility For AI</span>
            </h1>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-xl sm:max-w-2xl mx-auto sm:mx-0 leading-relaxed">
            Paste your product URLs, analyze AI-powered visibility, and make your store the top recommendation across AI platforms. Audit, optimize, and scale—no coding required, just sales growth.
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
            <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg lg:shadow-xl border border-blue-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 max-w-[260px] sm:max-w-[300px] md:max-w-sm lg:max-w-md w-full">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">AI Visibility</h3>
              </div>
              
              {/* Chart Container */}
              <div className="relative h-20 sm:h-24 md:h-28 lg:h-32 xl:h-40 mb-2 sm:mb-3 md:mb-4">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 w-12">
                  <span>100%</span>
                  <span>60%</span>
                  <span>40%</span>
                  <span>20%</span>
                </div>
                
                {/* Chart area */}
                <div className="ml-16 sm:ml-18 h-full relative">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="border-t border-gray-200"></div>
                    ))}
                  </div>
                  
                  {/* Line chart */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                    {/* Line path */}
                    <path
                      d="M 20 160 L 100 140 L 180 130 L 260 20"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Data points */}
                    <circle cx="20" cy="160" r="4" fill="#3B82F6" />
                    <circle cx="100" cy="140" r="4" fill="#3B82F6" />
                    <circle cx="180" cy="130" r="4" fill="#3B82F6" />
                    <circle cx="260" cy="20" r="4" fill="#3B82F6" />
                  </svg>
                </div>
              </div>
              
              {/* X-axis labels */}
              <div className="flex justify-between text-xs text-gray-600 mt-2 ml-16 sm:ml-18">
                <span>ChatGPT</span>
                <span>Gemini</span>
                <span>Perplexity</span>
                <span>Claude</span>
              </div>
              
              {/* Chart description */}
              <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
                <p>Track your AI visibility improvement across platforms</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-blue-600" />
                  <span className="text-xs">Real-time monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;