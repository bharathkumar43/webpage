import React from 'react';
import './Chart.css';

const Chart = () => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <svg className="chart-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 7l-8.5 8.5-5-5L2 17" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 7h6v6" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h3>AI Visibility</h3>
      </div>
      
      {/* Chart Container - exact webpage structure */}
      <div className="chart-container">
        {/* Y-axis labels */}
        <div className="chart-y-labels">
          <span>100%</span>
          <span>60%</span>
          <span>40%</span>
          <span>20%</span>
        </div>
        
        {/* Chart area */}
        <div className="chart-area">
          {/* Grid lines */}
          <div className="chart-grid-lines">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          
          {/* Line chart */}
          <svg className="chart-svg" viewBox="0 0 300 200" preserveAspectRatio="none">
            {/* Line path */}
            <path
              d="M 20 160 L 100 140 L 180 130 L 260 20"
              stroke="#3B82F6"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Data points */}
            <circle cx="20" cy="160" r="4" fill="#3B82F6" />
            <circle cx="100" cy="140" r="4" fill="#3B82F6" />
            <circle cx="180" cy="130" r="4" fill="#3B82F6" />
            <circle cx="260" cy="20" r="4" fill="#3B82F6" />
          </svg>
        </div>
      </div>
      
      {/* X-axis labels */}
      <div className="chart-x-labels">
        <span>ChatGPT</span>
        <span>Gemini</span>
        <span>Perplexity</span>
        <span>Claude</span>
      </div>
      
      {/* Chart description */}
      <div className="chart-description">
        <p>Track your AI visibility improvement across platforms</p>
        <div className="chart-desc-row">
          <svg className="chart-desc-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M22 7l-8.5 8.5-5-5L2 17" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 7h6v6" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Real-time monitoring</span>
        </div>
      </div>
    </div>
  );
};

export default Chart;
