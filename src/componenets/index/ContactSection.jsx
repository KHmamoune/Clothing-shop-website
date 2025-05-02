import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Clock } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contacter Nous</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <Phone className="contact-icon" />
          <h3>Numero Telephone</h3>
          <p>Service client: (+213) 5-89-32-78-54</p>
          <p>Chaque jour: 9:00 - 19:00 GMT</p>
        </div>

        <div className="contact-card">
          <Mail className="contact-icon" />
          <h3>Notre Email</h3>
          <p>Customer Service: <a>cozyfit@fashion.com</a></p>
        </div>

        <div className="contact-card">
          <MapPin className="contact-icon" />
          <h3>Visite Nous</h3>
          <p>Avenue Emir Abdelkadar, Jijle</p>
        </div>

        <div className="contact-card">
          <Clock className="contact-icon" />
          <h3>Les Heures de Travail</h3>
          <p>Samedi - Jeudi: 9:00 - 19:00</p>
          <p>Vendredi: 9:00 - 12:00</p>
        </div>
      </div>

      <div className="social-section">
        <h3>Suivi Nous</h3>
        <div className="social-icons">
          <a className="social-link" aria-label="Instagram"> <Instagram /> </a>
          <a className="social-link" aria-label="Facebook"> <Facebook /> </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
