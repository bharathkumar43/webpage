import { Badge } from "@/components/ui/badge";
import { Zap, Search, BarChart3, Sparkles, Brain, TrendingUp } from "lucide-react";

const WhyKabiniSection = () => {
  const features = [
    {
      icon: Zap,
      label: "AI-POWERED",
      title: "Instant Question Generator",
      description: "Drop in your content and get custom questions for any audience—fast, smart, and ready to spark engagement.",
      buttonText: "Generate Questions",
      color: "blue"
    },
    {
      icon: Search,
      label: "VECTOR MATCHING",
      title: "Semantic Match Checker",
      description: "See how your content stacks up with AI answers. Get clear insights and fine-tune for maximum impact.",
      buttonText: "Check Match",
      color: "blue"
    },
    {
      icon: BarChart3,
      label: "AI ANALYSIS",
      title: "AI Visibility Analysis",
      description: "Analyze your content's visibility across AI platforms and search engines. Get detailed insights on how AI systems perceive your content.",
      buttonText: "Analyze Now",
      color: "blue"
    },
    {
      icon: Sparkles,
      label: "GEO READY",
      title: "Generative Engine Optimization",
      description: "Optimize your content for AI search engines and language models. Stay ahead of the SEO evolution.",
      buttonText: "Optimize Content",
      color: "blue"
    },
    {
      icon: Brain,
      label: "ADVANCED AI",
      title: "Multi-AI Intelligence",
      description: "Harness the power of multiple AI models simultaneously for diverse perspectives and enhanced accuracy.",
      buttonText: "Try Multi-AI",
      color: "blue"
    },
    {
      icon: TrendingUp,
      label: "GROWTH",
      title: "Brand Visibility Boost",
      description: "Improve your content's discoverability and relevance across all AI platforms for maximum brand exposure.",
      buttonText: "Boost Visibility",
      color: "blue"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-gray-400/10 rounded-full blur-2xl sm:blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-4 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 bg-gray-300/10 rounded-full blur-xl sm:blur-2xl animate-float-medium"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
            Why Kabini.ai ?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The world's first AI Visibility Platform. Stay ahead in the AI-driven search landscape with cutting-edge technology.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg border border-blue-200 p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              
              {/* Label */}
              <Badge className="mb-2 sm:mb-3 bg-blue-100 text-blue-700 border-0 font-semibold text-xs sm:text-sm">
                {feature.label}
              </Badge>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {feature.description}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKabiniSection;
