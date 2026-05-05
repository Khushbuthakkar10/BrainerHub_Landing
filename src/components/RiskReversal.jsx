import React from 'react';
import { FileX, Users, Coins, ShieldCheck } from 'lucide-react';

const guarantees = [
  {
    title: "No Long-Term Contracts",
    description: "You’re never locked in. Continue only if you see real value.",
    icon: FileX,
    number: "01",
  },
  {
    title: "No Hiring Commitments",
    description: "No need to hire or manage extra resources—we handle everything.",
    icon: Users,
    number: "02",
  },
  {
    title: "If We Don't Deliver, You Don't Pay",
    description: "Simple. If we don't meet expectations, you owe nothing.",
    icon: Coins,
    number: "03",
  },
  {
    title: "Start Without Financial Risk",
    description: "No upfront costs. Begin risk-free and scale with confidence.",
    icon: ShieldCheck,
    number: "04",
  }
];

export default function RiskReversal() {
  return (
    <section className="relative z-10 my-24 md:my-36">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/25 mb-5">
            <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">ZERO RISK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Zero-Risk <span className="text-brand-gradient">Start</span>
          </h2>
          <p className="text-gray-500 text-basr max-w-2xl mx-auto leading-relaxed">
            Start with confidence. No commitments, no pressure—just results.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {guarantees.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative rounded-3xl p-7 border border-white/10 bg-[#0f0f12] overflow-hidden hover:border-brand-500/30 transition-all duration-300 cursor-default"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{ background: 'radial-gradient(circle at top left, rgba(191,66,82,0.1) 0%, transparent 65%)' }}
                />

                {/* Gradient top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] w-0 mx-auto bg-brand-gradient opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-300" />

                {/* Number watermark */}
                <span className="absolute top-5 right-6 text-5xl font-black text-white/10 select-none group-hover:text-white/6 transition-colors duration-300">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-500/15 transition-all duration-300">
                  <Icon className="w-5 h-5 text-brand-400" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-lg font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
