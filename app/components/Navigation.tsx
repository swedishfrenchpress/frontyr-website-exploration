'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

function SpotlightButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const divRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <button
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden cursor-pointer ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`,
        }}
      />
      {children}
    </button>
  );
}

export function Navigation() {
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(250, 250, 250, 0.8)', 'rgba(255, 255, 255, 0.95)']
  );
  
  const borderColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(0, 0, 0, 0)', 'rgba(229, 231, 235, 0.4)']
  );
  
  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    ['none', '0 1px 3px rgba(0,0,0,0.05), 0 8px 24px -12px rgba(0,0,0,0.1)']
  );

  return (
    <motion.header 
      style={{ 
        backgroundColor, 
        borderBottomWidth: 1, 
        borderBottomStyle: 'solid', 
        borderBottomColor: borderColor, 
        boxShadow 
      }}
      className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 md:px-12 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300"
    >
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
          <SpotlightButton className="group isolate bg-obsidian text-white text-xs font-semibold px-6 py-2.5 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_-2px_rgba(10,22,40,0.15)] ring-1 ring-white/10 transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_4px_16px_-2px_rgba(10,22,40,0.3)] hover:ring-white/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-obsidian/30 focus-visible:ring-offset-2">
            <span className="relative z-20">Book a Demo</span>
            <div className="absolute inset-0 bg-gradient-to-t from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </SpotlightButton>
        </div>
      </div>
    </motion.header>
  );
}
