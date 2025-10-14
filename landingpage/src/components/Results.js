import React, { useState, useEffect, useRef } from 'react';
import './Results.css';

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ visibility: 0, sku: 0, roi: 0 });
  const sectionRef = useRef(null);

  const results = [
    {
      title: "+30% AI Visibility Lift",
      subtitle: "in first 90 days",
      target: 30
    },
    {
      title: "Faster SKU Optimization",
      subtitle: "— 1000s of products enhanced in hours",
      target: 1000
    },
    {
      title: "Higher ROI",
      subtitle: "— connect AI presence directly to sales growth",
      target: 100
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const animateCounter = (target, key) => {
        let current = 0;
        const increment = target / steps;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, stepDuration);
      };

      animateCounter(30, 'visibility');
      animateCounter(1000, 'sku');
      animateCounter(100, 'roi');
    }
  }, [isVisible]);

  return (
    <section className="results" ref={sectionRef}>
      <div className="container">
        <h2>Results You Can Expect</h2>
        <div className="results-grid">
          {results.map((result, index) => (
            <div key={index} className="result-item">
              <h3>
                {index === 0 && `+${counters.visibility}%`}
                {index === 1 && result.title}
                {index === 2 && result.title}
              </h3>
              <p>{result.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;


