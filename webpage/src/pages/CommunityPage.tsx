import { ArrowLeft, Users, Clock, Sparkles, MessageSquare, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CommunityPage = () => {
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
            <Users className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold">Community</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Community{" "}
              <span className="text-primary">Coming Soon</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Connect with fellow content creators, share insights, and learn from the kabini.ai community
            </p>
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Clock className="w-4 h-4 mr-2" />
              In Development
            </Badge>
          </div>

          {/* Community Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="group hover:shadow-glow-card transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Discussion Forums</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join conversations about AI content optimization, share tips, and ask questions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow-card transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">User Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with users in your industry or region for targeted networking and collaboration
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow-card transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Events & Meetups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Attend virtual and in-person events to learn, network, and grow your skills
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Join the Community</h3>
              <p className="text-muted-foreground mb-6">
                Be the first to know when our community platform launches and get early access to exclusive features.
              </p>
              <Button size="lg" className="group">
                Get Early Access
                <Sparkles className="w-4 h-4 ml-2 group-hover:animate-pulse" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage; 
