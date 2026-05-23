import React, { useState } from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Basic', price: { monthly: 29, yearly: 19 }, color: '#4f8ef7',
    desc: 'Perfect for small events and individual planners.',
    features: ['Up to 5 events/month', '500 guests per event', 'Basic AI scheduling', 'Email notifications', 'QR check-in', 'Basic analytics'],
    cta: 'Start Free Trial',
  },
  {
    name: 'Pro', price: { monthly: 79, yearly: 59 }, color: '#a855f7', popular: true,
    desc: 'For professional event planners and growing teams.',
    features: ['Unlimited events', '5,000 guests per event', 'Advanced AI planning', 'All notification channels', 'Smart guest management', 'AI budget optimizer', 'Venue recommendations', 'Advanced analytics'],
    cta: 'Get Pro',
  },
  {
    name: 'Enterprise', price: { monthly: 199, yearly: 149 }, color: '#06b6d4',
    desc: 'For large organizations and enterprise-scale events.',
    features: ['Unlimited everything', 'Unlimited guests', 'Custom AI models', 'Dedicated support', 'White-label solution', 'API access', 'Custom integrations', 'SLA guarantee', 'Admin dashboard'],
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag"><i className="fas fa-tag"></i> Pricing</div>
          <h2 className="section-title">Simple, <span className="gradient-text">Transparent Pricing</span></h2>
          <p className="section-subtitle">No hidden fees. Scale as you grow. Cancel anytime.</p>
        </div>

        <div className="pricing-toggle reveal">
          <span className={!yearly ? 'active' : ''}>Monthly</span>
          <button className={`toggle-btn ${yearly ? 'on' : ''}`} onClick={() => setYearly(y => !y)}>
            <div className="toggle-thumb"></div>
          </button>
          <span className={yearly ? 'active' : ''}>Yearly <span className="save-badge">Save 30%</span></span>
        </div>

        <div className="pricing-grid reveal">
          {plans.map(plan => (
            <div className={`pricing-card glass-card ${plan.popular ? 'popular' : ''}`} key={plan.name} style={{ '--pc': plan.color }}>
              {plan.popular && <div className="popular-badge"><i className="fas fa-crown"></i> Most Popular</div>}
              <div className="plan-header">
                <div className="plan-icon"><i className="fas fa-bolt"></i></div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.desc}</p>
                <div className="plan-price">
                  <span className="price-currency">$</span>
                  <span className="price-val">{yearly ? plan.price.yearly : plan.price.monthly}</span>
                  <span className="price-period">/mo</span>
                </div>
              </div>
              <ul className="plan-features">
                {plan.features.map(f => (
                  <li key={f}><i className="fas fa-check"></i> {f}</li>
                ))}
              </ul>
              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} plan-cta`}>
                {plan.cta} <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
