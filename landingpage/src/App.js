import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solutions from './components/Solutions';
import Results from './components/Results';
import CtaSection from './components/CtaSection';
import WhyChoose from './components/WhyChoose';
import HowItWorks from './components/HowItWorks';
import WhoWeHelp from './components/WhoWeHelp';
import FinalCta from './components/FinalCta';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Handle initial hash
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the #
      if (hash === '/privacy-policy') {
        setCurrentPage('privacy');
      } else if (hash === '/terms-of-service') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
      // Scroll to top when page changes
      window.scrollTo(0, 0);
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial load
    handleHashChange();

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Render Privacy Policy page
  if (currentPage === 'privacy') {
    return <PrivacyPolicy />;
  }

  // Render Terms of Service page
  if (currentPage === 'terms') {
    return <TermsOfService />;
  }

  // Render Home page (default)
  return (
    <div className="App">
      <Header />
      <Hero />
      <Problem />
      <Solutions />
      <Results />
      <CtaSection />
      <WhyChoose />
      <HowItWorks />
      <WhoWeHelp />
      <FinalCta />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
