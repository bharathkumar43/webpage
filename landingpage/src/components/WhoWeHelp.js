import React from 'react';
import './WhoWeHelp.css';

const WhoWeHelp = () => {
  const audiences = [
    {
      title: "E-commerce Brands:",
      description: "Compete with Amazon & big retailers."
    },
    {
      title: "Digital Marketers:",
      description: "Scale content and optimize AI presence."
    },
    {
      title: "SEO Teams:",
      description: "Adapt SEO strategies for the AI-first world."
    },
    {
      title: "Enterprise CMOs:",
      description: "Measure ROI from AI visibility investments."
    }
  ];

  return (
    <section id="helps" className="who-we-help">
      <div className="container">
        <h2>Who Kabini.ai Helps</h2>
        <div className="audience-grid">
          {audiences.map((audience, index) => (
            <div key={index} className="audience-item">
              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;


