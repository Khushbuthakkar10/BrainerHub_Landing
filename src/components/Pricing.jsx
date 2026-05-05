import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "AI Feature Sprint",
    description: "Launch a production-ready feature",
    price: "£7k",
    period: " – £8k",
    features: [
      "1 production feature",
      "2-3 senior engineers",
      "Delivered in 14 days",
      "Full source code ownership"
    ],
    cta: "Book a Sprint",
    featured: false
  },
  {
    name: "30-Day Velocity",
    description: "Multi-feature shipping engine",
    price: "£13k",
    period: " – £17k",
    features: [
      "2-4 core features",
      "Weekly releases",
      "Larger pod",
      "Advanced AI architecture",
      "Dedicated Project Manager"
    ],
    cta: "Start 30-Day Sprint",
    featured: true,
    badge: "Most Popular"
  },
  {
    name: "Dedicated AI Pod",
    description: "Your long-term AI partner",
    price: "Custom",
    period: "",
    features: [
      "Ongoing development",
      "Weekly shipping cycles",
      "Fully managed team",
      "Custom security compliance",
    ],
    cta: "Build My Pod",
    featured: false
  }
];

export default function Pricing() {
  return (
    <section className="relative my-24 md:my-36" id='pricing'>
      <div className="section-container">
        <div className="text-center mb-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
            <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Simple, <span className="text-brand-gradient">fixed sprint</span> pricing
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            High-impact delivery — without full-time hiring costs. <br />
            Hiring 2-3 senior engineers in the UK typically costs £18k-£30k per month and takes months to deliver.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 ">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card group ${plan.featured ? 'pricing-card-featured z-10' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-gradient text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-1 md:mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-extrabold text-white">{plan.price}</span>
                {plan.period && <span className="text-gray-500 font-medium">{plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className={`w-4 h-4 text-[#ff6b6b]`} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-5 rounded-xl font-bold transition-all duration-300 ${plan.featured
                ? 'bg-brand-gradient text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02]'
                : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
