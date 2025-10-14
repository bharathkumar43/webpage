import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  FileText, 
  Zap,
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Target,
  BarChart3,
  Clock
} from 'lucide-react';
import { useState } from 'react';
import BlogArticle from '@/components/BlogArticle';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  // State management for interactive features
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "How to Achieve 95% AI Visibility Score Across ChatGPT, Claude, and Gemini",
      excerpt: "Learn the proven strategies that helped our clients increase their AI visibility by 300% in just 30 days. Discover the exact techniques for optimizing content for multiple AI platforms simultaneously.",
      author: "Sarah Chen",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "AI Visibility",
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "GEO vs SEO: Why Generative Engine Optimization is the Future",
      excerpt: "Traditional SEO is dead. Discover how GEO (Generative Engine Optimization) is revolutionizing content strategy and why your business needs to adapt now to stay competitive.",
      author: "Mike Rodriguez",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "GEO Strategy",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Case Study: How TechCorp Increased AI Citations by 400%",
      excerpt: "Real results from a B2B SaaS company that transformed their AI visibility using our platform. See the exact metrics, timeline, and strategies that drove their success.",
      author: "Emily Watson",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Case Studies",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "AI Content Analyzer: The Complete Guide to Multi-LLM Monitoring",
      excerpt: "Master the art of tracking your content performance across ChatGPT, Perplexity, Claude, and Gemini. Learn which metrics matter most and how to interpret your AI visibility scores.",
      author: "David Park",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "AI Analytics",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Competitor Benchmarking: How to Outrank Your Rivals in AI Search",
      excerpt: "Discover how to analyze your competitors' AI visibility and identify opportunities to dominate AI search results. Includes real examples and actionable strategies.",
      author: "Lisa Kumar",
      date: "December 1, 2024",
      readTime: "6 min read",
      category: "Competitor Analysis",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Schema Markup for AI: Boost Your Content's Trust and Citations",
      excerpt: "Learn how to implement AI-friendly schema markup that increases your content's authority and improves visibility across all major AI platforms.",
      author: "Alex Thompson",
      date: "November 28, 2024",
      readTime: "5 min read",
      category: "Technical SEO",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 7,
      title: "The AI Content Generator: Creating FAQ Content That Ranks",
      excerpt: "Master the art of generating AI-optimized Q&A content that gets cited by ChatGPT, Claude, and other AI platforms. Includes templates and best practices.",
      author: "Maria Santos",
      date: "November 25, 2024",
      readTime: "7 min read",
      category: "Content Generation",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 8,
      title: "Real-Time AI Monitoring: Track Your Visibility 24/7",
      excerpt: "Set up automated monitoring for your AI visibility across all platforms. Learn how to create alerts, track trends, and respond to changes in real-time.",
      author: "James Wilson",
      date: "November 22, 2024",
      readTime: "6 min read",
      category: "AI Monitoring",
      featured: false,
      image: "/api/placeholder/400/250"
    }
  ];

  // Filter posts based on category
  const filteredPosts = blogPosts.filter(post => {
    return selectedCategory === "All" || post.category === selectedCategory;
  });

  // Get visible posts for pagination
  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;

  // Event handlers
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setVisiblePosts(6); // Reset pagination when filtering
  };


  const handleLoadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 6, filteredPosts.length));
  };


  const handleBlogPostClick = (postId: number) => {
    setSelectedArticle(postId);
  };

  const handleBackToBlog = () => {
    setSelectedArticle(null);
  };

  const categories = [
    { name: "All", count: 32 },
    { name: "AI Visibility", count: 8 },
    { name: "GEO Strategy", count: 6 },
    { name: "Case Studies", count: 5 },
    { name: "AI Analytics", count: 4 },
    { name: "Competitor Analysis", count: 3 },
    { name: "Technical SEO", count: 3 },
    { name: "Content Generation", count: 2 },
    { name: "AI Monitoring", count: 1 }
  ];

  // Show individual article if one is selected
  if (selectedArticle) {
    return <BlogArticle postId={selectedArticle} onBack={handleBackToBlog} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Blog Header Section */}
      <div className="pt-16 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">Blog</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">

        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => handleCategoryClick(category.name)}
                        className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors ${
                          selectedCategory === category.name
                            ? 'bg-primary/10 text-primary font-medium' 
                            : 'text-muted-foreground hover:bg-muted'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm">{category.name}</span>
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">({category.count})</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['AI Visibility', 'GEO', 'ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Competitor Analysis', 'Schema Markup', 'Content Optimization', 'AI Monitoring'].map((tag, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary/10 text-xs px-2 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            {displayedPosts.length > 0 && displayedPosts[0].featured && (
              <Card className="mb-8 border-2 border-primary/20 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    <Badge variant="outline" className="text-xs">{displayedPosts[0].category}</Badge>
                  </div>
                  <CardTitle 
                    className="text-2xl font-bold leading-tight cursor-pointer hover:text-primary transition-colors duration-200"
                    onClick={() => handleBlogPostClick(displayedPosts[0].id)}
                  >
                    {displayedPosts[0].title}
                  </CardTitle>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mt-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{displayedPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{displayedPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{displayedPosts[0].readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{displayedPosts[0].excerpt}</p>
                </CardContent>
              </Card>
            )}

            {/* Regular Posts */}
            {displayedPosts.filter(post => !post.featured).length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {displayedPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-[400px] w-full flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                    </div>
                    <CardTitle 
                      className="text-lg font-semibold line-clamp-2 leading-tight cursor-pointer hover:text-primary transition-colors duration-200"
                      onClick={() => handleBlogPostClick(post.id)}
                    >
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-3">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-4">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="text-sm text-primary font-medium flex items-center gap-1">
                        Click title to read more <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-muted-foreground text-lg mb-4">No blog posts found</div>
                <p className="text-muted-foreground">Try adjusting your search or category filter</p>
              </div>
            )}

            {/* Load More */}
            {hasMorePosts && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" onClick={handleLoadMore} className="font-medium px-8 py-3">
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Blog;


