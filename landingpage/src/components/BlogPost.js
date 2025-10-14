import React from 'react';
import './BlogPost.css';

const BlogPost = ({ postId }) => {
  const blogPosts = {
    1: {
      id: 1,
      title: 'The Future of AI-Powered E-commerce: How Kabini.ai is Revolutionizing Online Shopping',
      content: `
        <p>The e-commerce landscape is undergoing a revolutionary transformation, driven by the rapid advancement of artificial intelligence. As AI shopping assistants become increasingly sophisticated, businesses must adapt to remain competitive in this new digital ecosystem.</p>
        <h2>The AI Shopping Revolution</h2>
        <p>Artificial intelligence is fundamentally changing how consumers discover and purchase products. From personalized recommendations to voice-activated shopping, AI is creating new pathways for customer engagement that traditional e-commerce platforms never anticipated.</p>
        <p>At Kabini.ai, we've been at the forefront of this transformation, helping businesses optimize their presence across AI platforms. Our research shows that stores optimized for AI discovery see an average increase of 300% in organic traffic within the first six months.</p>
        <h2>Key Trends Shaping the Future</h2>
        <p>Several key trends are emerging that will define the future of AI-powered e-commerce:</p>
        <h3>1. Conversational Commerce</h3>
        <p>Voice-activated shopping and chat-based interactions are becoming the norm. Customers can now discover products through natural language queries, making the shopping experience more intuitive and accessible.</p>
        <h3>2. Predictive Personalization</h3>
        <p>AI systems are becoming increasingly sophisticated at predicting customer needs and preferences. This allows for hyper-personalized shopping experiences that anticipate what customers want before they even know it.</p>
        <h3>3. Visual Search Integration</h3>
        <p>Image recognition technology is enabling customers to search for products using photos. This visual search capability is particularly powerful for fashion, home decor, and other visually-driven product categories.</p>
        <h2>The Kabini.ai Advantage</h2>
        <p>Our platform provides businesses with the tools they need to thrive in this AI-driven environment. By optimizing product data, enhancing search visibility, and providing real-time analytics, we help businesses stay ahead of the curve.</p>
        <p>The future of e-commerce is here, and it's powered by AI. Businesses that embrace this transformation today will be the market leaders of tomorrow.</p>
      `,
      author: 'Sarah Johnson',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
      tags: ['AI', 'E-commerce', 'Technology', 'Future']
    },
    2: {
      id: 2,
      title: '5 Essential Strategies for E-commerce Visibility in 2024',
      content: `
        <p>In today's competitive digital marketplace, visibility is everything. With millions of online stores vying for customer attention, standing out requires strategic thinking and innovative approaches.</p>
        <h2>Strategy 1: Optimize for AI Search</h2>
        <p>Traditional SEO is no longer enough. AI-powered search engines are changing how products are discovered. Focus on natural language optimization and semantic search patterns.</p>
        <h2>Strategy 2: Leverage Visual Content</h2>
        <p>High-quality images and videos are crucial for engagement. Invest in professional photography and consider 360-degree product views to enhance the shopping experience.</p>
        <h2>Strategy 3: Build Trust Through Reviews</h2>
        <p>Customer reviews are more important than ever. Implement a robust review system and actively encourage satisfied customers to share their experiences.</p>
        <h2>Strategy 4: Mobile-First Approach</h2>
        <p>With mobile commerce growing rapidly, ensure your store is optimized for mobile devices. Fast loading times and intuitive navigation are essential.</p>
        <h2>Strategy 5: Personalize the Experience</h2>
        <p>Use data analytics to create personalized shopping experiences. Recommend products based on browsing history and purchase patterns.</p>
      `,
      author: 'Michael Chen',
      date: 'December 12, 2024',
      readTime: '7 min read',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      tags: ['E-commerce', 'SEO', 'Strategy', 'Visibility']
    }
  };

  const post = blogPosts[postId] || blogPosts[1];

  const handleBackToBlog = () => {
    window.location.hash = '#/blog';
  };

  return (
    <div className="blog-post">
      <div className="container">
        <button onClick={handleBackToBlog} className="back-to-blog">← Back to Blog</button>

        <div className="post-header">
          <div className="post-meta">
            <span className="category">{post.category}</span>
            <span className="date">{post.date}</span>
            <span className="read-time">{post.readTime}</span>
          </div>
          <h1>{post.title}</h1>
          <div className="author-info">
            <div className="author-avatar">
              <span>{post.author.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div className="author-details">
              <span className="author-name">{post.author}</span>
              <span className="author-title">Content Strategist</span>
            </div>
          </div>
        </div>

        <div className="post-image">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="post-content">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="post-footer">
          <div className="tags">
            <h4>Tags:</h4>
            <div className="tag-list">
              {post.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="share-buttons">
            <h4>Share this article:</h4>
            <div className="share-links">
              <a href="#" className="share-link twitter">Twitter</a>
              <a href="#" className="share-link linkedin">LinkedIn</a>
              <a href="#" className="share-link facebook">Facebook</a>
            </div>
          </div>
        </div>

        <div className="related-posts">
          <h3>Related Articles</h3>
          <div className="related-grid">
            <div className="related-post">
              <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop" alt="Related post" />
              <h4>Understanding AI Shopping Assistants</h4>
              <p>What every store owner needs to know about AI shopping platforms.</p>
            </div>
            <div className="related-post">
              <img src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=300&h=200&fit=crop" alt="Related post" />
              <h4>Case Study: TechGear Success Story</h4>
              <p>How one retailer increased sales by 300% with AI optimization.</p>
            </div>
            <div className="related-post">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop" alt="Related post" />
              <h4>Psychology of AI Shopping</h4>
              <p>Understanding customer behavior in AI-driven environments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;



