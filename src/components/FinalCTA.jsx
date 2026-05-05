import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative z-10 overflow-hidden my-24 md:my-36">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="section-container text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-3 md:mb-8 text-white tracking-tight leading-[1.1]">
          Ready to <span className="text-brand-gradient">ship faster?</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Your investors expect progress. We help you ship it.
        </p>

        <div className="flex flex-col items-center gap-4 md:gap-6">
          <button className="btn-primary text-base md:text-lg px-5 md:px-6 py-3 md:py-4 group/btn">
            <span>Book Your Sprint Feasibility Call</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <p className="text-sm font-medium text-gray-500 tracking-wide uppercase">
            No commitment required
          </p>
        </div>
      </div>
    </section>
  );
}
