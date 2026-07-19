import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo text-gradient">Cochin United</h3>
            <p className="footer-desc">
              Your trusted partner for corporate, legal, and technical solutions in Ernakulam, Kerala.
            </p>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Services</h4>
            <ul>
              <li><a href="#">Corporate Consultancy</a></li>
              <li><a href="#">Legal Services</a></li>
              <li><a href="#">Technical Installations</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <p>Ernakulam, Kerala, India</p>
            <p>Email: info@cochinunited.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Cochin United. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
