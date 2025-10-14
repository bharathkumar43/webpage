import React from 'react';
import './HowItWorks.css';

const HowItWorks= () => {
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

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2>How Kabini.ai Works?</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
