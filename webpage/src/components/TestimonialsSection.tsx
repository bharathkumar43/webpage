import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quote, Star, Users, TrendingUp, Target } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      icon: Users,
      number: "2,000+",
      label: "Active Users"
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average AI Mentions Increase"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Customer Rating"
    },
    {
      icon: Target,
      number: "2min",
      label: "Average Setup Time"
    }
  ];

  const testimonials = [
    {
      content: "Kabini.ai transformed our content strategy. We saw a 400% increase in AI mentions within the first month. The platform is incredibly intuitive and the results speak for themselves.",
      rating: 5,
      improvement: "400% increase in AI mentions",
      avatar: "SC",
      name: "Sarah Chen",
      role: "Content Director",
      company: "TechFlow"
    },
    {
      content: "The AI visibility scanner is a game-changer. We can now track our performance across all AI platforms in real-time. Our content is being cited by AI assistants more than ever before.",
      rating: 5,
      improvement: "300% more AI citations",
      avatar: "MR",
      name: "Marcus Rodriguez",
      role: "SEO Manager",
      company: "GrowthLabs"
    },
    {
      content: "Setup took literally 2 minutes. The question generator creates content that actually resonates with our audience and AI platforms. ROI was immediate and substantial.",
      rating: 5,
      improvement: "250% ROI in first quarter",
      avatar: "EW",
      name: "Emily Watson",
      role: "Marketing Lead",
      company: "InnovateCorp"
    }
  ];

  return (
    <>
      {/* First CTA Section: Statistics & Trust Indicators */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block">
              <Badge className="mb-6 bg-blue-600 hover:bg-blue-600 text-white border-0 shadow-lg text-sm px-4 py-2">
                Trusted by 2,000+ teams
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-black">
                Loved by content teams
              </span>
              <span className="text-black">
                worldwide
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading brands are transforming their AI visibility and achieving remarkable results
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center transform hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second CTA Section: Testimonials */}
      <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Testimonials
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from content teams who've transformed their AI visibility
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 sm:mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="h-full bg-white shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl border-0 overflow-hidden">
                  <CardContent className="p-6">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Quote className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Improvement Badge */}
                    <div className="inline-block bg-green-50 border border-green-200 rounded-full px-3 py-1 mb-4">
                      <span className="text-sm font-medium text-green-800">
                        {testimonial.improvement}
                      </span>
                    </div>
                    
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third CTA Section: Main Call to Action */}
      <section className="text-center py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 whitespace-nowrap">
            Ready to join thousands of successful content teams?
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 max-w-4xl mx-auto leading-relaxed">
            Start your free trial today and see the difference AI-powered optimization can make
          </p>
          <div className="flex justify-center items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg lg:text-xl px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 font-semibold"
              asChild
            >
              <a href="https://app.kabini.ai">Start Free Trial</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;