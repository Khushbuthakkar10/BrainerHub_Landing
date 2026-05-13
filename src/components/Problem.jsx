import React from 'react';
import { UserX, Map, Gauge, TrendingDown } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <UserX className="w-5 h-5 text-brand-400" />,
      sysId: 'SYS-L01',
      title: 'Hiring Entropy',
      text: 'Hiring even one AI engineer can take 2-3 months of sourcing, screening, and interviews before product work even begins.',
      stats: [
        { label: 'Time Lost: ', value: '60-90 Days' },
        { label: 'Recruiting Cost: ', value: '$8k-$15k' },
      ],
      glow: 'rgba(191,66,82,0.22)',
      shimmer: 'from-brand-500/20',
      tag: '01',
    },
    {
      icon: <Map className="w-5 h-5 text-brand-400" />,
      sysId: 'SYS-L02',
      title: 'Roadmap Decay',
      text: "Roadmaps start slipping the moment hiring delays begin stacking up. While hiring drags on, competitors continue shipping and gaining market share.",
      stats: [
        { label: 'Roadmap Slip:', value: 'Unstable' },
        { label: 'Investor Trust:', value: 'Erodes Fast' },
      ],
      glow: 'rgba(255,139,40,0.2)',
      shimmer: 'from-orange-500/15',
      tag: '02',
    },
    {
      icon: <Gauge className="w-5 h-5 text-brand-400" />,
      sysId: 'SYS-L03',
      title: 'Velocity Drag',
      text: 'Recruiting an in-house AI team requires 3+ months of lead time and £200k+ in annual overhead before the first feature ships.',
      stats: [
        { label: 'Velocity Loss:', value: 'Months' },
        { label: 'Annual Overhead:', value: '£200k+' },
      ],
      glow: 'rgba(191,66,82,0.22)',
      shimmer: 'from-brand-500/15',
      tag: '03',
    },
    {
      icon: <TrendingDown className="w-5 h-5 text-brand-400" />,
      sysId: 'SYS-L04',
      title: 'Growth Stagnation',
      text: 'Burn increases with every week of inaction. By the time you launch, the AI landscape has shifted and your competitors have already captured the market moat.',
      stats: [
        { label: 'Market Impact:', value: 'Momentum Kill' },
        { label: 'Runway Burn:', value: 'Wasted' },
      ],
      glow: 'rgba(255,80,60,0.2)',
      shimmer: 'from-red-500/15',
      tag: '04',
    },
  ];

  return (
    <section className="relative overflow-hidden my-24 md:my-36">
      <div className="section-container">

        <div className="text-center mb-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
            <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">The Old Broken Way</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            After raising, <span className="text-brand-gradient">most teams hit</span> the same wall:
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            We've studied 100+ stalled AI initiatives to understand exactly where execution breaks down. The pattern is always the same.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6 pb-1.5">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden p-[1px] rounded-3xl transition-all duration-500 hover:scale-[1.02] border border-[rgba(255,226,226,0.12)] hover:border-[rgba(255,107,107,0.4)] hover:shadow-[0_0_25px_rgba(255,107,107,0.3)]">
              {/* Card body */}

              {/* Animated bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-full bg-brand-gradient transition-all duration-500 rounded-b-[1.75rem]" />

              {/* ── Top: icon + badge ── */}
              <div className="flex items-center justify-between px-6 pt-6 pb-5">
                {/* Icon badge */}
                <div className="w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20 group-hover:border-brand-500/40 group-hover:scale-110 transition-all duration-300">
                  {problem.icon}
                </div>

                {/* Alert badge */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse shrink-0" />
                  <span className="text-[10px] font-bold text-brand-400 tracking-widest uppercase whitespace-nowrap">
                    {problem.sysId} · Leak Detected
                  </span>
                </div>
              </div>

              {/* ── Middle: title + description ── */}
              <div className="px-6 pb-6 flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight italic leading-tight">
                  {problem.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-400 transition-colors duration-300">
                  {problem.text}
                </p>
              </div>

              {/* ── Bottom: stats row ── */}
              <div className="grid grid-cols-2 border-t border-[rgba(255,226,226,0.12)]">
                {problem.stats.map((stat, si) => (
                  <div
                    key={si}
                    className={`px-6 py-5 flex flex-col gap-1 ${si === 0 ? 'border-r border-[rgba(255,226,226,0.12)]' : ''}`}
                  >
                    <span className="text-[10px] font-bold text-gray-600 tracking-widest uppercase">
                      {stat.label}
                    </span>
                    <span className="text-sm md:text-base font-medium text-white tracking-tight leading-tight">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
