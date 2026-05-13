import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll offset
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-dark-900/40 backdrop-blur-xl border border-white/40 hover:border-brand-500/80 transition-all duration-300 shadow-2xl shadow-brand-500/80 hover:shadow-brand-500/40"
        aria-label="Scroll to top"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-brand-gradient opacity-0 group-hover:opacity-20 transition-opacity blur-md"></div>

        <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" />
      </button>
    </div>
  );
}
