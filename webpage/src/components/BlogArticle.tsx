import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Share2,
  Bookmark,
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  Eye,
  MessageCircle,
  ThumbsUp
} from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogArticleProps {
  postId: number;
  onBack: () => void;
}

const BlogArticle = ({ postId, onBack }: BlogArticleProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  // Enhanced article content with images and better formatting
  const articleContent = {
    1: {
      title: "How to Achieve 95% AI Visibility Score Across ChatGPT, Claude, and Gemini",
      author: "Sarah Chen",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "AI Visibility",
      excerpt: "Learn the proven strategies that helped our clients increase their AI visibility by 300% in just 30 days. Discover the exact techniques for optimizing content for multiple AI platforms simultaneously.",
      views: 12450,
      likes: 89,
      comments: 23,
      content: `
        <div class="article-intro">
          <p class="lead">In today's digital landscape, traditional SEO is no longer enough. With AI platforms like ChatGPT, Claude, and Gemini becoming primary sources of information for millions of users, achieving high AI visibility scores has become crucial for business success.</p>
          
          <div class="highlight-box">
            <p><strong>Key Insight:</strong> Our research shows that businesses with AI visibility scores above 90% see a 300% increase in organic traffic and a 150% boost in lead generation.</p>
          </div>
        </div>

        <h2>Understanding AI Visibility Scoring</h2>
        <p>AI visibility scoring works differently from traditional search rankings. Instead of focusing on keywords and backlinks, AI platforms prioritize:</p>
        
        <div class="feature-grid">
          <div class="feature-item">
            <h3>Content Authority</h3>
            <p>How often your content is cited as a reliable source</p>
          </div>
          <div class="feature-item">
            <h3>Answer Completeness</h3>
            <p>Whether your content provides comprehensive answers</p>
          </div>
          <div class="feature-item">
            <h3>Factual Accuracy</h3>
            <p>The reliability and accuracy of your information</p>
          </div>
          <div class="feature-item">
            <h3>Schema Markup</h3>
            <p>Proper structured data implementation</p>
          </div>
        </div>

        <div class="image-container">
          <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop" alt="AI Visibility Dashboard showing 95% score across platforms" />
          <p class="image-caption">AI Visibility Dashboard showing 95% score across ChatGPT, Claude, and Gemini</p>
        </div>

        <h2>Step 1: Optimize Your Content Structure</h2>
        <p>The foundation of high AI visibility is well-structured content. Here's what you need to implement:</p>

        <h3>Use Clear Question-Answer Format</h3>
        <p>AI platforms love content that directly answers questions. Structure your content with:</p>
        <ul>
          <li>Clear headings that match common search queries</li>
          <li>Direct answers followed by supporting evidence</li>
          <li>FAQ sections that address common concerns</li>
          <li>Step-by-step guides for complex topics</li>
        </ul>

        <div class="code-example">
          <h4>Example: Before vs After</h4>
          <div class="before-after">
            <div class="before">
              <h5>❌ Before (SEO-focused)</h5>
              <p>"Best project management software for teams"</p>
            </div>
            <div class="after">
              <h5>✅ After (AI-optimized)</h5>
              <p>"What is the most effective project management software for remote teams in 2024?"</p>
            </div>
          </div>
        </div>

        <h2>Step 2: Multi-Platform Optimization Strategy</h2>
        <p>Each AI platform has unique preferences. Here's how to optimize for each:</p>

        <div class="platform-comparison">
          <div class="platform-card">
            <h3>🤖 ChatGPT Optimization</h3>
            <ul>
              <li>Comprehensive, well-researched content</li>
              <li>Multiple perspectives on complex topics</li>
              <li>Recent data and statistics</li>
              <li>Clear source citations</li>
            </ul>
          </div>
          <div class="platform-card">
            <h3>🧠 Claude Optimization</h3>
            <ul>
              <li>Ethical and unbiased content</li>
              <li>Detailed explanations with context</li>
              <li>Balanced viewpoints</li>
              <li>High-quality source materials</li>
            </ul>
          </div>
          <div class="platform-card">
            <h3>💎 Gemini Optimization</h3>
            <ul>
              <li>Visual content integration</li>
              <li>Multimedia explanations</li>
              <li>Interactive elements</li>
              <li>Real-time data integration</li>
            </ul>
          </div>
        </div>

        <div class="image-container">
          <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop" alt="Multi-platform AI optimization dashboard" />
          <p class="image-caption">Multi-platform optimization dashboard showing performance across different AI engines</p>
        </div>

        <h2>Step 3: Content Authority Building</h2>
        <p>Building authority is crucial for AI visibility. Here are proven strategies:</p>

        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">300%</div>
            <div class="stat-label">Increase in AI Citations</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">95%</div>
            <div class="stat-label">Average Visibility Score</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">180%</div>
            <div class="stat-label">Boost in Organic Traffic</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">250%</div>
            <div class="stat-label">Improvement in Lead Quality</div>
          </div>
        </div>

        <h2>Real Results: Case Study</h2>
        <p>TechCorp, a B2B SaaS company, implemented these strategies and achieved:</p>
        
        <div class="case-study-box">
          <h3>🏆 TechCorp Results</h3>
          <ul>
            <li>95% AI visibility score across all platforms</li>
            <li>300% increase in organic traffic</li>
            <li>150% boost in lead generation</li>
            <li>200% improvement in brand awareness</li>
          </ul>
        </div>

        <div class="image-container">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" alt="Analytics dashboard showing growth metrics" />
          <p class="image-caption">Analytics dashboard showing the dramatic growth in AI visibility metrics</p>
        </div>

        <h2>Conclusion</h2>
        <p>Achieving 95% AI visibility across ChatGPT, Claude, and Gemini requires a comprehensive approach combining content optimization, technical implementation, and continuous monitoring. By following these proven strategies, you can significantly improve your AI visibility and drive substantial business growth.</p>

        <div class="cta-box">
          <h3>Ready to Boost Your AI Visibility?</h3>
          <p>Start implementing these strategies today and see the results for yourself. Remember, AI visibility is not a one-time effort but an ongoing process.</p>
        </div>
      `,
      relatedPosts: [
        { id: 2, title: "GEO vs SEO: Why Generative Engine Optimization is the Future" },
        { id: 4, title: "AI Content Analyzer: The Complete Guide to Multi-LLM Monitoring" },
        { id: 5, title: "Competitor Benchmarking: How to Outrank Your Rivals in AI Search" }
      ]
    },
    2: {
      title: "GEO vs SEO: Why Generative Engine Optimization is the Future",
      author: "Mike Rodriguez",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "GEO Strategy",
      excerpt: "Traditional SEO is dead. Discover how GEO (Generative Engine Optimization) is revolutionizing content strategy and why your business needs to adapt now to stay competitive.",
      views: 8920,
      likes: 67,
      comments: 18,
      content: `
        <div class="article-intro">
          <p class="lead">For decades, SEO has been the cornerstone of digital marketing. But the landscape is changing rapidly. With AI platforms like ChatGPT, Claude, and Gemini processing billions of queries daily, traditional SEO strategies are becoming obsolete.</p>
          
          <div class="highlight-box">
            <p><strong>The Shift:</strong> 40% of users now prefer AI-generated answers over traditional search results, and this number is growing rapidly.</p>
          </div>
        </div>

        <h2>What is GEO?</h2>
        <p>Generative Engine Optimization (GEO) is the practice of optimizing content for AI-powered search engines and generative platforms. Unlike traditional SEO, which focuses on keyword rankings and backlinks, GEO prioritizes:</p>

        <div class="comparison-table">
          <div class="comparison-row">
            <div class="comparison-header">Traditional SEO</div>
            <div class="comparison-header">GEO (Generative Engine Optimization)</div>
          </div>
          <div class="comparison-row">
            <div class="comparison-cell">Keyword density and placement</div>
            <div class="comparison-cell">Content comprehensiveness</div>
          </div>
          <div class="comparison-row">
            <div class="comparison-cell">Backlink quantity and quality</div>
            <div class="comparison-cell">Source credibility and citations</div>
          </div>
          <div class="comparison-row">
            <div class="comparison-cell">Page speed and technical factors</div>
            <div class="comparison-cell">Answer completeness</div>
          </div>
          <div class="comparison-row">
            <div class="comparison-cell">Meta tags and descriptions</div>
            <div class="comparison-cell">Real-time information accuracy</div>
          </div>
        </div>

        <div class="image-container">
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop" alt="SEO vs GEO comparison chart" />
          <p class="image-caption">Visual comparison showing the evolution from traditional SEO to GEO strategies</p>
        </div>

        <h2>Why GEO is the Future</h2>
        
        <h3>1. Changing User Behavior</h3>
        <p>Users are increasingly turning to AI platforms for information. Studies show that 40% of users now prefer AI-generated answers over traditional search results.</p>

        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">100M+</div>
            <div class="stat-label">ChatGPT Monthly Users</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50M+</div>
            <div class="stat-label">Claude Monthly Users</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">30M+</div>
            <div class="stat-label">Gemini Monthly Users</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">20M+</div>
            <div class="stat-label">Perplexity Monthly Users</div>
          </div>
        </div>

        <h3>2. Superior User Experience</h3>
        <p>AI platforms provide:</p>
        <ul>
          <li>Instant, comprehensive answers</li>
          <li>Contextual understanding</li>
          <li>Multi-source synthesis</li>
          <li>Personalized responses</li>
        </ul>

        <div class="image-container">
          <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop" alt="AI platform user interface showing comprehensive answers" />
          <p class="image-caption">AI platforms provide instant, comprehensive answers that users prefer over traditional search results</p>
        </div>

        <h2>GEO Implementation Strategy</h2>
        
        <div class="strategy-steps">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Content Optimization</h3>
              <p>Optimize your content for AI consumption with clear, direct language and comprehensive answers.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Authority Building</h3>
              <p>Establish your content as a reliable source with expert citations and original research.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Schema Implementation</h3>
              <p>Use structured data to help AI understand your content better.</p>
            </div>
          </div>
        </div>

        <h2>Case Study: The GEO Transformation</h2>
        <p>Digital Marketing Pro implemented GEO strategies and achieved:</p>
        
        <div class="case-study-box">
          <h3>📈 Digital Marketing Pro Results</h3>
          <ul>
            <li>250% increase in AI citations</li>
            <li>180% boost in organic traffic</li>
            <li>120% improvement in lead quality</li>
            <li>90% increase in brand authority</li>
          </ul>
        </div>

        <div class="image-container">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" alt="Growth chart showing GEO implementation results" />
          <p class="image-caption">Growth chart showing the dramatic improvements after implementing GEO strategies</p>
        </div>

        <h2>Getting Started with GEO</h2>
        <p>Ready to embrace the future? Here's your action plan:</p>
        
        <div class="action-checklist">
          <div class="checklist-item">
            <input type="checkbox" checked />
            <span>Audit current content for GEO potential</span>
          </div>
          <div class="checklist-item">
            <input type="checkbox" checked />
            <span>Restructure content for AI consumption</span>
          </div>
          <div class="checklist-item">
            <input type="checkbox" />
            <span>Add structured data markup</span>
          </div>
          <div class="checklist-item">
            <input type="checkbox" />
            <span>Track AI visibility metrics</span>
          </div>
          <div class="checklist-item">
            <input type="checkbox" />
            <span>Continuously optimize based on results</span>
          </div>
        </div>

        <div class="cta-box">
          <h3>Start Your GEO Journey Today</h3>
          <p>The future belongs to GEO. While traditional SEO still has value, businesses that embrace Generative Engine Optimization will have a significant competitive advantage.</p>
        </div>
      `,
      relatedPosts: [
        { id: 1, title: "How to Achieve 95% AI Visibility Score Across ChatGPT, Claude, and Gemini" },
        { id: 3, title: "Case Study: How TechCorp Increased AI Citations by 400%" },
        { id: 6, title: "Schema Markup for AI: Boost Your Content's Trust and Citations" }
      ]
    }
  };

  const article = articleContent[postId as keyof typeof articleContent];

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="container mx-auto px-4 pt-24 pb-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <Button onClick={onBack} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Article Header */}
      <div className="pt-16 bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button onClick={onBack} variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={isBookmarked ? "text-primary" : "text-muted-foreground"}
              >
                <Bookmark className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-primary">{article.category}</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4 leading-tight">{article.title}</h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{article.excerpt}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {article.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {article.views.toLocaleString()}
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  {article.likes + likes}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {article.comments}
                </div>
              </div>
            </div>
          </div>

          {/* Article Body with Enhanced Styling */}
          <div 
            className="prose prose-lg max-w-none article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Article Actions */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant={hasLiked ? "default" : "outline"}
                  size="sm"
                  onClick={handleLike}
                  className="flex items-center gap-2"
                >
                  <ThumbsUp className="w-4 h-4" />
                  {hasLiked ? "Liked" : "Like"} ({article.likes + likes})
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Comment ({article.comments})
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={isBookmarked ? "text-primary" : "text-muted-foreground"}
              >
                <Bookmark className="w-4 h-4 mr-2" />
                {isBookmarked ? "Bookmarked" : "Bookmark"}
              </Button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {article.relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 line-clamp-2">{relatedPost.title}</h3>
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Enhanced CSS Styles */}
      <style jsx>{`
        .article-content {
          line-height: 1.8;
        }
        
        .article-content h2 {
          font-size: 2rem;
          font-weight: 700;
          margin: 2rem 0 1rem 0;
          color: hsl(var(--foreground));
        }
        
        .article-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 1.5rem 0 0.75rem 0;
          color: hsl(var(--foreground));
        }
        
        .article-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 1rem 0 0.5rem 0;
          color: hsl(var(--foreground));
        }
        
        .article-content p {
          margin: 1rem 0;
          color: hsl(var(--muted-foreground));
        }
        
        .article-content .lead {
          font-size: 1.25rem;
          font-weight: 500;
          color: hsl(var(--foreground));
          margin: 2rem 0;
        }
        
        .article-content ul, .article-content ol {
          margin: 1rem 0;
          padding-left: 2rem;
        }
        
        .article-content li {
          margin: 0.5rem 0;
          color: hsl(var(--muted-foreground));
        }
        
        .highlight-box {
          background: hsl(var(--primary) / 0.1);
          border-left: 4px solid hsl(var(--primary));
          padding: 1.5rem;
          margin: 2rem 0;
          border-radius: 0.5rem;
        }
        
        .highlight-box p {
          margin: 0;
          color: hsl(var(--foreground));
        }
        
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .feature-item {
          background: hsl(var(--card));
          padding: 1.5rem;
          border-radius: 0.75rem;
          border: 1px solid hsl(var(--border));
        }
        
        .feature-item h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: hsl(var(--foreground));
        }
        
        .feature-item p {
          margin: 0;
          font-size: 0.875rem;
          color: hsl(var(--muted-foreground));
        }
        
        .image-container {
          margin: 2rem 0;
          text-align: center;
        }
        
        .image-container img {
          width: 100%;
          height: auto;
          border-radius: 0.75rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .image-caption {
          font-size: 0.875rem;
          color: hsl(var(--muted-foreground));
          margin-top: 0.5rem;
          font-style: italic;
        }
        
        .code-example {
          background: hsl(var(--muted));
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin: 2rem 0;
        }
        
        .before-after {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .before, .after {
          padding: 1rem;
          border-radius: 0.5rem;
        }
        
        .before {
          background: hsl(var(--destructive) / 0.1);
          border: 1px solid hsl(var(--destructive) / 0.2);
        }
        
        .after {
          background: hsl(var(--primary) / 0.1);
          border: 1px solid hsl(var(--primary) / 0.2);
        }
        
        .before h5, .after h5 {
          margin: 0 0 0.5rem 0;
          font-size: 0.875rem;
          font-weight: 600;
        }
        
        .before p, .after p {
          margin: 0;
          font-size: 0.875rem;
        }
        
        .platform-comparison {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .platform-card {
          background: hsl(var(--card));
          padding: 1.5rem;
          border-radius: 0.75rem;
          border: 1px solid hsl(var(--border));
        }
        
        .platform-card h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: hsl(var(--foreground));
        }
        
        .platform-card ul {
          margin: 0;
          padding-left: 1.5rem;
        }
        
        .platform-card li {
          margin: 0.5rem 0;
          font-size: 0.875rem;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: hsl(var(--card));
          border-radius: 0.75rem;
          border: 1px solid hsl(var(--border));
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: hsl(var(--primary));
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: hsl(var(--muted-foreground));
          font-weight: 500;
        }
        
        .case-study-box {
          background: hsl(var(--primary) / 0.1);
          border: 1px solid hsl(var(--primary) / 0.2);
          border-radius: 0.75rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .case-study-box h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: hsl(var(--foreground));
        }
        
        .case-study-box ul {
          margin: 0;
          padding-left: 1.5rem;
        }
        
        .case-study-box li {
          margin: 0.75rem 0;
          font-weight: 500;
        }
        
        .comparison-table {
          border: 1px solid hsl(var(--border));
          border-radius: 0.75rem;
          overflow: hidden;
          margin: 2rem 0;
        }
        
        .comparison-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        
        .comparison-header {
          background: hsl(var(--muted));
          padding: 1rem;
          font-weight: 600;
          color: hsl(var(--foreground));
          border-bottom: 1px solid hsl(var(--border));
        }
        
        .comparison-cell {
          padding: 1rem;
          border-bottom: 1px solid hsl(var(--border));
          color: hsl(var(--muted-foreground));
        }
        
        .comparison-row:last-child .comparison-cell {
          border-bottom: none;
        }
        
        .strategy-steps {
          margin: 2rem 0;
        }
        
        .step-item {
          display: flex;
          gap: 1rem;
          margin: 1.5rem 0;
          align-items: flex-start;
        }
        
        .step-number {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          flex-shrink: 0;
        }
        
        .step-content h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.125rem;
          font-weight: 600;
        }
        
        .step-content p {
          margin: 0;
          color: hsl(var(--muted-foreground));
        }
        
        .action-checklist {
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin: 2rem 0;
        }
        
        .checklist-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin: 0.75rem 0;
        }
        
        .checklist-item input[type="checkbox"] {
          width: 1.25rem;
          height: 1.25rem;
          accent-color: hsl(var(--primary));
        }
        
        .cta-box {
          background: hsl(var(--primary) / 0.1);
          border: 1px solid hsl(var(--primary) / 0.2);
          border-radius: 0.75rem;
          padding: 2rem;
          margin: 2rem 0;
          text-align: center;
        }
        
        .cta-box h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: hsl(var(--foreground));
        }
        
        .cta-box p {
          margin: 0;
          color: hsl(var(--muted-foreground));
        }
        
        @media (max-width: 768px) {
          .before-after {
            grid-template-columns: 1fr;
          }
          
          .comparison-row {
            grid-template-columns: 1fr;
          }
          
          .comparison-header {
            border-bottom: none;
          }
          
          .comparison-cell {
            border-bottom: 1px solid hsl(var(--border));
          }
        }
      `}</style>
    </div>
  );
};

export default BlogArticle;