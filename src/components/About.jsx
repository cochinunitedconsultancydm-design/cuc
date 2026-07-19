import React from 'react';
import './About.css';
import aboutImg from '../assets/about-image.png';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image glass-panel">
              <img src={aboutImg} alt="Corporate Consultancy" className="about-img" />
            </div>
            <div className="experience-badge glass-panel">
              <span className="years">Premium</span>
              <span className="text">Quality Services</span>
            </div>
          </div>
          
          <div className="about-content">
            <h2 className="section-title">Strategic Consultancy. <br/><span className="text-gradient">Trusted Support.</span></h2>
            <p className="about-description">
              At Cochin United Consultancy, we believe in integrity, client trust, and professional excellence. Our commitment is to build long-term client relationships through transparent guidance, personalized advisory support, and timely service delivery.
            </p>
            <p className="about-description">
              From documentation assistance and business registrations to compliance management and licensing support, our team ensures every process is handled accurately, efficiently, and with complete professionalism.
            </p>
            
            <ul className="about-list">
              <li>✓ 500+ Happy Clients</li>
              <li>✓ 500+ Property & Documentation Cases</li>
              <li>✓ 1000+ Successful Registrations & Filings</li>
            </ul>
            
            <a href="#contact" className="btn-primary mt-4">Connect With Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
