import React from 'react';
import './Footer.css';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Dashboard', 'API Docs', 'Changelog'],
  Company: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Contact'],
  Services: ['Weddings', 'Corporate', 'Concerts', 'Conferences', 'Festivals'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon"><i className="fas fa-bolt"></i></div>
              <span>EventAI</span>
            </div>
            <p className="footer-tagline">
              The world's most advanced AI-powered event management platform. Plan smarter, execute flawlessly.
            </p>
            <div className="footer-socials">
              {[
                { icon: 'fa-twitter', href: '#' },
                { icon: 'fa-linkedin', href: '#' },
                { icon: 'fa-instagram', href: '#' },
                { icon: 'fa-youtube', href: '#' },
                { icon: 'fa-github', href: '#' },
              ].map(s => (
                <a key={s.icon} href={s.href} className="footer-social">
                  <i className={`fab ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div className="footer-col" key={category}>
              <h4 className="footer-col-title">{category}</h4>
              <ul>
                {links.map(link => (
                  <li key={link}><a href="#" className="footer-link">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2025 EventAI. All rights reserved. Built with <i className="fas fa-heart" style={{ color: '#ec4899' }}></i> and AI.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
