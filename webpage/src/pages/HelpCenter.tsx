import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  HelpCircle, 
  Zap,
  Search,
  MessageSquare,
  BookOpen,
  Video,
  Download,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Lightbulb,
  Settings,
  Shield,
  Globe
} from 'lucide-react';

const HelpCenter = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: BookOpen,
      questions: [
        {
          question: "How do I create my first campaign?",
          answer: "Creating your first campaign is easy. Go to your dashboard, click 'Create Campaign', and follow the step-by-step wizard to set up your AI optimization."
        },
        {
          question: "What information do I need to get started?",
          answer: "You'll need your website URL, target keywords, and basic business information. Our AI will analyze your content and provide optimization recommendations."
        },
        {
          question: "How long does it take to see results?",
          answer: "Most users see initial improvements within 2-4 weeks, with significant results typically appearing within 2-3 months of consistent optimization."
        }
      ]
    },
    {
      title: "Account & Billing",
      icon: Settings,
      questions: [
        {
          question: "How do I upgrade my plan?",
          answer: "You can upgrade your plan anytime from your account settings. Changes take effect immediately and you'll be charged the prorated amount."
        },
        {
          question: "Can I cancel my subscription?",
          answer: "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your billing period."
        },
        {
          question: "Do you offer refunds?",
          answer: "We offer a 30-day money-back guarantee for all new subscriptions. Contact our support team if you're not satisfied with our service."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: Shield,
      questions: [
        {
          question: "How do I integrate Kabini.ai with my website?",
          answer: "We provide multiple integration options including WordPress plugins, Shopify apps, and custom API integration. Check our documentation for detailed guides."
        },
        {
          question: "What if I'm having trouble with the API?",
          answer: "Our API documentation includes comprehensive examples and troubleshooting guides. You can also contact our technical support team for assistance."
        },
        {
          question: "Is my data secure?",
          answer: "Yes, we use enterprise-grade security measures including SSL encryption, secure data centers, and comply with GDPR and other privacy regulations."
        }
      ]
    }
  ];

  const popularArticles = [
    {
      title: "Setting Up Your First AI Campaign",
      category: "Getting Started",
      readTime: "5 min read",
      views: "12.5k"
    },
    {
      title: "Understanding AI Optimization Results",
      category: "Analytics",
      readTime: "7 min read",
      views: "8.9k"
    },
    {
      title: "Troubleshooting Common Integration Issues",
      category: "Technical",
      readTime: "6 min read",
      views: "6.2k"
    },
    {
      title: "Best Practices for Content Optimization",
      category: "Tips & Tricks",
      readTime: "8 min read",
      views: "15.3k"
    }
  ];

  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageSquare,
      availability: "24/7",
      responseTime: "Under 2 minutes"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message and we'll respond quickly",
      icon: MessageSquare,
      availability: "24/7",
      responseTime: "Under 4 hours"
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step video guides",
      icon: Video,
      availability: "Always available",
      responseTime: "Instant"
    },
    {
      title: "Community Forum",
      description: "Get help from other users and our team",
      icon: Users,
      availability: "24/7",
      responseTime: "Varies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-md">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-blue-500/30 blur-lg -z-10 transition-all duration-300 group-hover:blur-xl"></div>
              </div>
              <span className="text-2xl font-bold text-blue-600">
                Kabini.ai
              </span>
            </div>
            <Badge className="bg-blue-600 text-white px-3 py-1 rounded-full">
              Help Center
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find answers to common questions and get the support you need
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for help articles..."
                className="pl-10 pr-4 py-3 w-full text-lg"
              />
            </div>
          </div>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>Available: {option.availability}</div>
                    <div>Response: {option.responseTime}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Popular Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-sm text-gray-500">{article.views} views</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                          <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                          <p className="text-gray-600 text-sm">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Start Live Chat
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
