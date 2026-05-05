import React from 'react';
import { ArrowRight, Play, Zap, ShieldCheck, Cpu, Activity, Clock } from 'lucide-react';
import brainerIcon from '../assets/BrainerHub-Light-Icon.png';

export default function Hero() {
  return (
    <section className="relative z-10 overflow-hidden pt-16 pb-32">
      {/* Background radial glare */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 blur-[120px] -z-10 pointer-events-none rounded-full"></div>
      <div className='section-container'>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side */}
          <div className="space-y-6 md:space-y-8 relative z-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-2xl">
              <Zap className="w-3.5 h-3.5 text-brand-400 fill-brand-400" />
              <span className="text-sm font-medium text-gray-300">
                Now powered by GPT-5 & Claude Opus
              </span>
            </div>

            <h1 className="text-4xl md:text-[58px] font-extrabold tracking-tight md:!leading-[70px] text-white">
              Ship AI Features in 14 Days <span className="text-brand-gradient"> Without Hiring More Developers</span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              UK startups don’t fail from lack of ideas — they stall from lack of execution.
              We deploy a ready-to-go AI engineering pod that ships production features in 2 weeks so you
              move faster without increasing burn.
            </p>

            <div className="flex flex-wrap gap-5 items-center pt-4">
              <button className="btn-primary group">
                <span>Book a call</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <p className="text-sm text-gray-500 font-medium tracking-wide">
                Built for funded startups that need speed, not hiring delays.
              </p>
            </div>
          </div>

          {/* Right Side Visuals */}
          <div className="relative z-20 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
            {/* Decorative Particles */}
            <div className="absolute top-10 left-0 w-1 h-1 bg-brand-400 rounded-full animate-pulse blur-[1px]"></div>
            <div className="absolute bottom-20 right-10 w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-float blur-[1px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-32 -translate-y-40 w-1 h-1 bg-white/20 rounded-full"></div>

            {/* Concentric Rings with Satellites */}
            <div className="absolute w-[450px] h-[450px] border border-white/20 border-dashed rounded-full animate-spin-slow">
              <div className="absolute top-1/2 -left-1 w-2 h-2 bg-slate-500 rounded-full shadow-glow"></div>
              <div className="absolute -top-1 left-1/2 w-2 h-2 bg-brand-500/80 rounded-full"></div>
            </div>
            <div className="absolute w-[350px] h-[350px] border border-white/20 border-dashed rounded-full animate-spin-reverse-slow">
              <div className="absolute -top-1 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>
            </div>
            <div className="absolute w-[250px] h-[250px] border border-brand-500/20 border-dashed rounded-full animate-spin-slow">
              <div className="absolute bottom-1/2 -right-1 w-3 h-3 bg-blue-400/80 rounded-full shadow-glow"></div>
            </div>

            {/* Pulsing Outer Glow */}
            <div className="absolute w-80 h-80 rounded-full bg-brand-500/5 blur-[80px] animate-pulse-glow"></div>

            {/* Central Glowing Orb */}
            <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-brand-500 to-brand-400 shadow-[0_0_80px_rgba(191,66,82,0.4)] flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]"></div>
              <div className="relative w-36 h-36 flex items-center justify-center animate-spin-slow">
                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img src={brainerIcon} alt="BrainerHub" className="w-full h-full brightness-0 opacity-40 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
              </div>
              {/* Inner rotating elements */}
              <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow [animation-duration:10s]"></div>
            </div>

            {/* Floating Data Cards */}

            {/* Dedicated AI Pod Card (Left) */}
            <div className="absolute left-0 md:-left-16 top-16 md:top-1/2 -translate-y-1/2 glass-card p-3.5 md:p-5 rounded-2xl md:rounded-3xl border-white/20 shadow-glow animate-float-complex">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent rounded-[2rem]"></div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-400 font-bold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shadow-[0_0_8px_rgba(255,107,122,0.8)]"></span> MONTHLY
              </p>
              <p className="text-sm md:text-base font-bold text-white whitespace-nowrap relative z-10">Dedicated AI Pod</p>
            </div>

            {/* 30-Day Velocity Sprint Card (Top Right) */}
            <div className="absolute right-2 md:-right-8 -top-2 md:top-10 glass-card p-3.5 md:p-5 rounded-2xl md:rounded-3xl border-white/20 shadow-2xl animate-float-complex [animation-delay:1.5s]">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-2">VELOCITY</p>
              <div className="pt-1">
                <p className="text-sm md:text-lg font-bold text-white leading-tight">30-Day <br /><span className="text-brand-400">Velocity</span> Sprint</p>
              </div>
            </div>

            {/* AI Feature Sprint Card (Bottom Right) */}
            <div className="absolute right-0 md:-right-12 -bottom-2.5 md:bottom-10 glass-card p-3.5 md:p-5 rounded-2xl md:rounded-3xl border-white/20 shadow-2xl min-w-[190px] animate-float-complex [animation-delay:3s]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-xl bg-brand-500/20 flex items-center justify-center border border-brand-500/20 shadow-glow">
                  <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-400 fill-brand-400" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-400 font-bold">14 DAYS</p>
              </div>
              <p className="text-sm md:text-base font-bold text-white leading-snug">AI Feature Sprint</p>
              <p className="text-[10px] text-gray-400 font-medium mt-2 flex items-center gap-1.5">
                <span className="w-1 h-px bg-gray-400"></span> Concept to Production
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
