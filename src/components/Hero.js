import React, { useState, useEffect } from 'react';
import './Hero.css';

const typingWords = ['Weddings', 'Conferences', 'Concerts', 'Festivals', 'Galas', 'Summits'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[wordIndex];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 100);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 60);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex(i => (i + 1) % typingWords.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      <div className="hero-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="container hero-inner">
        <div className="hero-content animate-fade-up">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>AI-Powered Platform · Now Live</span>
          </div>

          <h1 className="hero-title">
            Fully Automated<br />
            <span className="gradient-text">Event Planning</span><br />
            for <span className="typing-word">{displayed}<span className="cursor">|</span></span>
          </h1>

          <p className="hero-subtitle">
            Plan, manage, and automate events using cutting-edge AI technology.
            From invitations to analytics — everything runs on autopilot.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
              <i className="fas fa-rocket"></i> Get Started Free
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('features')}>
              <i className="fas fa-play-circle"></i> Explore Features
            </button>
          </div>

          <div className="hero-stats">
            {[['10K+', 'Events Managed'], ['99.9%', 'Uptime'], ['4.9★', 'Rating']].map(([val, label]) => (
              <div className="hero-stat" key={label}>
                <span className="stat-val gradient-text">{val}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-main glass-card animate-float">
            <div className="hc-header">
              <div className="hc-dots"><span></span><span></span><span></span></div>
              <span className="hc-title">AI Event Dashboard</span>
              <span className="hc-live"><span className="live-dot"></span>Live</span>
            </div>
            <div className="hc-metrics">
              {[
                { icon: 'fa-users', label: 'Guests', val: '2,847', color: '#4f8ef7' },
                { icon: 'fa-ticket', label: 'Tickets', val: '1,923', color: '#a855f7' },
                { icon: 'fa-dollar-sign', label: 'Revenue', val: '$48.2K', color: '#06b6d4' },
                { icon: 'fa-calendar', label: 'Events', val: '12', color: '#10b981' },
              ].map(m => (
                <div className="hc-metric" key={m.label} style={{ '--mc': m.color }}>
                  <div className="hc-metric-icon"><i className={`fas ${m.icon}`}></i></div>
                  <div>
                    <div className="hc-metric-val">{m.val}</div>
                    <div className="hc-metric-label">{m.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hc-ai-bar">
              <i className="fas fa-brain"></i>
              <span>AI Suggestion: Increase capacity by 15% for next event</span>
            </div>
            <div className="hc-chart">
              {[65, 80, 55, 90, 70, 95, 75].map((h, i) => (
                <div key={i} className="hc-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
          </div>

          <div className="hero-float-card fc-1 glass-card">
            <i className="fas fa-check-circle" style={{ color: '#10b981' }}></i>
            <span>Event Created Successfully</span>
          </div>
          <div className="hero-float-card fc-2 glass-card">
            <i className="fas fa-qrcode" style={{ color: '#a855f7' }}></i>
            <span>QR Check-In Active</span>
          </div>
          <div className="hero-float-card fc-3 glass-card">
            <i className="fas fa-robot" style={{ color: '#4f8ef7' }}></i>
            <span>AI Planning...</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint" onClick={() => scrollTo('features')}>
        <div className="scroll-mouse"><div className="scroll-wheel"></div></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
