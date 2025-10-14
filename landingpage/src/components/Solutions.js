import React from 'react';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      title: "AI Visibility Tracking",
      description: "See exactly how your brand and products appear in ChatGPT, Gemini, Copilot, Perplexity, and Claude.",
      features: [
        "Track rankings across multiple AI assistants",
        "Monitor regional and language visibility",
        "Receive alerts when your product drops in AI answers"
      ],
      demo: {
        type: "platform-scores",
        data: [
          { platform: "ChatGPT", score: 92, status: "high" },
          { platform: "Gemini", score: 78, status: "medium" },
          { platform: "Claude", score: 65, status: "low" },
          { platform: "Perplexity", score: 71, status: "medium" }
        ]
      }
    },
    {
      title: "Competitor Intelligence",
      description: "Benchmark your Share of AI Voice against rivals and uncover their strategy.",
      features: [
        "Compare citation frequency, tone, and placement",
        "Detect emerging competitors gaining traction",
        "Identify gaps in category and price positioning"
      ],
      demo: {
        type: "competitor-comparison",
        data: [
          { competitor: "Brand A", share: 35, trend: "up" },
          { competitor: "Brand B", share: 28, trend: "down" },
          { competitor: "Your Brand", share: 42, trend: "up" },
          { competitor: "Brand C", share: 15, trend: "stable" }
        ]
      }
    },
    {
      title: "GEO Optimization (Generative Engine Optimization)",
      description: "Make your product content AI-ready with actionable recommendations.",
      features: [
        "AI-readiness score (0–100) for each product page",
        "Citation booster tips (FAQs, authority links, structured data)",
        "AI-assisted rewrites in your brand voice"
      ],
      demo: {
        type: "readiness-scores",
        data: [
          { page: "Homepage", score: 85, status: "good" },
          { page: "Product A", score: 72, status: "medium" },
          { page: "Product B", score: 91, status: "excellent" },
          { page: "About", score: 68, status: "needs-work" }
        ]
      }
    },
    {
      title: "E-Commerce Scale Support",
      description: "Handle 100 or 100,000 SKUs with ease.",
      features: [
        "Bulk product uploads and integrations (Shopify, Magento, WooCommerce)",
        "Batch SKU optimization with GEO recommendations",
        "Category heatmaps to prioritize product lines"
      ],
      demo: {
        type: "scale-metrics",
        data: [
          { metric: "Total SKUs", value: "12,847", status: "processed" },
          { metric: "Optimized", value: "8,923", status: "completed" },
          { metric: "Pending", value: "3,924", status: "in-progress" },
          { metric: "Success Rate", value: "94.2%", status: "excellent" }
        ]
      }
    },
    {
      title: "Shopper Insights",
      description: "Understand what real shoppers ask AI assistants.",
      features: [
        "Query intent mapping (informational, comparative, transactional)",
        "Top shopper questions in your category",
        "Sentiment analysis of how your brand is framed"
      ],
      demo: {
        type: "query-insights",
        data: [
          { intent: "Informational", percentage: 45, queries: "2,847" },
          { intent: "Comparative", percentage: 32, queries: "1,923" },
          { intent: "Transactional", percentage: 23, queries: "1,456" }
        ]
      }
    },
    {
      title: "ROI & Analytics",
      description: "Finally, connect AI visibility to business results.",
      features: [
        "Revenue attribution from AI visibility",
        "Impact calculator to project sales uplift",
        "Executive dashboards for CMOs and boards"
      ],
      demo: {
        type: "roi-metrics",
        data: [
          { metric: "Revenue Impact", value: "+$2.4M", change: "+18%" },
          { metric: "Traffic Growth", value: "+156%", change: "+45%" },
          { metric: "Conversion Rate", value: "3.2%", change: "+12%" },
          { metric: "ROI", value: "340%", change: "+67%" }
        ]
      }
    }
  ];

  const renderDemo = (demo) => {
    switch (demo.type) {
      case "platform-scores":
        return (
          <div className="demo-platforms">
            {demo.data.map((item, index) => (
              <div key={index} className="platform-item">
                <div className="platform-name">{item.platform}</div>
                <div className={`visibility-score ${item.status}`}>{item.score}%</div>
              </div>
            ))}
          </div>
        );
      
      case "competitor-comparison":
        return (
          <div className="demo-competitors">
            {demo.data.map((item, index) => (
              <div key={index} className="competitor-item">
                <div className="competitor-name">{item.competitor}</div>
                <div className="competitor-share">{item.share}%</div>
                <div className={`trend ${item.trend}`}>
                  {item.trend === 'up' ? '↗' : item.trend === 'down' ? '↘' : '→'}
                </div>
              </div>
            ))}
          </div>
        );
      
      case "readiness-scores":
        return (
          <div className="demo-readiness">
            {demo.data.map((item, index) => (
              <div key={index} className="readiness-item">
                <div className="page-name">{item.page}</div>
                <div className={`readiness-score ${item.status}`}>{item.score}</div>
              </div>
            ))}
          </div>
        );
      
      case "scale-metrics":
        return (
          <div className="demo-scale">
            {demo.data.map((item, index) => (
              <div key={index} className="scale-item">
                <div className="metric-name">{item.metric}</div>
                <div className="metric-value">{item.value}</div>
              </div>
            ))}
          </div>
        );
      
      case "query-insights":
        return (
          <div className="demo-queries">
            {demo.data.map((item, index) => (
              <div key={index} className="query-item">
                <div className="query-intent">{item.intent}</div>
                <div className="query-percentage">{item.percentage}%</div>
                <div className="query-count">{item.queries} queries</div>
              </div>
            ))}
          </div>
        );
      
      case "roi-metrics":
        return (
          <div className="demo-roi">
            {demo.data.map((item, index) => (
              <div key={index} className="roi-item">
                <div className="roi-metric">{item.metric}</div>
                <div className="roi-value">{item.value}</div>
                <div className="roi-change positive">{item.change}</div>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="solutions" className="solutions">
      <div className="container">
        <h2>Our Solutions</h2>
        
        <div className="solutions-container">
          {solutions.map((solution, index) => (
            <div key={index} className={`solution-cross-section ${index % 2 === 0 ? 'left-content' : 'right-content'}`}>
              {index % 2 === 0 ? (
                // Even index: Content on left, Demo card on right
                <>
                  <div className="solution-content">
                    <div className="content-header">
                      <h3>{solution.title}</h3>
                    </div>
                    <p className="solution-description">{solution.description}</p>
                    <ul className="features-list">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="demo-card">
                    <div className="demo-header">
                      <h4>{solution.title} Demo</h4>
                    </div>
                    <div className="demo-content">
                      {renderDemo(solution.demo)}
                    </div>
                  </div>
                </>
              ) : (
                // Odd index: Demo card on left, Content on right
                <>
                  <div className="demo-card">
                    <div className="demo-header">
                      <h4>{solution.title} Demo</h4>
                    </div>
                    <div className="demo-content">
                      {renderDemo(solution.demo)}
                    </div>
                  </div>
                  
                  <div className="solution-content">
                    <div className="content-header">
                      <h3>{solution.title}</h3>
                    </div>
                    <p className="solution-description">{solution.description}</p>
                    <ul className="features-list">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
