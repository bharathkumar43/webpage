import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, 
  Zap,
  Globe,
  Shield,
  Code,
  Download,
  ArrowRight,
  Search,
  FileText,
  Settings,
  Play
} from 'lucide-react';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Kabini.ai
              </span>
            </div>
            <Badge className="bg-blue-600 text-white px-3 py-1 rounded-full">
              Documentation
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive guides and API references to help you get the most out of Kabini.ai
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search documentation..."
                className="pl-10 pr-4 py-3 w-full text-lg"
              />
            </div>
          </div>
        </div>

        {/* Quick Start Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Start</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Play className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Get Started</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Learn the basics of AI content optimization in just 5 minutes</p>
                <Button className="w-full">
                  Start Tutorial <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Settings className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Setup Guide</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Configure your account and integrate with your website</p>
                <Button variant="outline" className="w-full">
                  View Setup <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">API Integration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Connect your applications using our REST API</p>
                <Button variant="outline" className="w-full">
                  API Docs <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Features</h2>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">AI Content Optimization</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Learn how to optimize your content using AI-powered tools</p>
                <div className="space-y-2">
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• Getting Started with AI Optimization</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• Content Analysis and Recommendations</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• Performance Tracking</a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Website Integration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Integrate Kabini.ai with your website and CMS</p>
                <div className="space-y-2">
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• WordPress Integration</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• Shopify Setup</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• Custom Website Integration</a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Security & Privacy</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Best practices for secure implementation</p>
                <div className="space-y-2">
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• Data Protection Guidelines</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• API Security</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• Privacy Compliance</a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">API Reference</h2>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">REST API</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Complete API documentation with examples</p>
                <div className="space-y-2">
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• Authentication</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• Content Analysis Endpoints</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• Optimization Endpoints</a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">SDKs & Libraries</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Official SDKs for popular programming languages</p>
                <div className="space-y-2">
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• JavaScript SDK</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• Python SDK</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• PHP SDK</a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">Resources</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Download guides, templates, and tools</p>
                <div className="space-y-2">
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• Quick Start Guide (PDF)</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• API Postman Collection</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">• Code Examples</a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2">Most Popular</Badge>
                <CardTitle className="text-lg">Getting Started with Kabini.ai</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">A comprehensive guide to setting up your first AI optimization campaign</p>
                <Button variant="outline" size="sm">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-green-600">Updated</Badge>
                <CardTitle className="text-lg">API Authentication Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Learn how to authenticate and secure your API requests</p>
                <Button variant="outline" size="sm">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Troubleshooting Common Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Solutions to the most frequently encountered problems</p>
                <Button variant="outline" size="sm">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
