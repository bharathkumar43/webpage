import React from 'react';
import './WhyChoose.css';

const WhyChoose = () => {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10.5H13M10.5 8V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      tag: "AI-POWERED",
      heading: "Multi-LLM Tracking",
      description: "Track your brand across ChatGPT, Gemini, Copilot, and Claude"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      tag: "SCALABLE",
      heading: "SKU-Scale Optimization",
      description: "Optimize thousands of products with bulk processing"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9L12 6L16 10L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="6" y="12" width="3" height="6" fill="currentColor"/>
          <rect x="10" y="8" width="3" height="10" fill="currentColor"/>
          <rect x="14" y="6" width="3" height="12" fill="currentColor"/>
        </svg>
      ),
      tag: "ANALYTICS",
      heading: "Sentiment & Placement Analysis",
      description: "Understand how you're cited in AI responses"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8A6 6 0 0 0 6 8C6 7 7 5 8 3C9 1 10 1 12 1C14 1 15 1 16 3C17 5 18 7 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 8V14A6 6 0 0 1 6 14V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      tag: "SMART ALERTS",
      heading: "Predictive Alerts",
      description: "Get notified before rankings drop with monitoring"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9L12 6L16 10L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 14L10 11L14 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      tag: "ROI FOCUSED",
      heading: "ROI Dashboards",
      description: "Connect AI visibility directly to sales and growth"
    }
  ];

  return (
    <section id="why-kabini" className="why-choose">
      <div className="container">
        <h2>Why Choose Kabini.ai?</h2>
        <p>
          Unlike other tools, Kabini.ai isn't just about SEO or ChatGPT Shopping.<br />
          We're the complete AI visibility platform:
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-tag">{feature.tag}</div>
              <h3 className="feature-heading">{feature.heading}</h3>
              <p className="feature-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
