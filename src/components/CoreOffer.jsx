import React from 'react';
import { Rocket, Users, Shield, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const tags = [
  { icon: <CheckCircle2 className="w-4 h-4" />, label: "1 Production-Ready Feature" },
  { icon: <Users className="w-4 h-4" />, label: "2–3 Engineer Pod" },
  { icon: <Shield className="w-4 h-4" />, label: "Fixed Sprint Pricing" },
  { icon: <CheckCircle2 className="w-4 h-4" />, label: "Delivery Guaranteed" },
];

export default function CoreOffer() {
  return (
    <section className="section-container relative z-10 my-24 md:my-36" id='features'>
      <div className="max-w-5xl mx-auto relative group">

        {/* Glowing animated border */}
        <div className="absolute -inset-[1.5px] rounded-[2.2rem] bg-gradient-to-r from-brand-500/60 via-brand-400/20 to-brand-500/60 blur-sm opacity-70 group-hover:opacity-100 group-hover:blur-md transition-all duration-500" />

        {/* Main card */}
        <div className="relative bg-[#0e0e11] border border-white/5 rounded-[2.2rem] p-7 md:p-10 overflow-hidden">

          {/* Subtle ambient glow inside */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-8">

            {/* Header */}
            <div className="flex items-start gap-5 pb-6 border-b border-white/10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #bf4252, #ff8b28)' }}>
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-tight leading-tight">
                  AI Feature Sprint (14 Days)
                </h2>
                <p className="text-gray-500 text-sm md:text-base font-medium mt-1">
                  Ship a production-ready AI feature in just 14 days.
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              {/* Description */}
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Get a dedicated engineering pod focused on delivering a high-impact AI feature with speed, precision, and guaranteed results.
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-semibold text-gray-400"
                  >
                    <span className="text-brand-400">{tag.icon}</span>
                    {tag.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Guarantee box */}
            <div className="flex items-center gap-5 bg-[#061a14]/80 border border-green-500/20 rounded-2xl p-3 md:p-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-0.5">Delivery Guarantee</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If we don't ship in 14 days, we keep working for free.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <button className="btn-primary text-base py-3 px-5 group/btn w-full sm:w-auto">
                <span>Book Your Sprint Call</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-2 text-gray-500 font-semibold text-sm">
                <Zap className="w-4 h-4 text-brand-400 fill-brand-400" />
                <span>Fast delivery. No risk.</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
