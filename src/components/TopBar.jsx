import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container topbar-container">
        <div className="topbar-announcement">
          <p>Cochin United Consultancy — Your Trusted Partner for Business & Documentation Services in Kerala</p>
        </div>
        <div className="topbar-contact">
          <div className="contact-item">
            <Phone size={16} color="#f7b71b" />
            <div className="contact-text">
              <span className="contact-label">Contact for Support</span>
              <span className="contact-value">+91 79941 53999</span>
            </div>
          </div>
          <div className="contact-divider"></div>
          <div className="contact-item">
            <MapPin size={16} color="#f7b71b" />
            <div className="contact-text">
              <span className="contact-label">4th Floor, Mather Square, C- Block</span>
              <span className="contact-value">North Railway Station, Ernakulam-682018</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
