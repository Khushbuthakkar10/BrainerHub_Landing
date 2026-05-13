import React from 'react';
import { ArrowRight, Play, Zap, ShieldCheck, Cpu, Activity, Clock, Check } from 'lucide-react';
import brainerIcon from '../assets/BrainerHub-Light-Icon.png';

export default function Hero() {
  const [rotation, setRotation] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const requestRef = React.useRef();

  const animate = () => {
    if (!isPaused) {
      setRotation((prev) => (prev + 0.1) % 360);
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused]);

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
                AI Engineering Sprint Pods
              </span>
            </div>

            <h1 className="text-4xl md:text-[56px] font-extrabold tracking-tight md:!leading-[70px] text-white">
              Ship AI Features in <span className="text-brand-gradient">14 Days</span>. Not 14 Months.
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">Startups rarely struggle because of ideas. Execution is usually the bottleneck. We deploy a focused AI sprint pod that ships production-ready features in 14 days without long hiring cycles or additional operational burn.</p>

            <div className="flex flex-wrap gap-5 items-center pt-4">
              <button className="btn-primary group">
                <span>Book Your Sprint Feasibility Call</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <p className="text-sm text-gray-500 font-medium tracking-wide">
                • No hiring delays
                • Fixed pricing
                • Delivery guaranteed
                • 100% IP yours
              </p>
            </div>
          </div>

          {/* Right Side Visuals */}
          <div
            className="relative z-20 flex items-center justify-center scale-[0.7] md:scale-[1] min-h-[500px] lg:min-h-[650px] perspective-1000 group/hero-orbital"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Background Glows */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-brand-500/10 blur-[120px] animate-pulse-glow"></div>

            {/* Rotating Dashed Orbital Rings & Satellites */}
            {/* Outer Ring */}
            <div className="absolute w-[520px] h-[520px] border border-white/10 border-dashed rounded-full animate-spin-slow [animation-duration:40s] group-hover/hero-orbital:[animation-play-state:paused]">
              <div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-blue-400/40 rounded-full blur-[1px] shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
            </div>

            {/* Middle Ring (Synchronized via state) */}
            <div
              className="absolute w-[420px] h-[420px] border border-white/20 border-dashed rounded-full"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div className="absolute -top-6 left-20 w-3 h-3 bg-brand-500/40 rounded-full blur-[1px] shadow-[0_0_10px_rgba(191,66,82,0.5)]"></div>
            </div>

            {/* Inner Ring */}
            <div className="absolute w-[320px] h-[320px] border border-brand-500/20 border-dashed rounded-full animate-spin-slow [animation-duration:20s] group-hover/hero-orbital:[animation-play-state:paused]">
              <div className="absolute bottom-1/2 -right-1.5 w-2.5 h-2.5 bg-white/30 rounded-full blur-[1px]"></div>
            </div>

            {/* Central Orb */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full flex items-center justify-center z-30">
              {/* Outer Blue Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-3xl animate-pulse"></div>

              {/* The Orb Body */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 p-0.5 shadow-[0_0_50px_rgba(37,99,235,0.4)] transition-transform duration-500 hover:scale-105">
                <div className="w-full h-full rounded-full bg-dark-900/60 backdrop-blur-md flex flex-col items-center justify-center border border-white/10 relative overflow-hidden">

                  {/* Lightning Icon */}
                  <div className="absolute top-8 text-orange-400 filter drop-shadow-[0_0_8px_rgba(251,146,60,0.6)] animate-float">
                    <Zap className="w-6 h-6 fill-orange-400" />
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-[10px] font-black tracking-[0.2em] text-blue-200/60 uppercase mb-1">AI FEATURE SPRINT</p>
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-5xl md:text-6xl font-black text-white tracking-tighter italic">7</span>
                      <span className="text-2xl md:text-3xl font-black text-white/40 tracking-tighter italic mb-1.5">/ 14</span>
                    </div>
                    <p className="text-[10px] font-bold text-blue-300/80 mt-1">45% done</p>
                  </div>

                  {/* Progress Ring Overlay */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="48%"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="300 1000"
                      strokeLinecap="round"
                      className="opacity-20"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Nodes & Cards (State-driven Rotating System) */}
            <div
              className="absolute inset-0 z-40 pointer-events-none"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {[
                {
                  pos: 'top',
                  angle: -90,
                  status: 'COMPLETE',
                  statusColor: 'text-green-400',
                  bgColor: 'bg-green-500/20',
                  borderColor: 'border-green-500/40',
                  title: 'Pod assembled & onboarded',
                  icon: <Check className="w-3.5 h-3.5 text-green-400" />,
                  active: true
                },
                {
                  pos: 'right',
                  angle: 0,
                  status: 'COMPLETE',
                  statusColor: 'text-green-400',
                  bgColor: 'bg-green-500/20',
                  borderColor: 'border-green-500/40',
                  title: 'Architecture scoped & approved',
                  icon: <Check className="w-3.5 h-3.5 text-green-400" />,
                  active: true
                },
                {
                  pos: 'bottom',
                  angle: 90,
                  status: 'ACTIVE NOW',
                  statusColor: 'text-blue-400',
                  bgColor: 'bg-blue-500/20',
                  borderColor: 'border-blue-500/40',
                  title: 'AI feature in high-density build',
                  icon: <ArrowRight className="w-3.5 h-3.5 text-white" />,
                  active: true
                },
                {
                  pos: 'left',
                  angle: 180,
                  status: 'UPCOMING',
                  statusColor: 'text-gray-500',
                  bgColor: 'bg-white/5',
                  borderColor: 'border-white/10',
                  title: 'QA, staging & production deploy',
                  icon: <div className="w-1.5 h-1.5 rounded-full border border-gray-600" />,
                  active: false
                },
              ].map((node, idx) => {
                const radius = 210;
                const x = Math.cos(node.angle * (Math.PI / 180)) * radius;
                const y = Math.sin(node.angle * (Math.PI / 180)) * radius;

                return (
                  <div
                    key={idx}
                    className="absolute top-[47%] left-[47%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    {/* Counter-rotating the node content to stay perfectly upright */}
                    <div
                      className="group"
                      style={{ transform: `rotate(${-rotation}deg)` }}
                    >
                      {/* The Node Circle */}
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${node.bgColor} border ${node.borderColor} backdrop-blur-md flex items-center justify-center cursor-pointer transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] relative`}>
                        {node.icon}
                        {node.active && (
                          <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-current pointer-events-none"></div>
                        )}
                      </div>

                      {/* Premium Glass Card (Visible on Hover) */}
                      <div className={`absolute whitespace-nowrap transition-all duration-500 opacity-100 md:opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none z-50
                        ${node.pos === 'top' ? 'bottom-full mb-8 lg:mb-2.5  lg:bottom-auto left-1/2 -translate-x-1/2' : ''}
                        ${node.pos === 'bottom' ? 'top-auto lg:top-full mb-8 lg:mb-0 lg:mt-2.5 bottom-full lg:bottom-auto left-1/2 -translate-x-1/2' : ''}
                        ${node.pos === 'left' ? 'bottom-full lg:bottom-auto lg:right-full left-1/2 lg:left-auto lg:right-1/2 mb-8 lg:mb-0 lg:mr-2.5 top-auto lg:top-1/2 -translate-x-1/2 lg:-translate-x-0 lg:-translate-y-1/2' : ''}
                        ${node.pos === 'right' ? 'bottom-full lg:bottom-auto lg:left-full left-1/2 mb-8 lg:mb-0 lg:ml-2.5 top-auto lg:top-1/2 -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2' : ''}
                      `}>
                        <div className="glass-card p-3 rounded-2xl border-white/20 shadow-2xl bg-dark-900/90 backdrop-blur-2xl min-w-[150px] lg:min-w-[180px] relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>

                          <div className="relative">
                            <div className="flex items-center gap-2 mb-1.5">
                              <div className={`w-1 h-1 rounded-full ${node.statusColor.replace('text-', 'bg-')} shadow-glow`}></div>
                              <p className={`text-[9px] font-black tracking-widest uppercase ${node.statusColor}`}>
                                {node.status}
                              </p>
                            </div>

                            <h4 className="text-[10px] md:text-xs font-bold text-white leading-tight">
                              {node.title.split('&').map((text, i) => (
                                <React.Fragment key={i}>
                                  {text}
                                  {i === 0 && node.title.includes('&') && <br />}
                                </React.Fragment>
                              ))}
                            </h4>

                            {node.active && (
                              <div className="mt-2.5 pt-2.5 border-t border-white/5 flex items-center justify-between">
                                <span className="text-[9px] text-gray-500 font-medium tracking-wide uppercase">PHASE {idx + 1}</span>
                                <Zap className="w-2.5 h-2.5 text-brand-400 fill-brand-400 opacity-50" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Status Pill */}
            <div className="absolute -bottom-8 md:bottom-0 lg:-bottom-22 glass-card py-3 px-8 rounded-full border-white/10 flex items-center gap-4 shadow-2xl">
              <div className="relative flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-30"></div>
              </div>
              <p className="text-sm font-medium text-gray-400">
                Sprint active · <span className="text-white font-extrabold tracking-tight">Day 7 of 14</span> · <span className="text-blue-400 font-bold">45% shipped</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
