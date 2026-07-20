import React from 'react';
import { Users, Briefcase, Award, ShieldCheck } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  return (
    <div className="stats-grid">
      <div className="stat-card glass-panel animate-fade-in-up delay-100">
        <div className="stat-icon-large"><Users size={32} /></div>
        <div className="stat-details">
          <h3>1000+</h3>
          <p>Happy Clients</p>
        </div>
      </div>
      
      <div className="stat-card glass-panel animate-fade-in-up delay-200">
        <div className="stat-icon-large"><Briefcase size={32} /></div>
        <div className="stat-details">
          <h3>200+</h3>
          <p>Services Offered</p>
        </div>
      </div>
      
      <div className="stat-card glass-panel animate-fade-in-up delay-300">
        <div className="stat-icon-large"><Award size={32} /></div>
        <div className="stat-details">
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>
      </div>
      
      <div className="stat-card glass-panel animate-fade-in-up delay-400">
        <div className="stat-icon-large"><ShieldCheck size={32} /></div>
        <div className="stat-details">
          <h3>100%</h3>
          <p>Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
