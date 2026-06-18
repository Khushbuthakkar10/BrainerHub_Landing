import React from 'react';
import { Cpu, Layers, FileCode, Users, CheckCircle2 } from 'lucide-react';

const deliverables = [
  {
    id: "01",
    title: "Production-Ready AI Feature",
    description: "Clean, tested, documented code built on your existing stack. Not a proof-of-concept,  a real production feature your users can interact with from day one.",
    tags: ["Live in your product", "Tested & hardened", "Clean codebase"],
    icon: Cpu
  },
  {
    id: "02",
    title: "Infrastructure & Integration",
    description: "All AI model integrations, API connections, and infrastructure config deployed. Your feature runs reliably at scale from day one, no brittle hacks or workarounds.",
    tags: ["AI model wired up", "API integrations", "Error handling"],
    icon: Layers
  },
  {
    id: "03",
    title: "Full IP & Source Code Transfer",
    description: "You own 100% of everything: code, configs, credentials, and architecture decisions. No lock-in, no ongoing dependency on us unless you choose it.",
    tags: ["Full code ownership", "No lock-in", "Repo handover"],
    icon: FileCode
  },
  {
    id: "04",
    title: "Documentation & Handover Call",
    description: "Technical docs, architecture notes, and a 30-minute handover call. Your next engineer can continue development immediately.",
    tags: ["Technical docs", "Handover call", "Architecture notes"],
    icon: Users
  }
];

export default function Day14Deliverables() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" id="deliverables">
      <div className="absolute inset-0 bg-white/[0.08] backdrop-blur-sm pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[120px] bg-brand-500/[0.2] blur-[80px] pointer-events-none rounded-full" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
            <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">Day 14 Deliverables</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            What you get on <span className="text-brand-gradient">Day 14.</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Every sprint ends with a complete, production-ready AI feature and a full handoff. Here's exactly what ships.
          </p>
        </div>


        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {deliverables.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-[#0f1115] border border-white/5 rounded-3xl p-5 md:p-7 flex flex-col transition-all duration-500 hover:border-brand-500/30 hover:bg-[#15181e] hover:-translate-y-1 overflow-hidden"
              >
                {/* ID Watermark */}
                <span className="absolute -top-4 -right-2 text-[120px] font-black text-white/[0.02] select-none group-hover:text-white/[0.04] transition-colors duration-500 leading-none">
                  {item.id}
                </span>

                {/* Card Header */}
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-500/20 transition-all duration-300 shadow-brand-glow/0 group-hover:shadow-brand-glow">
                    <Icon className="w-7 h-7 text-brand-400" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 tracking-[0.3em] uppercase mt-2">
                    DEL-{item.id}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 mb-6">
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-0 flex-1 group-hover:text-gray-400 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Tags Section */}
                <div className="mt-auto pt-6 border-t border-white/[0.10] relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold text-gray-400 group-hover:text-white group-hover:border-brand-500/30 group-hover:bg-brand-500/5 transition-all duration-300"
                      >
                        <CheckCircle2 className="w-3 h-3 text-brand-500/80 group-hover:text-brand-500" />
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at top left, rgba(191,66,82,0.05) 0%, transparent 60%)' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
