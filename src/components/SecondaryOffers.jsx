import React from 'react';
import { Rocket, Users, ArrowRight, Check, Zap } from 'lucide-react';

export default function SecondaryOffers() {
  const offers = [
    {
      subTitle: "VELOCITY",
      title: "Velocity Sprint",
      price: "Best for post-MVP teams",
      list: ["Faster iteration cycles", "Multiple features shipped", "Weekly technical audits"],
      icon: <Rocket className="w-6 h-6" />,
      buttonText: "Book Your Sprint",
      gradient: "from-brand-500/20 to-transparent"
    },
    {
      subTitle: "ONGOING",
      title: "Monthly Pod",
      price: "Replace hiring entirely",
      list: ["Continuous development", "Dedicated engineer pod", "Priority Slack access"],
      icon: <Users className="w-6 h-6" />,
      buttonText: "Join the Waitlist",
      gradient: "from-brand-400/20 to-transparent"
    }
  ];

  return (
    <section className="relative z-10 my-24 md:my-36 overflow-hidden" id='offers'>
      <div className="section-container">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-500/5 blur-[120px] pointer-events-none"></div>

        <div className="text-center mb-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
            <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">OFFERS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Secondary <span className="text-brand-gradient">Offers</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Whether you need a quick boost or long-term partnership, we've got you covered.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 relative">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="group relative rounded-[2.5rem] p-1 md:p-1.5 overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-brand-400/10  opacity-50 group-hover:from-brand-500/20 group-hover:to-brand-400/20 transition-all duration-500"></div>

              <div className="relative h-full bg-[#0d0d10] rounded-[2.2rem] p-6 md:p-8 flex flex-col items-start overflow-hidden">
                {/* Corner Glow */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${offer.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 border border-brand-500/20 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all duration-300 flex-shrink-0">
                    {offer.icon}
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-brand-400 tracking-widest uppercase mb-0.5">{offer.subTitle}</p>
                    <h3 className="text-xl font-extrabold text-white tracking-tight">
                      {offer.title}
                    </h3>
                  </div>
                </div>

                <div className="mb-6 w-full">
                  <p className="text-base font-semibold text-gray-300 mb-4 border-b border-white/10 pb-6">
                    {offer.price}
                  </p>

                  <ul className="space-y-3.5">
                    {offer.list.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-gray-400 font-medium">
                        <div className="w-5 h-5 rounded-full bg-brand-500/10 flex items-center justify-center shrink-0 border border-brand-500/20">
                          <Check className="w-3 h-3 text-brand-400" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-auto w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm border font-bold bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all duration-300 group/btn">
                  <span>{offer.buttonText}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
