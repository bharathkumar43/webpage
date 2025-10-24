import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, BarChart3, Users, FileText, Settings } from "lucide-react";

const GrowthFeaturesSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "AI Visibility Analyzer",
      description: "Track how your site performs across ChatGPT, Gemini, Claude, Perplexity with real-time monitoring and scoring.",
      features: [
        "Multi-LLM monitoring",
        "Real-time scoring",
        "Trend tracking"
      ],
      cta: "Analysis",
      score: "85/100"
    },
    {
      icon: Users,
      title: "Competitor Benchmarking",
      description: "See where you win and where you lag. Compare performance side by side with your top competitors.",
      features: [
        "Side-by-side competitor comparison",
        "Market share insights",
        "Gap analysis"
      ],
      cta: "Analyze Competitors"
    },
    {
      icon: FileText,
      title: "AI Content Generator",
      description: "Automatically create FAQs, snippets, and Q&A blocks designed for GEO.",
      features: [
        "Auto generate Faq's",
        "Schema-ready outputs",
        "Optimized for trust & citations"
      ],
      cta: "Generate Content Now"
    },
    {
      icon: Settings,
      title: "Optimization Suite",
      description: "Fix weak points before AI search engines overlook you.",
      features: [
        "Schema coverage checker",
        "Freshness scanner",
        "Internal linking insights"
      ],
      cta: "Boost My Score"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Features That Power Ecommerce Growth
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to{" "}
            <span className="text-primary">Everything you need to dominate AI shopping results. </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-6 items-center">
              {/* Left side - Feature content */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {feature.features.map((item, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="group-hover:border-primary/50 group-hover:text-primary transition-colors" asChild>
                  <a href="https://app.kabini.ai">
                    {feature.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              {/* Right side - Visual demo */}
              <div className="flex justify-center">
                {index === 0 && (
                  <Card className="w-full max-w-sm bg-card/80 backdrop-blur-sm border-border/50">
                    <CardHeader className="pb-3">
                      <h4 className="font-semibold text-lg">AI Visibility</h4>
                    </CardHeader>
                    <CardContent>
                      {/* Y-axis labels */}
                      <div className="relative h-64 mb-2">
                        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground">
                          <span>100%</span>
                          <span>60%</span>
                          <span>40%</span>
                          <span>20%</span>
                        </div>
                        
                        {/* Grid lines */}
                        <div className="absolute left-12 right-0 top-0 h-full flex flex-col justify-between">
                          <div className="border-t border-muted"></div>
                          <div className="border-t border-muted"></div>
                          <div className="border-t border-muted"></div>
                          <div className="border-t border-muted"></div>
                          <div className="border-t border-muted"></div>
                        </div>
                        
                        {/* Bar chart */}
                        <div className="absolute left-12 right-0 bottom-0 h-full flex items-end justify-around gap-2 pb-1">
                          <div className="flex flex-col items-center flex-1">
                            <div className="w-full bg-blue-500 rounded-t-lg transition-all duration-500" style={{height: '20%'}}></div>
                          </div>
                          <div className="flex flex-col items-center flex-1">
                            <div className="w-full bg-blue-500 rounded-t-lg transition-all duration-500" style={{height: '28%'}}></div>
                          </div>
                          <div className="flex flex-col items-center flex-1">
                            <div className="w-full bg-blue-500 rounded-t-lg transition-all duration-500" style={{height: '48%'}}></div>
                          </div>
                          <div className="flex flex-col items-center flex-1">
                            <div className="w-full bg-blue-500 rounded-t-lg transition-all duration-500" style={{height: '82%'}}></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* X-axis labels */}
                      <div className="flex justify-around ml-12 text-xs text-muted-foreground mt-2">
                        <span>ChatGPT</span>
                        <span>Gemini</span>
                        <span>Perplexity</span>
                        <span>Claude</span>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {index === 1 && (
                  <Card className="w-full max-w-sm bg-card/80 backdrop-blur-sm border-border/50">
                    <CardHeader className="pb-3">
                      <h4 className="font-semibold">Competitor Analysis</h4>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Your Site</span>
                          <span className="text-green-500 font-semibold">85%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Competitor A</span>
                          <span className="text-pink-500 font-semibold">72%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-pink-500 h-2 rounded-full" style={{width: '72%'}}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Competitor B</span>
                          <span className="text-orange-500 font-semibold">68%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{width: '68%'}}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {index === 2 && (
                  <Card className="w-full max-w-sm bg-card/80 backdrop-blur-sm border-border/50">
                    <CardHeader className="pb-3">
                      <h4 className="font-semibold">Generated FAQ</h4>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-foreground">Q: What is AI visibility optimization?</div>
                        <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                          AI visibility optimization helps your content appear in AI-powered search results and get cited by AI assistants.
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-foreground">Q: How does GEO differ from SEO?</div>
                        <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                          GEO (Generative Engine Optimization) focuses on AI search engines, while traditional SEO targets human search algorithms.
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {index === 3 && (
                  <Card className="w-full max-w-sm bg-card/80 backdrop-blur-sm border-border/50">
                    <CardHeader className="pb-3">
                      <h4 className="font-semibold">Optimization Suite</h4>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Schema Coverage</span>
                        <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Good</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Content Freshness</span>
                        <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20">Needs Update</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Internal Links</span>
                        <Badge className="bg-red-500/10 text-red-500 border-red-500/20">Poor</Badge>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthFeaturesSection;
