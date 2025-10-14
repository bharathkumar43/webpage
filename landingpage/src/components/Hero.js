import React from 'react';
import Chart from './Chart';
import './Hero.css';

const Hero = () => {
  const handleCtaClick = (e) => {
    // Add ripple effect
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Make Your Store Seen in <span className="highlight">AI Platforms</span>
          </h1>
          <p className="hero-subtitle">
            Track your AI presence, outsmart competitors, and optimize your content with Generative Engine Optimization (GEO).
          </p>
          <button 
            className="cta-button primary" 
            onClick={handleCtaClick}
          >
            Get a Free AI Visibility Audit
          </button>
          
          {/* AI Platforms List - moved down after button */}
          <div className="ai-platforms">
            <div className="platform-item">
              <div className="platform-dot"></div>
              <span>CHATGPT</span>
            </div>
            <div className="platform-item">
              <div className="platform-dot"></div>
              <span>PERPLEXITY</span>
            </div>
            <div className="platform-item">
              <div className="platform-dot"></div>
              <span>GEMINI</span>
            </div>
            <div className="platform-item">
              <div className="platform-dot"></div>
              <span>CLAUDE</span>
            </div>
          </div>
        </div>
        
        <Chart />
      </div>
    </section>
  );
};

export default Hero;
