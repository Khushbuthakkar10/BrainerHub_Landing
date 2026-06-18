import React, { useState, useEffect } from 'react';
import logo from '../../assets/brainerhub_logo_dark.png';
import { ArrowRight } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 py-5 w-full transition-all duration-300 ${scrolled
        ? 'border-b border-brand-500/30 bg-dark-900/80 backdrop-blur-2xl py-4'
        : 'border-b border-white/5 bg-dark-900/60 backdrop-blur-xl'
      }`}>
      <div className="section-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center group cursor-pointer">
            <img
              src={logo}
              alt="BrainerHub"
              className="h-8 lg:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>

          <nav className="hidden md:flex items-center gap-7 lg:gap-10">
            <a href="#protocol" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Protocol</a>
            <a href="#offer" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Offers</a>
            <a href="#pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#payment" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Payment Protocol</a>
            <a href="#faq" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-6">
            {/* <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors hidden sm:block">Log in</button> */}
            <button className="btn-primary text-base py-2 lg:py-2.5 px-4 lg:px-5 group/btn w-full sm:w-auto" onClick={() =>
              window.open("https://cal.com/aadi-raj-sinh-tmtqkm/30min", "_blank")
            }>
              <span>Book a call</span>
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
