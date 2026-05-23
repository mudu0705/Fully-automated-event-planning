import React from 'react';
import './About.css';

const benefits = [
  { icon: 'fa-clock', title: 'Saves Time', desc: 'Automate repetitive tasks and cut planning time by up to 80%.', color: '#4f8ef7' },
  { icon: 'fa-robot', title: 'Reduces Manual Work', desc: 'AI handles scheduling, ticketing, and communications automatically.', color: '#a855f7' },
  { icon: 'fa-star', title: 'Better Experience', desc: 'Personalized attendee journeys powered by intelligent recommendations.', color: '#f59e0b' },
  { icon: 'fa-bolt', title: 'Smart Automation', desc: 'End-to-end workflow automation from planning to post-event analysis.', color: '#10b981' },
  { icon: 'fa-eye', title: 'Real-Time Monitoring', desc: 'Live dashboards and instant alerts keep you in control at all times.', color: '#06b6d4' },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-visual reveal-left">
            <div className="about-illustration">
              <div className="ai-circle outer-ring"></div>
              <div className="ai-circle middle-ring"></div>
              <div className="ai-center glass-card">
                <i className="fas fa-brain"></i>
                <span>AI Core</span>
              </div>
              {['Scheduling', 'Ticketing', 'Analytics', 'Guests', 'Budget', 'Venues'].map((label, i) => (
                <div key={label} className="ai-orbit-item" style={{ '--angle': `${i * 60}deg` }}>
                  <div className="orbit-dot glass-card">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-content reveal-right">
            <div className="section-tag"><i className="fas fa-info-circle"></i> About</div>
            <h2 className="section-title">How AI Transforms <span className="gradient-text">Event Management</span></h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 32, lineHeight: 1.7 }}>
              Our AI engine processes thousands of data points to make intelligent decisions about your event — from optimal scheduling to personalized guest experiences.
            </p>
            <div className="about-benefits">
              {benefits.map(b => (
                <div className="benefit-item" key={b.title}>
                  <div className="benefit-icon" style={{ '--bc': b.color }}>
                    <i className={`fas ${b.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="benefit-title">{b.title}</h4>
                    <p className="benefit-desc">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
