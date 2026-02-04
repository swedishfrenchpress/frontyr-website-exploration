'use client';

import { useEffect, useState } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 md:px-12 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'bg-white/95 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_8px_24px_-12px_rgba(0,0,0,0.1)] border-b border-border/40' 
        : 'bg-canvas/80 border-b border-transparent'
    } backdrop-blur-xl backdrop-saturate-150`}>
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative">
            <svg viewBox="0 0 100 100" className="w-6 h-6 fill-obsidian transition-transform duration-300 group-hover:scale-110">
              <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" />
            </svg>
            <div className="absolute inset-0 bg-obsidian/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>
          <span className="font-sans text-sm font-bold tracking-tight text-obsidian">
            FRONTYR
          </span>
        </a>

        <div className="flex items-center">
          <button className="group relative isolate overflow-hidden bg-obsidian text-white text-xs font-semibold px-6 py-2.5 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_-2px_rgba(10,22,40,0.15)] ring-1 ring-white/10 transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_4px_16px_-2px_rgba(10,22,40,0.3)] hover:ring-white/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-obsidian/30 focus-visible:ring-offset-2">
            <span className="relative z-20">Book a Demo</span>
            <div className="absolute inset-0 bg-gradient-to-t from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </header>
  );
}
