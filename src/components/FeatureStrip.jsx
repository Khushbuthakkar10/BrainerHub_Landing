import React from 'react';

const features = [
  { label: 'Start in 3–5 Days' },
  { label: 'Senior AI Engineers' },
  { label: 'Fixed Sprint Pricing' },
  { label: 'Delivery Guaranteed' }
];

export default function FeatureStrip() {
  return (
    <div className="relative z-10 overflow-hidden">

      {/* Subtle background tint */}
      <div className="absolute inset-0 bg-white/[0.06] backdrop-blur-sm pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[120px] bg-brand-500/[0.3] blur-[80px] pointer-events-none rounded-full" />

      <div className="section-container relative">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-5">

          {features.map(({ label }, idx) => (
            <React.Fragment key={label}>
              {/* Dot separator between items (not before first) */}
              {idx !== 0 && (
                <div className="hidden sm:block h-1 w-1 rounded-full bg-white/15 shrink-0" />
              )}

              <div className="group flex items-center gap-2.5 cursor-default">
                {/* Pulsing brand bullet */}
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-50 group-hover:animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_8px_rgba(255,107,122,0.7)]" />
                </span>

                {/* Label */}
                <span className="text-xs md:text-sm font-medium tracking-wide text-white transition-colors duration-300 group-hover:text-white whitespace-nowrap">
                  {label}
                </span>
              </div>
            </React.Fragment>
          ))}

        </div>
      </div>
    </div>
  );
}
