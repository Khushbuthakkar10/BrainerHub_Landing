import React from 'react';

export default function TrustStrip() {
  const logos = [
    { name: "Acme Corp", font: "font-serif" },
    { name: "Globex", font: "font-sans tracking-tighter" },
    { name: "Soylent", font: "italic font-black" },
    { name: "INITOWN", font: "tracking-[0.4em]" },
    { name: "Umbrella", font: "font-mono" },
    { name: "Hooli", font: "font-sans font-bold" },
    { name: "Initech", font: "font-sans tracking-widest" },
    { name: "Cyberdyne", font: "font-serif italic" },
  ];

  // Double the logos for seamless marquee
  const allLogos = [...logos, ...logos];

  return (
    <div className="relative z-10 py-12 md:py-16 overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-400/40" />
            <span className="text-[10px] md:text-xs font-bold text-brand-400 uppercase tracking-[0.3em]">
              Trusted by high-growth UK startups
            </span>
            <div className="h-px w-8 bg-brand-400/40" />
          </div>
        </div>

        <div className="relative overflow-hidden group">
          {/* Symmetrical fade masks matching background #0b0b0d */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0b0d] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b0b0d] to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee whitespace-nowrap py-4 will-change-transform">
            {/* Double the logos and ensure flex-shrink-0 for perfect math */}
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className={`flex-shrink-0 flex items-center justify-center px-8 md:px-16 text-xl md:text-2xl font-bold text-white/30 hover:text-white/80 transition-all duration-500 cursor-default ${logo.font} hover:scale-110`}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}
