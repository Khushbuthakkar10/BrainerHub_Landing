import React from 'react';
import { ArrowRight } from 'lucide-react';

const timeline = [
  {
    week: "Week 1:  Days 1-7",
    milestones: "Discovery · Architecture · Build Kick-off",
    progress: 50,
    progressColor: "from-brand-500 to-orange-500",
    percentageColor: "text-brand-400",
    phases: [
      { label: "Day 0 - Discovery call", status: "complete" },
      { label: "Days 1-3 - Architecture locked", status: "complete" },
      { label: "Days 4-7 - Build sprint begins", status: "active" },
      { label: "Staging env live", status: "future" }
    ]
  },
  {
    week: "Week 2 - Days 8-14",
    milestones: "High-Density Build · QA · Production Deploy",
    progress: 100,
    progressColor: "from-emerald-500 to-emerald-400",
    percentageColor: "text-emerald-400",
    phases: [
      { label: "Days 8-11 - Feature hardened", status: "active" },
      { label: "Days 12-13 - QA & testing", status: "active" },
      { label: "Day 14 - Production deploy", status: "complete" },
      { label: "Day 14 - Full IP handover", status: "complete" }
    ]
  }
];

export default function SprintTimeline() {
  return (
    <section className="relative z-10 my-24 md:my-36" id="timeline">
      <div className="section-container">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-10 md:mb-12 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
              <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">Sprint Timeline</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-0">
              14 days. Every phase <span className="text-brand-gradient">tracked.</span>
            </h2>
          </div>

          <div className="flex flex-col items-end shrink-0">
            <div className="text-xl md:text-2xl font-extrabold text-white tracking-tight">14d </div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total cycle limit</div>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-4">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative p-5 border border-white/20 shadow-2xl rounded-2xl bg-black">
              {/* Week Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                <h3 className="text-lg font-medium text-white tracking-tight">
                  {item.week}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="hidden md:block text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {item.milestones}
                  </span>
                  <span className={`text-lg font-extrabold tracking-tight ${item.percentageColor}`}>
                    {item.progress}%
                  </span>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="relative h-1.5 w-full bg-white/[0.15] rounded-full overflow-hidden mb-4">
                <div
                  className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-700 to-blue-500 transition-all duration-1000 ease-out`}
                  style={{
                    width: `${item.progress}%`,
                    backgroundImage: `linear-gradient(to right, ${item.progressColor.split(' ').map(c => c.replace('from-', '').replace('to-', '')).join(', ')})`
                  }}
                />
              </div>

              {/* Status Pills */}
              <div className="flex flex-wrap gap-3">
                {item.phases.map((phase, pIdx) => {
                  let styles = "";
                  if (phase.status === "complete") {
                    styles = "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
                  } else if (phase.status === "active") {
                    styles = "bg-brand-500/10 border-brand-500/30 text-brand-400";
                  } else {
                    styles = "bg-white/5 border-white/10 text-gray-400";
                  }

                  return (
                    <div
                      key={pIdx}
                      className={`px-4 py-1.5 rounded-full border text-[11px] font-medium tracking-widest transition-all duration-300 hover:scale-[1.05] cursor-default ${styles}`}
                    >
                      {phase.label}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Area */}
        <div className="mt-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm max-w-lg leading-relaxed">
            Sprint is scoped to one production-ready AI feature. Additional features move into a 30-Day Velocity Sprint or Dedicated Pod.
          </p>

          <button className="btn-primary group py-3 px-8 rounded-xl flex items-center gap-3 transition-all duration-300" onClick={() =>
            window.open("https://cal.com/aadi-raj-sinh-tmtqkm/30min", "_blank")
          }>
            <span className="text-base font-bold">Initialise Sprint </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
