import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqData = [
  {
    question: "What types of businesses do you assist?",
    answer: "We assist individuals, startups, SMEs, and large institutions with comprehensive consultancy, ranging from business registrations to proactive compliance planning."
  },
  {
    question: "How long does a typical property registration take?",
    answer: "The timeline depends on the specific documentation and local authority processes, but our team ensures the fastest possible turnaround by maintaining proactive communication with all liaisoning departments."
  },
  {
    question: "Do you handle complete tax and auditing?",
    answer: "Yes, our Tax, Accounting & Financial Services cover everything from GST filing and income tax returns to complete corporate auditing."
  },
  {
    question: "How do I get started with your services?",
    answer: "Simply click the 'Enquire Now' button or reach out to us via our contact form below. Our support team will get in touch to schedule an initial consultation."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="section-subtitle">Find answers to common queries about our services and processes.</p>
        </div>
        
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item glass-panel ${openIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <h3>{item.question}</h3>
                {openIndex === index ? <ChevronUp className="faq-icon" /> : <ChevronDown className="faq-icon" />}
              </div>
              
              <div className="faq-answer-wrapper" style={{ height: openIndex === index ? 'auto' : '0px', overflow: 'hidden' }}>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
