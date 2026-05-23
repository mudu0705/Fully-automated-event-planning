import React, { useState } from 'react';
import './Dashboard.css';

const suggestions = [
  'Increase venue capacity by 15% for better ROI',
  'Send reminder emails 48 hours before event',
  'Add VIP lounge to boost ticket revenue by 22%',
  'Optimize check-in flow to reduce wait time',
];

const events = [
  { name: 'Tech Summit 2025', date: 'Jun 15', status: 'live', guests: 842 },
  { name: 'Annual Gala Night', date: 'Jun 22', status: 'upcoming', guests: 320 },
  { name: 'Product Launch', date: 'Jul 3', status: 'upcoming', guests: 150 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="section dashboard-section" id="dashboard">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag"><i className="fas fa-tachometer-alt"></i> Dashboard</div>
          <h2 className="section-title">Your AI <span className="gradient-text">Command Center</span></h2>
          <p className="section-subtitle">Real-time insights and AI-powered suggestions at your fingertips.</p>
        </div>

        <div className="dashboard-ui glass-card reveal">
          <div className="dash-sidebar">
            <div className="dash-logo"><i className="fas fa-bolt"></i> EventAI</div>
            {[
              { icon: 'fa-th-large', label: 'Overview', id: 'overview' },
              { icon: 'fa-calendar', label: 'Events', id: 'events' },
              { icon: 'fa-users', label: 'Guests', id: 'guests' },
              { icon: 'fa-chart-bar', label: 'Analytics', id: 'analytics' },
              { icon: 'fa-cog', label: 'Settings', id: 'settings' },
            ].map(item => (
              <button key={item.id} className={`dash-nav-item ${activeTab === item.id ? 'active' : ''}`} onClick={() => setActiveTab(item.id)}>
                <i className={`fas ${item.icon}`}></i>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="dash-main">
            <div className="dash-topbar">
              <div>
                <h3 className="dash-page-title">Overview</h3>
                <p className="dash-page-sub">Welcome back, Admin</p>
              </div>
              <div className="dash-topbar-actions">
                <div className="dash-search">
                  <i className="fas fa-search"></i>
                  <input placeholder="Search events..." readOnly />
                </div>
                <div className="dash-avatar">A</div>
              </div>
            </div>

            <div className="dash-metrics">
              {[
                { label: 'Total Guests', val: '12,847', icon: 'fa-users', change: '+12%', color: '#4f8ef7' },
                { label: 'Tickets Sold', val: '9,234', icon: 'fa-ticket', change: '+8%', color: '#a855f7' },
                { label: 'Revenue', val: '$284K', icon: 'fa-dollar-sign', change: '+24%', color: '#10b981' },
                { label: 'Upcoming', val: '7', icon: 'fa-calendar', change: '+3', color: '#f59e0b' },
              ].map(m => (
                <div className="dash-metric-card" key={m.label} style={{ '--mc': m.color }}>
                  <div className="dmc-icon"><i className={`fas ${m.icon}`}></i></div>
                  <div className="dmc-val">{m.val}</div>
                  <div className="dmc-label">{m.label}</div>
                  <div className="dmc-change"><i className="fas fa-arrow-up"></i> {m.change}</div>
                </div>
              ))}
            </div>

            <div className="dash-bottom">
              <div className="dash-events-panel">
                <h4 className="dash-panel-title"><i className="fas fa-calendar-alt"></i> Live & Upcoming Events</h4>
                {events.map(e => (
                  <div className="dash-event-row" key={e.name}>
                    <div className={`event-status-dot ${e.status}`}></div>
                    <div className="event-info">
                      <span className="event-name">{e.name}</span>
                      <span className="event-date">{e.date}</span>
                    </div>
                    <div className="event-guests"><i className="fas fa-user"></i> {e.guests}</div>
                    <span className={`event-badge ${e.status}`}>{e.status}</span>
                  </div>
                ))}
              </div>

              <div className="dash-ai-panel">
                <h4 className="dash-panel-title"><i className="fas fa-brain"></i> AI Suggestions</h4>
                {suggestions.map((s, i) => (
                  <div className="ai-suggestion" key={i}>
                    <div className="ai-sug-icon"><i className="fas fa-lightbulb"></i></div>
                    <p>{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
