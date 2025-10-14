import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI-Powered E-commerce: How Kabini.ai is Revolutionizing Online Shopping',
      excerpt: 'Discover how artificial intelligence is transforming the e-commerce landscape and how Kabini.ai is leading the charge in making stores more visible in AI platforms.',
      author: 'Sarah Johnson',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: '5 Essential Strategies for E-commerce Visibility in 2024',
      excerpt: "Learn the proven strategies that successful online stores use to increase their visibility and drive more sales in today's competitive digital marketplace.",
      author: 'Michael Chen',
      date: 'December 12, 2024',
      readTime: '7 min read',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Understanding AI Shopping Assistants: What Every Store Owner Needs to Know',
      excerpt: "AI shopping assistants are changing how customers discover products. Here's what you need to know to optimize your store for these emerging platforms.",
      author: 'Emily Rodriguez',
      date: 'December 10, 2024',
      readTime: '6 min read',
      category: 'AI & Technology',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Case Study: How TechGear Increased Sales by 300% with AI Optimization',
      excerpt: 'A detailed look at how one electronics retailer transformed their business using AI-powered optimization strategies and the results they achieved.',
      author: 'David Park',
      date: 'December 8, 2024',
      readTime: '8 min read',
      category: 'Case Studies',
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'The Psychology of AI Shopping: Understanding Customer Behavior',
      excerpt: 'Dive deep into how AI influences customer decision-making and what this means for your e-commerce strategy and product positioning.',
      author: 'Lisa Thompson',
      date: 'December 5, 2024',
      readTime: '9 min read',
      category: 'Consumer Psychology',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Building Trust in AI-Driven Shopping: Best Practices for Store Owners',
      excerpt: 'Learn how to build customer trust when your products are recommended by AI systems and create a seamless shopping experience.',
      author: 'Alex Kumar',
      date: 'December 3, 2024',
      readTime: '6 min read',
      category: 'Trust & Security',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop'
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const handlePostClick = (postId) => {
    window.location.hash = `#/blog/${postId}`;
  };

  return (
    <div className="blog">
      <div className="container">
        <div className="blog-header">
          <h1>Kabini.ai Blog</h1>
          <p>Insights, strategies, and stories from the world of AI-powered e-commerce</p>
        </div>

        {featuredPost && (
          <div className="featured-post">
            <div className="featured-content">
              <div className="featured-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <div className="featured-badge">Featured</div>
              </div>
              <div className="featured-text">
                <div className="post-meta">
                  <span className="category">{featuredPost.category}</span>
                  <span className="date">{featuredPost.date}</span>
                  <span className="read-time">{featuredPost.readTime}</span>
                </div>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <div className="post-footer">
                  <div className="author">
                    <div className="author-avatar">
                      <span>{featuredPost.author.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <span className="author-name">{featuredPost.author}</span>
                  </div>
                  <button onClick={() => handlePostClick(featuredPost.id)} className="read-more-btn">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="blog-posts">
          <h3>Latest Articles</h3>
          <div className="posts-grid">
            {regularPosts.map(post => (
              <article key={post.id} className="post-card">
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="category">{post.category}</span>
                    <span className="date">{post.date}</span>
                  </div>
                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>
                  <div className="post-footer">
                    <div className="author">
                      <div className="author-avatar">
                        <span>{post.author.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <span className="author-name">{post.author}</span>
                    </div>
                    <div className="post-stats">
                      <span className="read-time">{post.readTime}</span>
                    </div>
                  </div>
                  <button onClick={() => handlePostClick(post.id)} className="read-more-btn">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="newsletter-signup">
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>Get the latest insights on AI-powered e-commerce delivered to your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" className="email-input" />
              <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;



