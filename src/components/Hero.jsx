import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';
import logoImg from '../assets/logo.png';
import Stats from './Stats';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <img src={heroBg} alt="Premium Background" className="hero-bg-image" />
      <div className="hero-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-logo-wrapper animate-fade-in-up">
            <img src={logoImg} alt="CUC Logo" className="hero-content-logo" />
            <div className="hero-logo-text text-gradient">Consultancy</div>
          </div>
          <h1 className="hero-title animate-fade-in-up">
            Your Trusted Consultancy Services for <span className="text-gradient">Individuals, Startups and Businesses</span>
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
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
