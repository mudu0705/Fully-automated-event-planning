import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag"><i className="fas fa-envelope"></i> Contact</div>
          <h2 className="section-title">Let's <span className="gradient-text">Get Started</span></h2>
          <p className="section-subtitle">Ready to automate your events? Reach out and we'll get back to you within 24 hours.</p>
        </div>

        <div className="contact-inner">
          <div className="contact-info reveal-left">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-sub">Have questions? Our team is here to help you plan your perfect event.</p>

            {[
              { icon: 'fa-envelope', label: 'Email', val: 'hello@eventai.com', color: '#4f8ef7' },
              { icon: 'fa-phone', label: 'Phone', val: '+1 (555) 123-4567', color: '#a855f7' },
              { icon: 'fa-map-marker-alt', label: 'Office', val: '123 AI Boulevard, San Francisco, CA', color: '#06b6d4' },
            ].map(c => (
              <div className="contact-detail" key={c.label}>
                <div className="contact-detail-icon" style={{ '--cc': c.color }}>
                  <i className={`fas ${c.icon}`}></i>
                </div>
                <div>
                  <div className="contact-detail-label">{c.label}</div>
                  <div className="contact-detail-val">{c.val}</div>
                </div>
              </div>
            ))}

            <div className="social-links">
              {[
                { icon: 'fa-twitter', color: '#1da1f2', href: '#' },
                { icon: 'fa-linkedin', color: '#0077b5', href: '#' },
                { icon: 'fa-instagram', color: '#e1306c', href: '#' },
                { icon: 'fa-github', color: '#fff', href: '#' },
              ].map(s => (
                <a key={s.icon} href={s.href} className="social-link" style={{ '--sc': s.color }}>
                  <i className={`fab ${s.icon}`}></i>
                </a>
              ))}
            </div>

            <div className="map-placeholder glass-card">
              <i className="fas fa-map-marked-alt"></i>
              <span>San Francisco, CA</span>
              <p>123 AI Boulevard, Suite 400</p>
            </div>
          </div>

          <div className="contact-form-wrap glass-card reveal-right">
            {sent ? (
              <div className="form-success">
                <div className="success-icon"><i className="fas fa-check"></i></div>
                <h3>Message Sent!</h3>
                <p>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">Send a Message</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="How can we help?" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="5" placeholder="Tell us about your event..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
