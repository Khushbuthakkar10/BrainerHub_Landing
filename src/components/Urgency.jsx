import React from 'react';
import { Clock, MapPin, ArrowRight, Shield, Flame } from 'lucide-react';

export default function Urgency() {
  return (
    <section className="relative z-10 my-24 md:my-36">
      <div className="section-container">
        {/* Main card */}
        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0f0f12]">

          {/* Gradient top border line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-gradient" />

          {/* Background glow blobs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 px-8 md:px-14 py-14 md:py-16 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/25 mb-6">
              <Flame className="w-3.5 h-3.5 text-brand-400" />
              <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">Limited Availability</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight tracking-tight">
              We only onboard{' '}
              <span className="text-brand-gradient">2 UK startups</span>{' '}
              per week
            </h2>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-white/10" />
              <div className="w-1.5 h-1.5 rounded-full bg-brand-400/60" />
              <div className="h-px w-16 bg-white/10" />
            </div>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
              To maintain high delivery speed and quality, we strictly limit how many teams we work with each week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
