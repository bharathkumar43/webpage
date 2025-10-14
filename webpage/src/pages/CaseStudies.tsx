import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Zap,
  ArrowRight,
  Star,
  BarChart3,
  Target,
  Users,
  DollarSign,
  Clock,
  CheckCircle
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Success: 250% Traffic Increase",
      company: "TechGear Store",
      industry: "E-commerce",
      duration: "3 months",
      results: {
        traffic: "+250%",
        conversions: "+180%",
        revenue: "+320%",
        roi: "850%"
      },
      challenges: [
        "Low organic search visibility",
        "Poor content optimization",
        "Limited SEO knowledge"
      ],
      solutions: [
        "AI-powered content optimization",
        "Automated SEO improvements",
        "Performance tracking dashboard"
      ],
      featured: true
    },
    {
      id: 2,
      title: "SaaS Platform: 400% Lead Generation Boost",
      company: "CloudFlow Solutions",
      industry: "B2B Software",
      duration: "6 months",
      results: {
        leads: "+400%",
        organic: "+350%",
        conversions: "+220%",
        roi: "1200%"
      },
      challenges: [
        "Low lead generation",
        "Poor content performance",
        "Limited marketing resources"
      ],
      solutions: [
        "Content strategy optimization",
        "AI-driven content creation",
        "Automated lead nurturing"
      ],
      featured: false
    },
    {
      id: 3,
      title: "Local Business: 300% Local Search Growth",
      company: "Green Valley Dental",
      industry: "Healthcare",
      duration: "4 months",
      results: {
        local: "+300%",
        appointments: "+150%",
        reviews: "+200%",
        roi: "650%"
      },
      challenges: [
        "Poor local search presence",
        "Limited online visibility",
        "Outdated website content"
      ],
      solutions: [
        "Local SEO optimization",
        "Content localization",
        "Review management system"
      ],
      featured: false
    },
    {
      id: 4,
      title: "Content Agency: 500% Client Results",
      company: "Creative Content Co.",
      industry: "Marketing Agency",
      duration: "8 months",
      results: {
        clients: "+500%",
        retention: "+180%",
        satisfaction: "95%",
        roi: "2000%"
      },
      challenges: [
        "Inconsistent client results",
        "Manual content processes",
        "Limited scalability"
      ],
      solutions: [
        "Automated content optimization",
        "AI-powered insights",
        "Scalable workflow system"
      ],
      featured: false
    }
  ];

  const stats = [
    { label: "Average Traffic Increase", value: "275%", icon: TrendingUp },
    { label: "Average ROI", value: "1,175%", icon: DollarSign },
    { label: "Average Time to Results", value: "3.5 months", icon: Clock },
    { label: "Client Satisfaction", value: "98%", icon: Star }
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
              Case Studies
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real-world examples of how businesses achieved remarkable success with Kabini.ai
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Case Study */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Success Story</h2>
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue-600">Featured</Badge>
                <Badge variant="outline">{caseStudies[0].industry}</Badge>
                <Badge variant="outline">{caseStudies[0].duration}</Badge>
              </div>
              <CardTitle className="text-2xl">{caseStudies[0].title}</CardTitle>
              <p className="text-gray-600 text-lg">{caseStudies[0].company}</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Results Achieved</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{caseStudies[0].results.traffic}</div>
                      <div className="text-sm text-gray-600">Traffic Increase</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{caseStudies[0].results.conversions}</div>
                      <div className="text-sm text-gray-600">Conversion Rate</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{caseStudies[0].results.revenue}</div>
                      <div className="text-sm text-gray-600">Revenue Growth</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">{caseStudies[0].results.roi}</div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Challenges & Solutions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Challenges:</h4>
                      <ul className="space-y-1">
                        {caseStudies[0].challenges.map((challenge, index) => (
                          <li key={index} className="text-gray-600 text-sm">• {challenge}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Solutions:</h4>
                      <ul className="space-y-1">
                        {caseStudies[0].solutions.map((solution, index) => (
                          <li key={index} className="text-gray-600 text-sm">• {solution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button size="lg">
                  Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Case Studies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">More Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.slice(1).map((study) => (
              <Card key={study.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{study.industry}</Badge>
                    <Badge variant="outline">{study.duration}</Badge>
                  </div>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                  <p className="text-gray-600">{study.company}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {Object.entries(study.results).map(([key, value], index) => (
                      <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Create Your Success Story?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join hundreds of businesses that have transformed their content marketing with Kabini.ai
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
