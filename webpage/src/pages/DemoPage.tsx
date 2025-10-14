import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, 
  FileText, 
  Users, 
  HelpCircle, 
  MessageSquare, 
  Search,
  ArrowRight,
  Zap,
  Star,
  TrendingUp,
  Lightbulb,
  Shield,
  Globe,
  Download,
  ExternalLink
} from 'lucide-react';

const DemoPage = () => {
  const [activeTab, setActiveTab] = useState('documentation');

  const tabs = [
    { id: 'documentation', label: 'Documentation', icon: BookOpen },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'case-studies', label: 'Case Studies', icon: TrendingUp },
    { id: 'help-center', label: 'Help Center', icon: HelpCircle },
    { id: 'community', label: 'Community', icon: Users }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'documentation':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive guides and API references to help you get the most out of Kabini.ai
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Getting Started</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Learn the basics of AI content optimization</p>
                  <Button variant="outline" size="sm">
                    Read Guide <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">API Reference</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Complete API documentation and examples</p>
                  <Button variant="outline" size="sm">
                    View API <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">Security Guide</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Best practices for secure implementation</p>
                  <Button variant="outline" size="sm">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'blog':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Latest insights, tips, and updates on AI content optimization
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">Featured</Badge>
                  <CardTitle className="text-lg">10 AI Content Optimization Tips</CardTitle>
                  <p className="text-sm text-gray-500">December 15, 2024</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Discover proven strategies to optimize your content with AI...</p>
                  <Button variant="outline" size="sm">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-green-600">New</Badge>
                  <CardTitle className="text-lg">SEO Trends for 2025</CardTitle>
                  <p className="text-sm text-gray-500">December 10, 2024</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Stay ahead with the latest SEO trends and AI integration...</p>
                  <Button variant="outline" size="sm">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Content Marketing Success Stories</CardTitle>
                  <p className="text-sm text-gray-500">December 5, 2024</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Real examples of businesses that transformed their content...</p>
                  <Button variant="outline" size="sm">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'case-studies':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real-world examples of how businesses achieved success with Kabini.ai
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">E-commerce Success</CardTitle>
                      <p className="text-sm text-gray-500">Online Retailer</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Traffic Increase:</span>
                      <span className="font-semibold text-green-600">+250%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Conversion Rate:</span>
                      <span className="font-semibold text-green-600">+180%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time to Results:</span>
                      <span className="font-semibold text-blue-600">2 weeks</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Star className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">SaaS Platform Growth</CardTitle>
                      <p className="text-sm text-gray-500">B2B Software</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lead Generation:</span>
                      <span className="font-semibold text-green-600">+320%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Organic Traffic:</span>
                      <span className="font-semibold text-green-600">+400%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ROI:</span>
                      <span className="font-semibold text-green-600">850%</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'help-center':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Help Center</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions and get support
              </p>
            </div>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for help articles..."
                  className="pl-10 pr-4 py-3 w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Getting Started</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• How to create your first campaign</li>
                    <li>• Setting up your account</li>
                    <li>• Understanding the dashboard</li>
                    <li>• Basic configuration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">Troubleshooting</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Common issues and solutions</li>
                    <li>• Performance optimization</li>
                    <li>• Integration problems</li>
                    <li>• Error messages explained</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">Contact Support</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
                  <Button className="w-full">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Download className="w-5 h-5 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">Resources</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• User guides and tutorials</li>
                    <li>• Video walkthroughs</li>
                    <li>• Best practices guide</li>
                    <li>• API documentation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'community':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Community</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Connect with other users, share experiences, and get help from the community
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Discord Community</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Join our Discord server for real-time discussions</p>
                  <Button variant="outline" size="sm">
                    Join Discord <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">Forum</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Ask questions and share knowledge</p>
                  <Button variant="outline" size="sm">
                    Visit Forum <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">GitHub</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Contribute to open source projects</p>
                  <Button variant="outline" size="sm">
                    View on GitHub <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">User Stories</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Read success stories from our users</p>
                  <Button variant="outline" size="sm">
                    Read Stories <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">Feature Requests</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Suggest new features and improvements</p>
                  <Button variant="outline" size="sm">
                    Submit Request <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-indigo-600" />
                    </div>
                    <CardTitle className="text-lg">Tips & Tricks</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Share and discover optimization tips</p>
                  <Button variant="outline" size="sm">
                    Browse Tips <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
              Demo Page
            </Badge>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600 bg-blue-50'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {renderContent()}
      </div>

      {/* Footer Note */}
      <div className="bg-gray-100 border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              This is a demo page showcasing the structure for Documentation, Blog, Case Studies, Help Center, and Community sections.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              In a real implementation, each section would have its own dedicated pages with actual content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
