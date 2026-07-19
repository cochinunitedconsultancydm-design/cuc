import React from 'react';
import { Building2, Home, Calculator, Briefcase, HardHat } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    title: 'Business Services',
    description: 'Expert guidance to navigate corporate challenges and optimize your business strategies.',
    icon: Briefcase
  },
  {
    title: 'Tax, Accounting & Financial Services',
    description: 'Comprehensive accounting, auditing, and taxation services to keep your business compliant and financially organized.',
    icon: Calculator
  },
  {
    title: 'Property & Documentation Services',
    description: 'Complete assistance for property registration, legal documentation, and verification. Ensuring every transaction is legally valid.',
    icon: Home
  },
  {
    title: 'Liaisoning Services',
    description: 'Professional support for all government-related documentation and approvals including licenses, certificates, and more.',
    icon: Building2
  },
  {
    title: 'Construction & Supervision',
    description: 'Dedicated oversight and management for construction projects, ensuring quality, safety, and timely completion.',
    icon: HardHat
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
          <p className="section-subtitle">Tailored solutions to meet the demands of modern enterprises.</p>
        </div>
        
        <div className="services-grid">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div className="service-card glass-panel" key={index}>
                <div className="service-icon">
                  <IconComponent size={36} strokeWidth={1.5} color="#f7b71b" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href="#contact" className="service-link">Learn more &rarr;</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
