import React from 'react';
import { CheckCircle2, Check } from 'lucide-react';

const items = [
  "Senior AI + full-stack engineers",
  "Start in 3-5 days",
  "Ship production-ready features in 14 days",
  "Fully managed — no micromanaging required",
];

const timeline = [
  {
    step: 1,
    title: "Pod Assembled",
    sub: "Day 1 — Engineers matched to your stack",
    status: "active"
  },
  {
    step: 2,
    title: "Scope & Architecture",
    sub: "Day 2-4 — Feature spec signed off",
    status: "active"
  },
  {
    step: 3,
    title: "Build Sprint",
    sub: "Day 5-12 — Daily async standups",
    status: "active"
  },
  {
    step: 4,
    title: "Production Deploy",
    sub: "Day 14 — Feature live in your product",
    status: "completed"
  }
];

export default function Solution() {
  return (
    <section className="relative z-10 my-24 md:my-36 py-1 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left Side: Content */}
          <div className="max-w-xl">
            <div className="text-left mb-10 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
                <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">The Solution</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
                A plug-and-play AI sprint pod that ships <span className="text-brand-gradient">— fast</span>
              </h2>
              <p className="text-gray-500 text-base max-w-3xl">
                No interviews. No onboarding delays. Just senior engineers who hit the ground running.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-gray-300 font-semibold text-base md:text-md">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Sprint Timeline Card */}
          <div className="relative group">
            {/* Card glow */}
            <div className="absolute -inset-[2px] rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-brand-500 via-transparent to-blue-500 blur-sm opacity-70 group-hover:opacity-90 transition-opacity" />

            <div className="relative bg-[#0d0d10] border border-white/[0.10] rounded-[2rem] md:rounded-[2.5rem] px-6 py-7 md:px-10 md:py-10 overflow-hidden shadow-2xl">
              {/* Inner ambient */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-[60px] pointer-events-none" />

              <p className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-7 md:mb-10">
                Sprint Timeline
              </p>

              <div className="relative space-y-0">
                {/* Vertical line connector */}
                <div className="absolute left-[19px] top-4 bottom-4 w-[1px] bg-white/[0.10]" />

                {timeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-3.5 md:gap-5 pb-7 md:pb-8 last:pb-0 group/step">
                    {/* Circle Indicator */}
                    <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 border shadow-lg transition-transform group-hover/step:scale-110 ${item.status === 'completed'
                      ? 'bg-emerald-600 border-emerald-600'
                      : 'bg-dark-700 border-brand-500/50'
                      }`}>
                      {item.status === 'completed' ? (
                        <Check className="w-5 h-5 text-white" />
                      ) : (
                        <span className="text-sm font-black text-white">{item.step}</span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="pt-0.5">
                      <h3 className="text-base md:text-lg font-bold text-white mb-0 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500 font-medium">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
