import React from 'react';
import './Workflow.css';

const steps = [
  { icon: 'fa-plus-circle', title: 'Create Event', desc: 'Set your event details, date, and requirements in minutes.', color: '#4f8ef7' },
  { icon: 'fa-brain', title: 'AI Plans Everything', desc: 'Our AI engine generates a complete event plan automatically.', color: '#a855f7' },
  { icon: 'fa-envelope', title: 'Send Invitations', desc: 'Personalized invitations sent to all guests automatically.', color: '#06b6d4' },
  { icon: 'fa-ticket', title: 'Automated Ticketing', desc: 'Tickets generated and distributed with QR codes instantly.', color: '#10b981' },
  { icon: 'fa-qrcode', title: 'Guest Check-In', desc: 'Seamless contactless check-in with real-time tracking.', color: '#f59e0b' },
  { icon: 'fa-chart-pie', title: 'Event Analytics', desc: 'Comprehensive reports and AI insights delivered post-event.', color: '#ec4899' },
];

export default function Workflow() {
  return (
    <section className="section workflow-section" id="workflow">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag"><i className="fas fa-sitemap"></i> How It Works</div>
          <h2 className="section-title">From Idea to <span className="gradient-text">Flawless Execution</span></h2>
          <p className="section-subtitle">Six simple steps powered by AI to make your event a success.</p>
        </div>

        <div className="workflow-timeline">
          <div className="timeline-line"></div>
          {steps.map((step, i) => (
            <div className={`workflow-step ${i % 2 === 0 ? 'left' : 'right'} reveal`} key={step.title} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="step-card glass-card">
                <div className="step-icon" style={{ '--sc': step.color }}>
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
              <div className="step-connector" style={{ '--sc': step.color }}>
                <div className="connector-dot"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
