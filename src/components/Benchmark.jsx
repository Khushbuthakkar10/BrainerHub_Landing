import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

export default function Benchmark() {
  const [activeTab, setActiveTab] = useState('speed');

  const speedData = {
    badge: 'Speed Benchmark',
    title: 'The traditional way costs you more than money.',
    subtitle: "Hiring cycles don't just drain capital, they drain momentum. Here's what 180+ days of delay actually costs a funded startup.",
    left: {
      label: 'Traditional Hiring Route:',
      value: '180+',
      subtext: 'Days before your AI feature ships',
      items: [
        '2-3 months recruiting pipeline',
        '1 month onboarding & tooling',
        'Scope defined while team ramps up',
        '$200k+ annual commitment locked in',
        'No delivery guarantee whatsoever'
      ]
    },
    right: {
      label: 'BarinerHub Sprint Pod:',
      value: '14',
      subtext: 'Days to a live production AI feature',
      items: [
        'Pod assembled in 3-5 days',
        'Architecture locked on Day 3',
        'Build sprint starts Day 4',
        'Fixed sprint cost, zero surprises',
        '14-day delivery guaranteed'
      ]
    }
  };

  const efficiencyData = {
    badge: 'Efficiency Benchmark',
    title: 'The hiring model is financially broken.',
    subtitle: "Before you see a single line of AI code via the hiring route, you've already spent more than our entire sprint costs. Here are the real numbers.",
    left: {
      label: 'Traditional In-House Hiring:',
      value: '$27k',
      subtext: 'Per month, per 2-3 engineers (salary alone)',
      items: [
        '$8k-$15k upfront recruiting fees',
        '$17k-$25k/month in salaries',
        'No output for 60-90 days minimum',
        'Employer NI, benefits, equipment costs',
        'No guarantee of delivery or quality'
      ]
    },
    right: {
      label: 'BarinerHub’s  Sprint Pod:',
      value: '$6k',
      subtext: 'Total for a shipped, production-ready AI feature',
      items: [
        '50% upfront, 50% on delivery only',
        'Zero recruiting or HR overhead',
        'Feature live in 14 days',
        'Zero employment liability',
        'Don’t deliver → second 50% waived'
      ]
    }
  };

  const data = activeTab === 'speed' ? speedData : efficiencyData;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
            <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">{data.badge}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            {data.title}
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            {data.subtitle}
          </p>

          {/* Tab Switcher */}
          <div className="mt-12 inline-flex p-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            <button
              onClick={() => setActiveTab('speed')}
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'speed'
                ? 'bg-brand-gradient text-white shadow-lg shadow-brand-500/20'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              Speed
            </button>
            <button
              onClick={() => setActiveTab('efficiency')}
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'efficiency'
                ? 'bg-brand-gradient text-white shadow-lg shadow-brand-500/20'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              Efficiency
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] items-center gap-8 lg:gap-0">
          {/* Left Card - Traditional */}
          <div className="glass-card rounded-3xl p-7 lg:p-10 border-white/10 bg-white/[0.02]">
            <span className="text-xs md:text-sm font-extrabold tracking-[0.2em] text-gray-500 uppercase block mb-8">
              {data.left.label}
            </span>

            <div className="relative inline-block mb-4">
              <h3 className="text-5xl lg:text-6xl font-black text-white/20 tracking-tighter italic">
                {data.left.value}
              </h3>
              <div className="absolute top-1/2 left-0 w-full h-1.5 bg-brand-500/40 -rotate-3 rounded-full"></div>
            </div>

            <p className="text-gray-400 text-xs lg:text-sm font-normal mb-10">
              {data.left.subtext}
            </p>

            <ul className="space-y-4 lg:space-y-5">
              {data.left.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 lg:gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-gray-400 text-xs lg:text-sm font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VS Divider */}
          <div className="flex flex-col items-center justify-center px-4 lg:z-20">
            <div className="w-px h-12 lg:h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            <div className="w-12 h-12 rounded-full border border-white/20 bg-dark-900 flex items-center justify-center shadow-2xl relative">
              <span className="text-[10px] font-black text-gray-500 tracking-widest italic">VS</span>
              {/* Outer Pulse */}
              <div className="absolute inset-0 rounded-full bg-brand-500/30 animate-ping opacity-20"></div>
            </div>
            <div className="w-px h-12 lg:h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* Right Card - BrainerHub */}
          <div className="relative group">
            {/* Background Glow for Premium Card */}
            <div className="absolute -inset-0.5 bg-brand-gradient rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>

            <div className="relative glass-card rounded-3xl p-7 lg:p-10 border-white/10 bg-[#0f1115]">
              <span className="text-xs md:text-sm font-extrabold tracking-[0.2em] text-brand-400 uppercase block mb-8">
                {data.right.label}
              </span>

              <h3 className="text-5xl lg:text-6xl font-black text-white tracking-tighter italic mb-4">
                {data.right.value}
              </h3>

              <p className="text-gray-300 text-xs lg:text-sm font-normal mb-10">
                {data.right.subtext}
              </p>

              <ul className="space-y-4 lg:space-y-5">
                {data.right.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 lg:gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(191,66,82,0.3)]">
                      <Check className="w-3 h-3 text-brand-400" />
                    </div>
                    <span className="text-gray-300 text-xs lg:text-sm font-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
