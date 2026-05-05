import React from 'react';
import logo from '../assets/brainerhub_logo_dark.png';
import { ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 py-5 w-full border-b border-white/5 bg-dark-900/60 backdrop-blur-xl">
      <div className="section-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center group cursor-pointer">
            <img
              src={logo}
              alt="BrainerHub"
              className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#offers" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Offers</a>
          </nav>

          <div className="flex items-center gap-6">
            {/* <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors hidden sm:block">Log in</button> */}
            <button className="btn-primary text-base py-2 md:py-2.5 px-4 md:px-5 group/btn w-full sm:w-auto">
              <span>Book a call</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
