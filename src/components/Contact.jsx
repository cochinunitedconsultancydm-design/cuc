import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="section-title">Get in <span className="text-gradient">Touch</span></h2>
            <p className="contact-description">
              Ready to elevate your business? Reach out to our experts for a personalized consultation tailored to your specific needs.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method glass-panel">
                <div className="contact-icon">
                  <Phone size={24} color="#f7b71b" />
                </div>
                <div className="contact-details">
                  <h3>Call Us</h3>
                  <p>+91 79941 53999</p>
                </div>
              </div>
              
              <div className="contact-method glass-panel">
                <div className="contact-icon">
                  <Mail size={24} color="#f7b71b" />
                </div>
                <div className="contact-details">
                  <h3>Email Us</h3>
                  <p>info@cochinunited.com</p>
                </div>
              </div>
              
              <div className="contact-method glass-panel">
                <div className="contact-icon">
                  <MapPin size={24} color="#f7b71b" />
                </div>
                <div className="contact-details">
                  <h3>Visit Us</h3>
                  <p>4th Floor, Mather Square, C- Block<br/>North Railway Station, Ernakulam-682018</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper glass-panel">
            <h3>Send us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" required placeholder="John Doe" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" required placeholder="john@example.com" />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select id="service" required>
                  <option value="">Select a service</option>
                  <option value="business">Business Services</option>
                  <option value="tax">Tax, Accounting & Financial Services</option>
                  <option value="property">Property & Documentation Services</option>
                  <option value="liaisoning">Liaisoning Services</option>
                  <option value="construction">Construction & Supervision</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" required placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="submit" className="btn-primary submit-btn">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
