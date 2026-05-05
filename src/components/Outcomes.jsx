import React from 'react';
import { Coins, Zap, ShieldCheck, Users } from 'lucide-react';

export default function Outcomes() {
  const outcomes = [
    {
      value: "12 Days",
      label: "AI chatbot shipped",
      description: "AI chatbot shipped in 12 days for SaaS startup",
      icon: <Coins className="w-6 h-6 text-brand-400" />,
    },
    {
      value: "60% Reduction",
      label: "Manual operations",
      description: "Reduced manual operations by 60% using automation workflows",
      icon: <Zap className="w-6 h-6 text-brand-400" />,
    },
    {
      value: "10 Days",
      label: "GPT feature live",
      description: "Integrated GPT-based feature into production in 10 days",
      icon: <ShieldCheck className="w-6 h-6 text-brand-400" />,
    },
    {
      value: "Internal Tool",
      label: "AI reporting system",
      description: "Built internal AI tool replacing manual reporting",
      icon: <Users className="w-6 h-6 text-brand-400" />,
    }
  ];

  return (
    <section className="my-24 md:my-36 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="section-container relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/25 mb-5">
            <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">RESULTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Example outcomes, <span className="text-brand-gradient">real impact</span>
          </h2>
          <p className="text-gray-500 text-basr max-w-2xl mx-auto leading-relaxed">
            Proven results from our recent AI engineering engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {outcomes.map((item, idx) => (
            <div
              key={idx}
              className="glass-card text-center group p-8 rounded-[2.5rem] hover:border-brand-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 mb-8 mx-auto rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-500/20 transition-all duration-500 shadow-glow">
                  {item.icon}
                </div>

                <div className="mb-2">
                  <div className="text-3xl md:text-3xl font-black text-white mb-4 tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-base font-bold text-white/90">
                    {item.label}
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed font-medium mt-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
