import React from 'react';
import logo from '../assets/brainerhub_logo_dark.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/15 bg-dark-900 py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo Section */}
          <div className="flex items-center group cursor-pointer">
            <img
              src={logo}
              alt="BrainerHub"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>

          {/* Copyright Section */}
          <div className="text-sm text-gray-500 font-medium">
            © {currentYear} BrainerHub. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
