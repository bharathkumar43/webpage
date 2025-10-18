import ShoppingHeader from "@/components/ShoppingHeader";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, BarChart, Search, Clock, DollarSign, Zap, Target, Users, Plus, Minus } from "lucide-react";
import { useState } from "react";

const Shopping = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const solutions = [
    {
      title: "AI Visibility Tracking",
      description: "See exactly how your brand and products appear in ChatGPT, Gemini, Copilot, Perplexity, and Claude.",
      features: [
        "Track rankings across multiple AI assistants",
        "Monitor regional and language visibility",
        "Receive alerts when your product drops in AI answers"
      ],
      demoData: [
        { platform: "ChatGPT", score: 92 },
        { platform: "Gemini", score: 78 },
        { platform: "Claude", score: 65 },
        { platform: "Perplexity", score: 71 }
      ]
    },
    {
      title: "Competitor Intelligence",
      description: "Benchmark your Share of AI Voice against rivals and uncover their strategy.",
      features: [
        "Compare citation frequency, tone, and placement",
        "Detect emerging competitors gaining traction",
        "Identify gaps in category and price positioning"
      ],
      demoData: [
        { competitor: "Brand A", share: 35, trend: "up" },
        { competitor: "Brand B", share: 28, trend: "down" },
        { competitor: "Your Brand", share: 42, trend: "up" },
        { competitor: "Brand C", share: 15, trend: "stable" }
      ]
    },
    {
      title: "GEO Optimization (Generative Engine Optimization)",
      description: "Make your product content AI-ready with actionable recommendations.",
      features: [
        "AI-readiness score (0–100) for each product page",
        "Citation booster tips (FAQs, authority links, structured data)",
        "AI-assisted rewrites in your brand voice"
      ],
      demoData: [
        { page: "Homepage", score: 85 },
        { page: "Product A", score: 72 },
        { page: "Product B", score: 91 },
        { page: "About", score: 68 }
      ]
    },
    {
      title: "E-Commerce Scale Support",
      description: "Handle 100 or 100,000 SKUs with ease.",
      features: [
        "Bulk product uploads and integrations (Shopify, Magento, WooCommerce)",
        "Batch SKU optimization with GEO recommendations",
        "Category heatmaps to prioritize product lines"
      ],
      demoData: [
        { metric: "Total SKUs", value: "12,847" },
        { metric: "Optimized", value: "8,923" },
        { metric: "Pending", value: "3,924" },
        { metric: "Success Rate", value: "94.2%" }
      ]
    },
    {
      title: "Shopper Insights",
      description: "Understand what real shoppers ask AI assistants.",
      features: [
        "Query intent mapping (informational, comparative, transactional)",
        "Top shopper questions in your category",
        "Sentiment analysis of how your brand is framed"
      ],
      demoData: [
        { intent: "Informational", percentage: 45, queries: "2,847" },
        { intent: "Comparative", percentage: 32, queries: "1,923" },
        { intent: "Transactional", percentage: 23, queries: "1,456" }
      ]
    },
    {
      title: "ROI & Analytics",
      description: "Finally, connect AI visibility to business results.",
      features: [
        "Revenue attribution from AI visibility",
        "Impact calculator to project sales uplift",
        "Executive dashboards for CMOs and boards"
      ],
      demoData: [
        { metric: "Revenue Impact", value: "+$2.4M", change: "+18%" },
        { metric: "Traffic Growth", value: "+156%", change: "+45%" },
        { metric: "Conversion Rate", value: "3.2%", change: "+12%" },
        { metric: "ROI", value: "340%", change: "+67%" }
      ]
    }
  ];

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Multi-LLM Tracking",
      description: "Track your brand across ChatGPT, Gemini, Copilot, and Claude"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "SKU-Scale Optimization",
      description: "Optimize thousands of products with bulk processing"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Sentiment & Placement Analysis",
      description: "Understand how you're cited in AI responses"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Predictive Alerts",
      description: "Get notified before rankings drop with monitoring"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "ROI Dashboards",
      description: "Connect AI visibility directly to sales and growth"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Track Your AI Visibility",
      description: "See where your products appear in ChatGPT, Gemini, Copilot, Perplexity, Claude, and more."
    },
    {
      number: "2",
      title: "Analyze Competitors",
      description: "Compare your Share of AI Voice, track how often rivals are cited, and spot gaps in your category."
    },
    {
      number: "3",
      title: "Optimize With GEO",
      description: "Get AI-readiness scores, recommendations, and rewrites to make your content irresistible to LLMs — all in your brand voice."
    },
    {
      number: "4",
      title: "Unlock Shopper Insights",
      description: "Discover the exact queries, prompts, and questions shoppers use with AI assistants. Tap into untapped opportunities."
    },
    {
      number: "5",
      title: "Prove ROI",
      description: "Link AI rankings directly to traffic, conversions, and revenue with executive-ready reports."
    }
  ];

  const audiences = [
    {
      title: "E-commerce Brands",
      description: "Compete with Amazon & big retailers."
    },
    {
      title: "Digital Marketers",
      description: "Scale content and optimize AI presence."
    },
    {
      title: "SEO Teams",
      description: "Adapt SEO strategies for the AI-first world."
    },
    {
      title: "Enterprise CMOs",
      description: "Measure ROI from AI visibility investments."
    }
  ];

  const results = [
    { value: "+30%", label: "in first 90 days" },
    { value: "Faster SKU", label: "Optimization" },
    { value: "Higher ROI", label: "— connect AI presence directly to sales growth" }
  ];

  const faqs = [
    {
      question: "Q1: What is AI Visibility and why does it matter for e-commerce?",
      answer: "AI Visibility refers to how often and prominently your products appear in AI assistants like ChatGPT, Claude, and Gemini. 73% of shoppers now use AI for product recommendations, making AI visibility as crucial as SEO."
    },
    {
      question: "Q2: What is Generative Engine Optimization (GEO)?",
      answer: "GEO is the practice of optimizing your product content to perform better in AI search results. Unlike traditional SEO, GEO focuses on making your content more AI-friendly through structured data, FAQs, and AI-assisted content rewriting."
    },
    {
      question: "Q3: How does Kabini.ai track product visibility in AI assistants?",
      answer: "We monitor major AI platforms (ChatGPT, Gemini, Copilot, Perplexity, Claude) across different regions and languages. Our AI crawlers detect when your products are mentioned and provide real-time visibility scores and rankings."
    },
    {
      question: "Q4: How is Kabini.ai different from SEO or AI writing tools?",
      answer: "Unlike SEO tools that focus on Google or AI writing assistants, Kabini.ai is the complete AI visibility platform. We track performance across all major AI assistants and provide optimization recommendations specifically for AI search."
    },
    {
      question: "Q5: Which businesses benefit most from Kabini.ai?",
      answer: "E-commerce brands, digital marketers, SEO teams, and enterprise CMOs all benefit. Any business that wants to compete in AI-powered shopping and ensure their products are visible where customers are increasingly searching."
    },
    {
      question: "Q6: Can Kabini.ai handle thousands of SKUs at once?",
      answer: "Yes! Our platform is designed for scale. Whether you have 100 SKUs or 100,000, we provide bulk optimization tools, batch processing, and category heatmaps to help you prioritize your optimization efforts."
    }
  ];

  const renderDemoData = (data: any[], type: string) => {
    return (
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              {type === 'platform-scores' && item.platform}
              {type === 'competitor-comparison' && item.competitor}
              {type === 'readiness-scores' && item.page}
              {type === 'scale-metrics' && item.metric}
              {type === 'query-insights' && `${item.intent} ${item.percentage}%`}
              {type === 'roi-metrics' && item.metric}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-900">
                {type === 'platform-scores' && `${item.score}%`}
                {type === 'competitor-comparison' && `${item.share}%`}
                {type === 'readiness-scores' && item.score}
                {type === 'scale-metrics' && item.value}
                {type === 'query-insights' && `${item.queries} queries`}
                {type === 'roi-metrics' && `${item.value} ${item.change}`}
              </span>
              {type === 'query-insights' && (
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ShoppingHeader />

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Make Your Store Seen
                <span className="block text-blue-600">in AI Platforms</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Track your AI presence, outsmart competitors, and optimize
                your content with Generative Engine Optimization (GEO).
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-lg">
                Get a Free AI Visibility Audit
              </Button>

              {/* AI Platforms */}
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { name: 'CHATGPT', color: 'bg-green-500' },
                  { name: 'PERPLEXITY', color: 'bg-green-500' },
                  { name: 'GEMINI', color: 'bg-green-500' },
                  { name: 'CLAUDE', color: 'bg-green-500' }
                ].map((platform) => (
                  <div key={platform.name} className="flex items-center gap-2">
                    <div className={`w-2 h-2 ${platform.color} rounded-full`}></div>
                    <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white p-6 rounded-xl shadow-xl border border-blue-200 max-w-md w-full relative overflow-hidden ml-auto">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 7l-8.5 8.5-5-5L2 17" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 7h6v6" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">AI Visibility</h3>
              </div>
              
              {/* Chart Container */}
              <div className="relative h-32 mb-4">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 w-12">
                  <span>100%</span>
                  <span>60%</span>
                  <span>40%</span>
                  <span>20%</span>
                </div>
                
                {/* Chart area */}
                <div className="ml-16 h-full relative">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    <div className="border-t border-gray-200"></div>
                    <div className="border-t border-gray-200"></div>
                    <div className="border-t border-gray-200"></div>
                    <div className="border-t border-gray-200"></div>
                  </div>
                  
                  {/* Line chart */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                    <path
                      d="M 20 160 L 100 140 L 180 130 L 260 20"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="20" cy="160" r="4" fill="#3B82F6" />
                    <circle cx="100" cy="140" r="4" fill="#3B82F6" />
                    <circle cx="180" cy="130" r="4" fill="#3B82F6" />
                    <circle cx="260" cy="20" r="4" fill="#3B82F6" />
                  </svg>
                </div>
              </div>
              
              {/* X-axis labels */}
              <div className="flex justify-between text-sm text-gray-600 mt-2 ml-16">
                <span>ChatGPT</span>
                <span>Gemini</span>
                <span>Perplexity</span>
                <span>Claude</span>
              </div>
              
              {/* Chart description */}
              <div className="mt-4 text-sm text-gray-600">
                <p className="m-0">Track your AI visibility improvement across platforms</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-blue-600" />
                  <span className="text-sm">Real-time monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Stop Losing Sales to Competitors
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            While you focus on Google SEO, <span className="font-semibold text-gray-900">73% of shoppers</span> now turn to AI tools for product recommendations.
            If your products don't appear in ChatGPT, Claude, Gemini, Copilot, or Perplexity—you're invisible, and
            your competitors are winning.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Our Solutions</h2>

          <div className="space-y-16">
            {/* AI Visibility Tracking */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">AI Visibility Tracking</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  See exactly how your brand and products appear in ChatGPT, Gemini, Copilot, Perplexity, and Claude.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Track rankings across multiple AI assistants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Monitor regional and language visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Receive alerts when your product drops in AI answers</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-3 text-gray-900 text-sm">AI Visibility Tracking Demo</h4>
                {renderDemoData(solutions[0].demoData, 'platform-scores')}
              </div>
            </div>

            {/* Competitor Intelligence */}
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
              <div className="lg:col-start-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Competitor Intelligence</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Benchmark your Share of AI Voice against rivals and uncover their strategy.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Compare citation frequency, tone, and placement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Detect emerging competitors gaining traction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Identify gaps in category and price positioning</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-start-1">
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-3 text-gray-900 text-sm">Competitor Intelligence Demo</h4>
                  {renderDemoData(solutions[1].demoData, 'competitor-comparison')}
                </div>
              </div>
            </div>

            {/* GEO Optimization */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">GEO Optimization (Generative Engine Optimization)</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Make your product content AI-ready with actionable recommendations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">AI-readiness score (0–100) for each product page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Citation booster tips (FAQs, authority links, structured data)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">AI-assisted rewrites in your brand voice</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-3 text-gray-900 text-sm">GEO Optimization Demo</h4>
                {renderDemoData(solutions[2].demoData, 'readiness-scores')}
              </div>
            </div>

            {/* E-Commerce Scale Support */}
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
              <div className="lg:col-start-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">E-Commerce Scale Support</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Handle 100 or 100,000 SKUs with ease.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Bulk product uploads and integrations (Shopify, Magento, WooCommerce)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Batch SKU optimization with GEO recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Category heatmaps to prioritize product lines</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-start-1">
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-3 text-gray-900 text-sm">E-Commerce Scale Support Demo</h4>
                  {renderDemoData(solutions[3].demoData, 'scale-metrics')}
                </div>
              </div>
            </div>

            {/* Shopper Insights */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Shopper Insights</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Understand what real shoppers ask AI assistants.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Query intent mapping (informational, comparative, transactional)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Top shopper questions in your category</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Sentiment analysis of how your brand is framed</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-3 text-gray-900 text-sm">Shopper Insights Demo</h4>
                {renderDemoData(solutions[4].demoData, 'query-insights')}
              </div>
            </div>

            {/* ROI & Analytics */}
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
              <div className="lg:col-start-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">ROI & Analytics</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Finally, connect AI visibility to business results.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Revenue attribution from AI visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Impact calculator to project sales uplift</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Executive dashboards for CMOs and boards</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-start-1">
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-3 text-gray-900 text-sm">ROI & Analytics Demo</h4>
                  {renderDemoData(solutions[5].demoData, 'roi-metrics')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Results You Can Expect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="text-center border-2 border-blue-200">
                <CardHeader>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{result.value}</div>
                  <CardTitle className="text-lg">{result.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{result.label === 'Higher ROI' ? result.label : ''}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Kabini.ai?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Unlike other tools, Kabini.ai isn't just about SEO or ChatGPT Shopping.
            We're the complete AI visibility platform:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {features.slice(0, 3).map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.slice(3).map((feature, index) => (
              <Card key={index + 3} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How Kabini.ai Works?</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section id="who-we-help" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Who Kabini.ai Helps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience, index) => (
              <Card key={index} className="text-center border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">{audience.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Don't let AI assistants recommend your competitors.
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Be the brand shoppers see first in ChatGPT, Gemini, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-8 py-3 text-lg">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader
                  className="cursor-pointer bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shopping;
