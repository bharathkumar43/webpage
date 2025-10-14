import React from 'react';
import './PlatformShowcase.css';

const PlatformShowcase = () => {
  const platforms = [
    {
      name: 'ChatGPT',
      icon: '🤖',
      description: 'OpenAI\'s conversational AI',
      color: '#000000'
    },
    {
      name: 'Gemini',
      icon: '💎',
      description: 'Google\'s advanced AI model',
      color: '#4285F4'
    },
    {
      name: 'Perplexity',
      icon: '🔍',
      description: 'AI-powered search engine',
      color: '#6366F1'
    },
    {
      name: 'Claude',
      icon: '🧠',
      description: 'Anthropic\'s AI assistant',
      color: '#FF6B35'
    }
  ];

  return (
    <section className="platform-showcase">
      <div className="container">
        <div className="showcase-header">
          <h2>Track Your AI Visibility Across All Major Platforms</h2>
          <p>Monitor how your content appears in the most popular AI assistants and search engines</p>
        </div>
        
        <div className="platforms-grid">
          {platforms.map((platform, index) => (
            <div key={index} className="platform-card">
              <div className="platform-icon" style={{ backgroundColor: platform.color }}>
                <span>{platform.icon}</span>
              </div>
              <h3>{platform.name}</h3>
              <p>{platform.description}</p>
              <div className="platform-status">
                <span className="status-indicator active"></span>
                <span className="status-text">Active Tracking</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="showcase-footer">
          <p>Plus integration with Copilot, Bard, and 20+ other AI platforms</p>
        </div>
      </div>
    </section>
  );
};

export default PlatformShowcase;


