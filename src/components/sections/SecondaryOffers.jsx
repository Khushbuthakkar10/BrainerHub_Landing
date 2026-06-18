import React from 'react';
import { Rocket, ShieldCheck, ArrowRight, Shield } from 'lucide-react';

export default function SecondaryOffers() {
  const offers = [
    {
      id: 1,
      subTitle: "Upfront:  Start Day",
      title: "Paid before work begins",
      price: "50%",
      description: "Your first payment kicks off the sprint. We assemble the pod, schedule the discovery call, and lock your 14-day slot immediately. No payment, no slot.",
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-brand-500/30 to-transparent"
    },
    {
      id: 2,
      subTitle: "On Delivery: Day 14",
      title: "Paid only when we ship",
      price: "50%",
      description: "The second half is due when we hand over a live, production-ready AI feature. Not a staging prototype. Not a demo. Live in your product, on Day 14.",
      highlight: "If delivery slips beyond Day 14, the second 50% is waived until the feature is live in production.",
      icon: <ShieldCheck className="w-6 h-6" />,
      gradient: "from-emerald-400/30 to-transparent"
    }
  ];

  return (
    <section className="relative z-10 my-24 md:my-36 overflow-hidden" id='payment'>
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
            <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">Payment Protocol</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            50/50. Balanced Risk. <span className="text-brand-gradient">Full Accountability.</span>
          </h2>
          <p className="text-gray-400 text-base max-w-3xl mx-auto leading-relaxed">
            We don't believe startups should carry all the delivery risk upfront. Our model is built on shared risk and full accountability: you pay half to start, half only when we deliver.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 relative pb-1">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="group relative rounded-[2.5rem] p-1 md:p-1.5 overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Animated border gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-white/15 to-white/10 opacity-50 transition-all duration-500 ${idx == 0 ? 'group-hover:from-brand-500/30 group-hover:to-brand-400/30' : 'group-hover:from-emerald-500/30 group-hover:to-emerald-400/30'}`}></div>

              <div className="relative h-full bg-[#0d0d10] rounded-[2.2rem] p-6 md:p-7 flex flex-col items-start overflow-hidden">
                {/* Corner Glow */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${offer.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border group-hover:scale-110 transition-all duration-300 flex-shrink-0 
                    ${idx == 0 ? 'bg-brand-500/10 text-brand-400 border-brand-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'}`}>
                    {offer.icon}
                  </div>
                  <div>
                    <p className={`text-base font-bold tracking-widest uppercase ${idx == 0 ? 'text-brand-400' : 'text-emerald-400'}`}>{offer.subTitle}</p>
                    <h3 className="text-gray-400 text-sm">
                      {offer.title}
                    </h3>
                  </div>
                </div>

                <div className="w-full flex-1">
                  <p className="text-3xl md:text-4xl font-extrabold text-white mb-4 border-b border-white/15 pb-4">
                    {offer.price}
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {offer.description}
                  </p>

                  {offer.highlight && (
                    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 mt-5">
                      <div className="flex items-start gap-2.5">
                        <Shield className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <p className="text-emerald-400 text-[13px] font-medium leading-relaxed">
                          {offer.highlight}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
