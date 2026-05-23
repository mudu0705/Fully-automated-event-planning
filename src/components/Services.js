import React from 'react';
import './Services.css';

const services = [
  { icon: 'fa-heart', title: 'Wedding Events', desc: 'Magical weddings planned to perfection with AI-curated vendors and timelines.', color: '#ec4899', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80' },
  { icon: 'fa-briefcase', title: 'Corporate Events', desc: 'Professional corporate gatherings with seamless logistics and branding.', color: '#4f8ef7', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80' },
  { icon: 'fa-graduation-cap', title: 'College Festivals', desc: 'High-energy campus events with automated registrations and schedules.', color: '#f59e0b', img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&q=80' },
  { icon: 'fa-music', title: 'Concerts & Shows', desc: 'Large-scale entertainment events with smart crowd and ticketing management.', color: '#a855f7', img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80' },
  { icon: 'fa-microphone', title: 'Conferences', desc: 'Multi-track conferences with AI-powered session scheduling and networking.', color: '#06b6d4', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80' },
  { icon: 'fa-birthday-cake', title: 'Birthday Events', desc: 'Personalized birthday celebrations with custom themes and guest experiences.', color: '#10b981', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80' },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag"><i className="fas fa-concierge-bell"></i> Services</div>
          <h2 className="section-title">Events We <span className="gradient-text">Specialize In</span></h2>
          <p className="section-subtitle">From intimate gatherings to massive concerts — our AI adapts to every event type.</p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card reveal" key={s.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="service-img-wrap">
                <img src={s.img} alt={s.title} className="service-img" loading="lazy" />
                <div className="service-overlay"></div>
                <div className="service-icon-badge" style={{ '--sc': s.color }}>
                  <i className={`fas ${s.icon}`}></i>
                </div>
              </div>
              <div className="service-body">
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <button className="service-btn" style={{ '--sc': s.color }}>
                  Learn More <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
