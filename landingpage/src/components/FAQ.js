import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Q1: What is AI Visibility and why does it matter for e-commerce?",
      answer: "AI Visibility means how often your brand and products appear in AI assistants like ChatGPT, Gemini, Copilot, and Perplexity when shoppers ask questions. As more buyers rely on AI to make purchasing decisions, ranking high in these tools is as important as ranking in Google. Without AI visibility, your products risk being invisible to this growing segment of shoppers."
    },
    {
      question: "Q2: What is Generative Engine Optimization (GEO)?",
      answer: "Generative Engine Optimization (GEO) is the process of optimizing content so that large language models (LLMs) and AI search tools cite your brand or products in their responses. GEO is the next evolution of SEO — moving from search engines to AI-first shopping and discovery platforms."
    },
    {
      question: "Q3: How does Kabini.ai track product visibility in AI assistants?",
      answer: "Kabini.ai scans and analyzes responses from ChatGPT, Gemini, Copilot, Perplexity, and Claude to measure how often your products appear, how they are positioned, and whether competitors are cited more frequently. We provide a clear AI Visibility Score, competitor benchmarks, and actionable insights to improve your ranking."
    },
    {
      question: "Q4: How is Kabini.ai different from SEO or AI writing tools?",
      answer: "SEO tools focus on Google, while AI writers create content without visibility intelligence. Kabini.ai is the only platform built to monitor, optimize, and scale AI visibility. Instead of just producing content, we help you understand where your brand ranks in AI answers and how to optimize for better placement, higher mentions, and increased revenue."
    },
    {
      question: "Q5: Which businesses benefit most from Kabini.ai?",
      answer: "Kabini.ai is built for e-commerce brands, digital marketing teams, and enterprise retailers managing large product catalogs. If you sell online and want to appear when shoppers ask AI assistants for recommendations, Kabini.ai is designed for you."
    },
    {
      question: "Q6: Can Kabini.ai handle thousands of SKUs at once?",
      answer: "Yes. Kabini.ai supports bulk product uploads and integrations with platforms like Shopify, Magento, and WooCommerce. Our batch SKU optimization and category heatmaps make it possible to scale GEO across hundreds or thousands of products."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <h3 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-icon">
                  {openIndex === index ? '−' : '+'}
                </span>
              </h3>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
