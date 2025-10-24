import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogArticle from '@/components/BlogArticle';
import { useState, useEffect } from 'react';

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  // Sync selected article with URL (?post=ID)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const postParam = params.get('post');
    if (postParam) {
      const id = Number(postParam);
      if (!Number.isNaN(id)) setSelectedArticle(id);
    }
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (selectedArticle) {
      url.searchParams.set('post', String(selectedArticle));
    } else {
      url.searchParams.delete('post');
    }
    window.history.replaceState({}, '', url.toString());
  }, [selectedArticle]);

  const blogPosts = [
    {
      id: 101,
      title: '5 Ways to Rank Your Shopify Products in AI Shopping Results',
      excerpt:
        'Practical strategies to improve your product visibility across AI platforms like ChatGPT, Perplexity, Claude, and Gemini — from schema and FAQs to prompt-led optimization.',
      author: 'Kabini.ai Editorial',
      date: 'October 2025',
      readTime: '7 min read',
      category: 'How-To',
    },
    {
      id: 102,
      title: 'The Complete Guide to AI Shelf Space for Shopify Merchants',
      excerpt:
        'Understand AI shelf space, how placement works in AI answers, and how to secure prime positions with structured data and content freshness.',
      author: 'Kabini.ai Editorial',
      date: 'October 2025',
      readTime: '9 min read',
      category: 'Guides',
    },
    {
      id: 103,
      title: 'Prompt Analysis: The Secret to Winning AI Shopping Queries',
      excerpt:
        'Use real shopper prompts to uncover visibility gaps, align content to intent, and convert AI rankings into sales.',
      author: 'Kabini.ai Editorial',
      date: 'October 2025',
      readTime: '8 min read',
      category: 'Prompt Analysis',
    },
  ];

  if (selectedArticle) {
    return <BlogArticle postId={selectedArticle} onBack={() => setSelectedArticle(null)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="pt-16 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="container mx-auto px-4 py-14">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Blog</h1>
            <p className="text-blue-100 mt-3 max-w-2xl mx-auto">
              Insights, guides, and playbooks for winning AI visibility on Shopify.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="border-blue-200 hover:border-blue-400/70 transition-colors shadow-sm hover:shadow-md cursor-pointer"
              onClick={() => setSelectedArticle(post.id)}
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl font-bold leading-snug">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <div className="mt-4 text-xs text-muted-foreground">
                  {post.author} • {post.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;


