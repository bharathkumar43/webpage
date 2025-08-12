import { ArrowLeft, BookOpen, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DocumentationPage = () => {
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
            <BookOpen className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold">Documentation</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Documentation{" "}
              <span className="text-primary">Coming Soon</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Comprehensive guides, API references, and tutorials to help you get the most out of kabini.ai
            </p>
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Clock className="w-4 h-4 mr-2" />
              In Development
            </Badge>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="group hover:shadow-glow-card transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Quick Start Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get up and running with kabini.ai in minutes with our step-by-step tutorials
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow-card transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">API Reference</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete API documentation with examples and integration guides
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow-card transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn industry best practices for AI-powered content optimization
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Be the first to know when our documentation is ready. Get notified about new features and updates.
              </p>
              <Button size="lg" className="group">
                Get Notified
                <Sparkles className="w-4 h-4 ml-2 group-hover:animate-pulse" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage; 
