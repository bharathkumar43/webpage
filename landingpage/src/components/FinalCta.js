import React from 'react';
import './FinalCta.css';

const FinalCta = () => {
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
    <section className="final-cta">
      <div className="container">
        <h2>Don't let AI assistants recommend your competitors.</h2>
        <p>Be the brand shoppers see first in ChatGPT, Gemini, and beyond.</p>
        <div className="cta-buttons">
          <button 
            className="cta-button primary" 
            onClick={handleCtaClick}
          >
            Start Free Trial
          </button>
          <button 
            className="cta-button secondary" 
            onClick={handleCtaClick}
          >
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;


