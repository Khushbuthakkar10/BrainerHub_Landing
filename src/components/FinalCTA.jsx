import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative z-10 overflow-hidden my-24 md:my-36" id="cta">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-start">

          {/* Left Column: Messaging */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
              <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">Initialise Your Cycle</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
              Your investors expect progress.
              <span className="text-brand-gradient italic">We help you ship it.</span>
            </h2>

            <p className="text-gray-500 text-base mb-8">
              Don't let your roadmap accumulate technical debt while the competition ships. Initialise your 14-day sprint and have a live AI feature before your next board update.
            </p>

            <button className="btn-primary group">
              <span>Book Your Sprint Feasibility Call</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Delivery Stats */}
            <div className="grid grid-cols-3 gap-5 md:gap-8 pt-7 border-t border-white/10 mt-8 max-w-xl">
              <div>
                <div className="text-2xl md:text-3xl font-black text-white tracking-tighter italic">14d</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Sprint cycle</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-white tracking-tighter italic">100% </div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">IP ownership</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-white tracking-tighter italic">$0 </div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">If we don't ship</div>
              </div>
            </div>
          </div>

          {/* Right Column: Capacity Module */}
          <div className="lg:col-span-2 relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0f0f12] group">
            {/* Gradient top border line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-gradient" />

            {/* Background glow blobs */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 p-6 md:p-8">
              {/* Header Status */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Operational — slots open</span>
                </div>
                <span className="text-[10px] font-medium text-gray-600 uppercase tracking-widest">Week of May 2026</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">Initialise Your Cycle.</h3>
              <p className="text-sm text-gray-500 mb-8">Next sprint window opens in 48 hours.</p>

              {/* Capacity Counter */}
              <div className="bg-white/5 rounded-2xl p-4 mb-4 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Weekly capacity</span>
                  <span className="text-sm font-bold text-white">2 startups max</span>
                </div>

                {/* Progress Bars */}
                <div className="flex gap-1.5 mb-4">
                  <div className="h-1.5 flex-1 rounded-full bg-brand-500" />
                  <div className="h-1.5 flex-1 rounded-full bg-emerald-500" />
                  <div className="h-1.5 flex-1 rounded-full bg-white/5" />
                  <div className="h-1.5 flex-1 rounded-full bg-white/5" />
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-500" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">1 slot filled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">1 slot remaining</span>
                  </div>
                </div>
              </div>

              <button className="btn-primary w-full text-base py-3 px-5 group/btn">
                <span>Secure Your Slot </span>
                <ArrowRight className="w-5 h-5 group-hover/btn2:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-2 text-gray-600 mt-8">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="text-[11px] font-medium tracking-wide uppercase">No commitment on the call. 30 minutes.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
