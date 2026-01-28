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
    <header className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 md:px-12 transition-all duration-300 border-b border-border/50 ${
      isScrolled ? 'bg-white/90 shadow-sm' : 'bg-canvas/90'
    } backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 100 100" className="w-6 h-6 fill-obsidian">
            <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" />
          </svg>
          <span className="font-sans text-sm font-bold tracking-tight text-obsidian">
            FRONTYR
          </span>
        </div>

        <div className="flex items-center">
          <button className="group relative isolate overflow-hidden bg-obsidian text-white text-xs font-semibold px-6 py-2.5 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.04] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:ring-offset-1">
            <span className="relative z-20">Book a Demo</span>
          </button>
        </div>
      </div>
    </header>
  );
}
