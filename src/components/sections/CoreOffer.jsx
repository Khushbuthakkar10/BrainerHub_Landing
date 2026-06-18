import React from 'react';
import { Rocket, Users, Shield, Zap, ArrowRight, CheckCircle2, Coins, Layout, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <Layout className="w-5 h-5" />,
    title: "1 Production AI Feature",
    desc: "Live in your product by Day 14. Not a demo. Not a prototype. Fully shipped.",
    badge: "Shipped",
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/20"
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Dedicated 2-3 Engineer Pod",
    desc: "Senior AI + full-stack engineers, matched to your exact stack and requirements.",
    badge: "Active",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    icon: <Coins className="w-5 h-5" />,
    title: "Fixed Sprint Pricing",
    desc: "One fixed scope and one fixed sprint cost with no surprise expansion halfway through delivery.",
    badge: "Fixed",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    icon: <HeartHandshake className="w-5 h-5" />,
    title: "Delivery Guaranteed",
    desc: "Miss Day 14? Second 50% waived. We work free until it's live in production.",
    badge: "Guaranteed",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  }
];

export default function CoreOffer() {
  return (
    <section className="relative z-10 my-24 md:my-36" id='offer'>
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
            <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">Core Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Our most popular <span className="text-brand-gradient">engagement</span>
          </h2>
          <p className="text-gray-400 text-base max-w-3xl mx-auto">
            Everything required to ship a production AI feature in one focused sprint.
          </p>
        </div>

        {/* Main Offer Card */}
        <div className="max-w-5xl mx-auto relative group">
          {/* Outer glow */}
          <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-r from-brand-500/40 via-transparent to-brand-500/40 blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

          <div className="relative space-y-8 bg-[#0d0d10] border-2 border-white/[0.10] rounded-[2.5rem] p-6 md:p-12 overflow-hidden shadow-2xl">
            {/* Inner ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] pointer-events-none" />

            <h3 className="text-xl md:text-2xl font-black !mt-0 text-white tracking-tight text-center">
              AI Feature Sprint in just 14 Days
            </h3>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-white/10" />
              <div className="w-1.5 h-1.5 rounded-full bg-brand-400/60" />
              <div className="h-px w-16 bg-white/10" />
            </div>
            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <div key={i} className="group/item relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.10] hover:border-brand-500/60 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 border border-brand-500/20 group-hover/item:scale-110 transition-transform">
                      {f.icon}
                    </div>
                    <div className={`px-2.5 py-1 rounded-md text-[10px] font-black tracking-widest border ${f.badgeColor}`}>
                      {f.badge}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 tracking-tight">{f.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Delivery Guarantee Banner */}
            <div className="relative  group/banner bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl p-4 md:p-6 flex items-center gap-3 md:gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20 shadow-inner">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-black text-white leading-tight mb-1">14-Day Delivery Guarantee</h4>
                <p className="text-blue-50 text-sm font-medium opacity-90">
                  If we don't ship in 14 days, we keep working for free until the feature is live in production.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="btn-primary text-base py-3 px-5 group/btn w-full sm:w-auto" onClick={() =>
                window.open("https://cal.com/aadi-raj-sinh-tmtqkm/30min", "_blank")
              }>
                <span>Book Your Sprint Call </span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
