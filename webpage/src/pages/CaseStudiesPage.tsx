import { ArrowLeft, BarChart3, Clock, Sparkles, TrendingUp, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CaseStudiesPage = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBack}
            className="mr-4 hover:bg-muted/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold">Case Studies</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <BarChart3 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Case Studies{" "}
              <span className="text-primary">Coming Soon</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Real success stories and detailed analysis of how businesses achieved remarkable results with kabini.ai
            </p>
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Clock className="w-4 h-4 mr-2" />
              In Development
            </Badge>
          </div>

          {/* Case Study Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="group hover:shadow-glow-card transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">E-commerce Success</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  How online stores increased conversions and visibility using AI-powered content optimization
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow-card transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">SaaS Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  B2B companies that achieved significant growth through AI-driven content strategies
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow-card transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Startup Success</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  How startups used kabini.ai to establish market presence and drive rapid growth
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Share Your Story</h3>
              <p className="text-muted-foreground mb-6">
                Have a success story with kabini.ai? We'd love to feature your case study and inspire others.
              </p>
              <Button size="lg" className="group">
                Submit Case Study
                <Sparkles className="w-4 h-4 ml-2 group-hover:animate-pulse" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage; 
