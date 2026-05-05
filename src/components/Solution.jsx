import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Solution() {
  const items = [
    "Senior AI + full-stack engineers",
    "Start in 3-5 days",
    "Ship production-ready features in 14 days",
    "Fully managed — no micromanaging required",
  ];

  return (
    <section className="relative z-10 my-24 md:my-36">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side */}
          <div className="max-w-xl">
            {/* <span className="text-[#10b981] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            The Solution
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            A plug-and-play AI sprint pod that ships — <span className="text-brand-gradient">fast</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            Get a fully managed AI sprint team that delivers production-ready features quickly without added complexity.
          </p> */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
              <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">The Solution</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 leading-tight">
              A plug-and-play AI sprint pod that ships — <span className="text-brand-gradient">fast</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              Get a fully managed AI sprint team that delivers production-ready features quickly without added complexity.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-2">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 py-4 px-5 rounded-2xl bg-dark-800/40 border border-white/5 hover:bg-dark-800/60 hover:border-brand-500/30 transition-all duration-300 group"
              >
                <div className="shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#10b981] group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-gray-300 font-semibold md:text-lg">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
