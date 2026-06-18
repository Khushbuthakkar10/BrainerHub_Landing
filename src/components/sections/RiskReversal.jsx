import React from 'react';
import { Lock, User, Shield, Zap } from 'lucide-react';

const riskFactors = [
  {
    id: "01",
    title: "Zero Lock-In",
    description: "No retainers. No minimum terms. No \"you must use us for 3 months\" clauses. Each sprint is a standalone engagement - you decide if you want more.",
    icon: Lock,
    footer: [
      { label: "Contract Length: ", value: "Sprint Only" },
      { label: "Minimum Term: ", value: "None" }
    ]
  },
  {
    id: "02",
    title: "No Headcount Risk",
    description: "You're not hiring anyone. No probation periods, no employment law exposure, no HR overhead. The pod deploys and disbands:  clean, simple, zero liability on your end.",
    icon: User,
    footer: [
      { label: "Hiring Exposure:", value: "$0" },
      { label: "HR Overhead:", value: "None" }
    ]
  },
  {
    id: "03",
    title: "Delivery or Free",
    description: "If we don't ship a production-ready feature by Day 14, the second 50% is waived. We keep working at zero cost until it’s done - no excuses, no renegotiation, ever.",
    icon: Shield,
    footer: [
      { label: "Miss Deadline: We Work Free", value: "We Work Free" },
      { label: "Your Max Exposure: 50% Only", value: "50% Max" }
    ]
  },
  {
    id: "04",
    title: "Start Without Friction",
    description: "From feasibility call to sprint kickoff, the process is designed to move fast without operational drag.",
    icon: Zap,
    footer: [
      { label: "Sprint Start:", value: "3-5 Days" },
      { label: "Meetings Required:", value: "Minimal" }
    ]
  }
];

export default function RiskReversal() {
  return (
    <section className="relative z-10 my-24 md:my-36" id="risk-reversal">
      <div className="section-container">
        {/* Header */}
        <div className="text-left mb-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
            <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">Zero-Risk Start</span>
          </div>
          <h2 className="text-4xl md:text-5xl max-w-3xl font-extrabold tracking-tight text-white mb-3">
            Every reason to move forward. <span className="text-brand-gradient">Zero reasons</span> to hesitate.
          </h2>
          <p className="text-gray-400 text-base max-w-2xl">
            Our model is built to eliminate every possible objection. We absorb the risk so your team doesn’t have to.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {riskFactors.map((factor) => {
            const Icon = factor.icon;
            return (
              <div
                key={factor.id}
                className="group relative flex flex-col bg-[#0f1115] border border-[rgba(255,226,226,0.12)] rounded-3xl overflow-hidden hover:border-[rgba(255,107,107,0.4)] hover:shadow-[0_0_25px_rgba(255,107,107,0.3)] hover:bg-[#15181e] transition-all duration-300"
              >
                {/* Card Body */}
                <div className="p-6 pb-8">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20 group-hover:border-brand-500/40 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/25">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse shrink-0" />
                      <span className="text-[10px] font-bold text-brand-400 tracking-widest uppercase whitespace-nowrap">
                        GUARD-{factor.id} • PROTECTED
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight italic leading-tight">
                    {factor.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-400 transition-colors duration-300">
                    {factor.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="grid grid-cols-2 border-t border-[rgba(255,226,226,0.12)]">
                  {factor.footer.map((stat, i) => (
                    <div key={i} className={`px-6 py-5 flex flex-col gap-1 ${i === 0 ? 'border-r border-[rgba(255,226,226,0.12)]' : ''}`}>
                      <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                        {stat.label}
                      </span>
                      <div className="text-sm md:text-base font-medium text-white tracking-tight leading-tight">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
