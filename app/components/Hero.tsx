'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 technical-grid opacity-35"></div>
        <div className="absolute -top-48 -left-48 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(10,22,40,0.14),transparent_65%)]"></div>
        <div className="absolute -bottom-44 right-[-120px] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(10,22,40,0.08),transparent_70%)]"></div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start space-y-8 relative z-10 text-left">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border/60 shadow-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-sans text-[13px] font-semibold text-subtle tracking-tight">
                  SOC 2 Compliant
                </span>
              </div>
              <h1 className="font-sans text-5xl md:text-7xl lg:text-7xl font-bold tracking-[-0.03em] text-obsidian leading-[0.95]">
                The core banking platform <span className="text-subtle">for the future of finance.</span>
              </h1>
              <p className="max-w-xl font-sans text-lg text-subtle leading-relaxed">
                Frontyr provides the programmable, compliant, and real-time rails needed to build next-generation financial products on stablecoin settlement layers.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="group relative isolate overflow-hidden bg-obsidian text-white text-sm font-semibold px-8 py-3.5 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-300 hover:bg-obsidian/90 hover:scale-[1.02] hover:shadow-lg flex items-center gap-2 cursor-pointer">
                <span className="relative z-10">Book a Demo</span>
              </button>
              <button className="px-8 py-3.5 bg-white text-obsidian border border-border text-sm font-medium rounded-xl shadow-sm transition-all duration-300 hover:bg-gray-50 hover:border-obsidian/40 hover:text-black hover:shadow-md cursor-pointer">
                View Documentation
              </button>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-6 text-xs text-subtle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-obsidian/60"></span>
                Real-time settlement
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-obsidian/60"></span>
                Programmable compliance
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-obsidian/60"></span>
                API-first core ledger
              </div>
            </motion.div>
        </div>

        {/* Right Column: Technical Illustration */}
        <motion.div 
            className="relative w-full aspect-square flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="relative w-full max-w-lg aspect-square rounded-lg p-8 overflow-visible">
                {/* Background Grid Pattern - subtle */}
                <div className="absolute inset-0 opacity-20" style={{ 
                    backgroundImage: 'radial-gradient(#0A1628 0.5px, transparent 0.5px)', 
                    backgroundSize: '24px 24px' 
                }}></div>

                {/* Center SVG Composition */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
                        {/* Outer Ring - Lightest */}
                        <circle cx="200" cy="200" r="140" fill="none" stroke="#0A1628" strokeWidth="1" strokeDasharray="4 4" opacity="0.1" />
                        
                        {/* Middle Ring - Medium */}
                        <circle cx="200" cy="200" r="100" fill="none" stroke="#0A1628" strokeWidth="1" opacity="0.25" />

                        {/* Innermost Ring - Darkest & Rotating */}
                        <g className="animate-[spin_15s_linear_infinite] origin-center">
                            <circle cx="200" cy="200" r="60" fill="none" stroke="#0A1628" strokeWidth="1.5" opacity="0.8" strokeDasharray="280 100" />
                            {/* Tick mark on ring */}
                             <line x1="200" y1="135" x2="200" y2="145" stroke="#0A1628" strokeWidth="2" />
                        </g>

                        {/* Center Star - Geometric & Sharp */}
                        <path 
                            d="M200 160 L210 190 L240 200 L210 210 L200 240 L190 210 L160 200 L190 190 Z" 
                            fill="#0A1628" 
                        />

                    </svg>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
