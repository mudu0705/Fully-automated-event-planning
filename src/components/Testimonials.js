import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Sarah Johnson', role: 'Wedding Planner', company: 'Bloom Events',
    avatar: 'https://i.pravatar.cc/80?img=47',
    text: 'EventAI completely transformed how I manage weddings. The AI scheduling saved me 20+ hours per event and my clients love the seamless experience.',
    rating: 5,
  },
  {
    name: 'Marcus Chen', role: 'Corporate Events Manager', company: 'TechCorp Inc.',
    avatar: 'https://i.pravatar.cc/80?img=12',
    text: 'We ran our annual summit with 3,000 attendees using EventAI. The automated ticketing and QR check-in was flawless. Zero queues, zero issues.',
    rating: 5,
  },
  {
    name: 'Priya Sharma', role: 'Festival Director', company: 'Campus Vibes',
    avatar: 'https://i.pravatar.cc/80?img=45',
    text: 'The AI budget planning feature alone saved us $15,000 on our college festival. The analytics dashboard gave us insights we never had before.',
    rating: 5,
  },
  {
    name: 'David Williams', role: 'Concert Promoter', company: 'SoundWave Events',
    avatar: 'https://i.pravatar.cc/80?img=33',
    text: 'Managing 10,000+ ticket sales used to be a nightmare. EventAI handles everything automatically. Revenue is up 40% since we switched.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag"><i className="fas fa-quote-left"></i> Testimonials</div>
          <h2 className="section-title">Loved by <span className="gradient-text">Event Professionals</span></h2>
          <p className="section-subtitle">Join thousands of event planners who trust EventAI to deliver perfect events.</p>
        </div>

        <div className="testimonials-grid reveal">
          {testimonials.map((t, i) => (
            <div className={`testimonial-card glass-card ${i === active ? 'featured' : ''}`} key={t.name} onClick={() => setActive(i)}>
              <div className="tcard-stars">
                {Array(t.rating).fill(0).map((_, j) => <i key={j} className="fas fa-star"></i>)}
              </div>
              <p className="tcard-text">"{t.text}"</p>
              <div className="tcard-author">
                <img src={t.avatar} alt={t.name} className="tcard-avatar" />
                <div>
                  <div className="tcard-name">{t.name}</div>
                  <div className="tcard-role">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-dots reveal">
          {testimonials.map((_, i) => (
            <button key={i} className={`tdot ${i === active ? 'active' : ''}`} onClick={() => setActive(i)}></button>
          ))}
        </div>
      </div>
    </section>
  );
}
