import { Badge } from "@/components/ui/badge";
import { TrendingUp, MessageSquare, Star, Clock } from "lucide-react";

const ResultsSection = () => {
  const results = [
    {
      icon: TrendingUp,
      metric: "+30%",
      label: "AI Visibility in the first 90 days",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: MessageSquare,
      metric: "300%",
      label: "Increase in AI Mentions",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Star,
      metric: "4.9/5",
      label: "Average Rating from Shopify teams",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Clock,
      metric: "2-Minute",
      label: "Setup to see first results",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-4 sm:right-10 w-16 h-16 sm:w-32 sm:h-32 bg-gray-400/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-1/4 left-4 sm:left-10 w-12 h-12 sm:w-24 sm:h-24 bg-blue-300/10 rounded-full blur-xl sm:blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="mb-3 sm:mb-4 bg-blue-600 hover:bg-blue-600 text-white border-0 shadow-lg text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            Results You Can Expect
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
            Proven Impact for Your Store
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
            Real metrics from Shopify brands using Kabini.ai to win AI shopping results
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {results.map((result, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-4 sm:p-5 text-center"
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${result.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                <result.icon className={`w-6 h-6 ${result.color}`} />
              </div>
              
              {/* Metric */}
              <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 ${result.color}`}>
                {result.metric}
              </div>
              
              {/* Label */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {result.label}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicator */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-base sm:text-lg text-gray-600">
            Join <span className="font-bold text-blue-600">200+ Shopify brands</span> already winning AI shopping results
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

