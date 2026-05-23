import React from 'react';
import './Features.css';

const features = [
  { icon: 'fa-calendar-check', title: 'AI Event Scheduling', desc: 'Smart scheduling that finds the perfect time slots using AI analysis of attendee availability.', color: '#4f8ef7' },
  { icon: 'fa-ticket', title: 'Automated Ticketing', desc: 'Fully automated ticket generation, distribution, and validation with QR codes.', color: '#a855f7' },
  { icon: 'fa-users', title: 'Smart Guest Management', desc: 'AI-powered guest list management with automated RSVP tracking and reminders.', color: '#06b6d4' },
  { icon: 'fa-wallet', title: 'AI Budget Planning', desc: 'Intelligent budget allocation and cost optimization powered by machine learning.', color: '#10b981' },
  { icon: 'fa-bell', title: 'Real-Time Notifications', desc: 'Instant alerts and updates for organizers and attendees across all channels.', color: '#f59e0b' },
  { icon: 'fa-map-marker-alt', title: 'Venue Recommendation', desc: 'AI suggests the best venues based on event type, capacity, and budget.', color: '#ef4444' },
  { icon: 'fa-qrcode', title: 'QR Code Entry System', desc: 'Contactless check-in with dynamic QR codes and real-time attendance tracking.', color: '#8b5cf6' },
  { icon: 'fa-chart-line', title: 'Analytics Dashboard', desc: 'Comprehensive post-event analytics with AI-generated insights and reports.', color: '#ec4899' },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag"><i className="fas fa-sparkles"></i> Features</div>
          <h2 className="section-title">Everything You Need to <span className="gradient-text">Run Perfect Events</span></h2>
          <p className="section-subtitle">Powered by AI, designed for humans. Our platform handles every detail so you can focus on what matters.</p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card glass-card reveal" key={f.title} style={{ animationDelay: `${i * 0.1}s`, transitionDelay: `${i * 0.08}s` }}>
              <div className="feature-icon" style={{ '--fc': f.color }}>
                <i className={`fas ${f.icon}`}></i>
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
              <div className="feature-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
