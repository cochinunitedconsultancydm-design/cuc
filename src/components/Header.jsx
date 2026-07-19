import React, { useState, useEffect } from 'react';
import './Header.css';
import logoImg from '../assets/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="/" className="logo">
          <img src={logoImg} alt="Cochin United" className="logo-img" />
        </a>
        
        <nav className={`desktop-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About us</a>
          <a href="#services" className="nav-link">Services +</a>
          <a href="#careers" className="nav-link">Careers</a>
          <a href="#blogs" className="nav-link">Blogs</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#contact" className="nav-link">Contact us</a>
        </nav>
        
        <div className="header-right">
          <a href="#contact" className="btn-primary header-cta">Enquire Now &rarr;</a>
          
          <button 
            className={`mobile-toggle ${isMenuOpen ? 'open' : ''}`} 
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
