import React from 'react';
import { Search, History, ZapOff, Flame } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <Search className="w-5 h-5 text-brand-400" />,
      title: "Hiring Takes Months",
      text: "Hiring takes 2-3 months per engineer"
    },
    {
      icon: <History className="w-5 h-5 text-brand-400" />,
      title: "Roadmap Slips",
      text: "Feature roadmap slips behind investor expectations"
    },
    {
      icon: <ZapOff className="w-5 h-5 text-brand-400" />,
      title: "AI Initiatives Stall",
      text: "AI initiatives stall due to lack of execution bandwidth"
    },
    {
      icon: <Flame className="w-5 h-5 text-brand-400" />,
      title: "Rising Burn, Slow Progress",
      text: "Burn increases without meaningful product progress"
    }
  ];

  return (
    <section className="relative overflow-hidden my-24 md:my-36">
      <div className="section-container">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 blur-[120px] -z-10 pointer-events-none rounded-full"></div>

        <div className="text-center mb-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
            <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">The Problem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            After raising, <span className="text-brand-gradient">most teams hit</span> the same wall:
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Hiring is slow, burn is high, and your AI roadmap isn't moving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-1.5">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="group relative p-[1px] rounded-2xl transition-all duration-500 hover:scale-[1.02] border border-[rgba(255,107,107,0.1)] hover:border-[rgba(255,107,107,0.4)] hover:shadow-[0_0_25px_rgba(255,107,107,0.3)]"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-2xl opacity-50"></div>

              <div className="relative h-full bg-[#151216] p-8 rounded-2xl border border-white/5 flex flex-col gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{problem.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {problem.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
