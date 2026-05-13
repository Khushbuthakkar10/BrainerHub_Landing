import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    days: 'DAY 0',
    title: 'Discovery Protocol',
    content: 'We analyse your product goals, stack, and sprint feasibility. We lock the exact feature scope, no gold-plating, no ambiguity, no wasted build cycles.',
    badges: ['Scoping', 'Stack Audit', 'Sprint Brief'],
    accent: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
  },
  {
    number: '02',
    days: 'DAYS 1-3',
    title: 'Architecture Mapping',
    content: 'Every data flow, integration point, and AI model call is mapped before a single line of code is written. Zero-waste execution starts here.',
    badges: ['System Design', 'API Contracts', 'Approval'],
    accent: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  },
  {
    number: '03',
    days: 'DAYS 4-11',
    title: 'High-Density Build',
    content: 'The pod ships in daily async cycles. You get staging access from Day 5, async Loom updates every 2 days — full visibility, zero micromanagement required.',
    badges: ['Daily Standups', 'Staging Access', 'AI Build'],
    accent: 'bg-brand-500/20 text-brand-400 border-brand-500/30'
  },
  {
    number: '04',
    days: 'DAYS 12-14',
    title: 'Production Handoff',
    content: 'QA, hardening, final deploy. You receive working code, full docs, and a 30-minute handover call. You own the full codebase, infrastructure, and deployment assets with no long-term dependency on us.',
    badges: ['QA & Testing', 'Docs', 'Live Deploy'],
    accent: 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }
];

export default function Protocol() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" id="protocol">
      <div className="absolute inset-0 bg-white/[0.08] backdrop-blur-sm pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[120px] bg-brand-500/[0.2] blur-[80px] pointer-events-none rounded-full" />
      <div className="section-container relative z-10">
        <div className="text-left mb-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
            <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">The Protocol</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Precision engineering. <span className="text-brand-gradient">14 days</span>, every time.
          </h2>
          <p className="text-gray-500 text-base max-w-3xl">
            We removed the parts of traditional agency delivery that usually slow execution down: excessive meetings, scope creep, and onboarding overhead. What remains is a focused delivery system built for speed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-[45px] left-0 right-0 h-[1px] bg-[rgba(255,226,226,0.10)] -z-10" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col p-6 rounded-3xl bg-[#111114] border transition-all duration-500 ${idx === 2 ? 'border-brand-500 shadow-[0_0_30px_rgba(59,130,246,0.15)]' : 'border-[rgba(255,226,226,0.08)] hover:border-brand-500/60'
                }`}
            >
              {/* Top Section: Number & Days */}
              <div className="flex items-center justify-between gap-3 mb-8">
                {/* <div className={`w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-lg border ${step.accent}`}>
                  {step.number}
                </div> */}
                <div className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider border ${step.accent}`}>
                  {step.days}
                </div>
                <span className='absolute top-5 right-6 text-5xl font-black text-white/10 select-none group-hover:text-white/6 transition-colors duration-300'>{step.number}</span>
              </div>

              {/* Title & Content */}
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-1">
                {step.content}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {step.badges.map((badge, bi) => (
                  <span
                    key={bi}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-semibold text-gray-400"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-[2rem] bg-brand-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Area */}
        <div className="mt-12 pt-10 border-t border-[rgba(255,226,226,0.10)] text-center">
          <button className="btn-primary text-base py-3 px-5 group/btn w-full sm:w-auto">
            <span>Initialise Your Sprint</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
