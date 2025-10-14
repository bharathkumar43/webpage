import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </linearGradient>
                  <filter id="g" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                  </filter>
                </defs>
                <rect x="2" y="2" width="36" height="36" rx="12" fill="url(#lg)" />
                <path d="M22 10 L12 22 H18 L18 30 L28 18 H22 Z" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="logo-text">Kabini.ai</span>
          </div>

          <nav className="nav-menu">
            <div className="nav-dropdown">
              <a href="#platform" className="nav-link">
                Platform
                <span className="dropdown-arrow">▼</span>
              </a>
              <div className="dropdown-menu">
                <a href="#industry" className="dropdown-item">Industrial</a>
                <a href="http://localhost:3000" className="dropdown-item">Shopping</a>
              </div>
            </div>
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
          </nav>

          <div className="header-actions">
            <a href="https://app.kabini.ai" className="cta-button secondary">Sign In</a>
            <a href="https://app.kabini.ai" className="cta-button primary">Start Free Trial</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
