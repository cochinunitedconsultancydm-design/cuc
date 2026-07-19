import React from 'react';
import { Users, Briefcase, Award, ShieldCheck } from 'lucide-react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <img src={heroBg} alt="Premium Background" className="hero-bg-image" />
      <div className="hero-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in-up">
            Consultancy & Services for <span className="text-gradient">Individuals & Businesses</span>
          </h1>
          <p className="hero-subtitle animate-fade-in-up delay-100">
            Expert documentation, business registrations, and compliance planning tailored for your success.
          </p>
          <div className="hero-cta animate-fade-in-up delay-200">
            <a href="#services" className="btn-primary">Explore Services</a>
            <a href="#about" className="btn-outline">Who We Are</a>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat-box glass-panel animate-fade-in-up delay-100">
            <div className="stat-icon"><Users size={28} /></div>
            <div className="stat-info">
              <h4>1000+</h4>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="stat-box glass-panel animate-fade-in-up delay-200">
            <div className="stat-icon"><Briefcase size={28} /></div>
            <div className="stat-info">
              <h4>200+</h4>
              <p>Services Offered</p>
            </div>
          </div>
          <div className="stat-box glass-panel animate-fade-in-up delay-300">
            <div className="stat-icon"><Award size={28} /></div>
            <div className="stat-info">
              <h4>10+</h4>
              <p>Years Experience</p>
            </div>
          </div>
          <div className="stat-box glass-panel animate-fade-in-up delay-400">
            <div className="stat-icon"><ShieldCheck size={28} /></div>
            <div className="stat-info">
              <h4>100%</h4>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
