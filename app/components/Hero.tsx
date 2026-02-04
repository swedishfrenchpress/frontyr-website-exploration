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
              <h1 className="font-sans text-5xl md:text-7xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95]">
                <span className="text-subtle">Legacy cores weren't built for the </span>next frontier of banking.
              </h1>
              <p className="max-w-xl font-sans text-lg text-subtle leading-relaxed">
                Your customers expect instant. Your infrastructure should too. Frontyr bridges traditional banking with stablecoin rails—so you never close.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="group relative isolate overflow-hidden bg-obsidian text-white text-sm font-semibold px-8 py-3.5 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_16px_-4px_rgba(10,22,40,0.25)] ring-1 ring-white/10 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_4px_20px_-4px_rgba(10,22,40,0.4)] flex items-center gap-2 cursor-pointer">
                <span className="relative z-10">See Frontyr in Action</span>
                <div className="absolute inset-0 bg-gradient-to-t from-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button className="group px-8 py-3.5 bg-white text-obsidian border border-border/80 text-sm font-medium rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:bg-canvas hover:border-obsidian/30 hover:shadow-[0_2px_8px_-2px_rgba(10,22,40,0.12)] cursor-pointer">
                <span className="relative">
                  Read the Docs
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-obsidian/40 group-hover:w-full transition-all duration-300 ease-out" />
                </span>
              </button>
            </motion.div>

            <motion.div
              className="flex flex-nowrap items-center gap-6 text-xs text-subtle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Settle in seconds, not days
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Compliance built in, not bolted on
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                One ledger for fiat and stablecoins
              </div>
            </motion.div>
        </div>

        {/* Right Column: Technical Illustration */}
        <motion.div 
            className="relative w-full aspect-square flex items-center justify-center lg:justify-end lg:order-2 order-first"
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
                        <defs>
                            {/* Subtle glow filter for the center star */}
                            <filter id="star-glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                            {/* Gradient for the rings */}
                            <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#0A1628" stopOpacity="0.4" />
                                <stop offset="50%" stopColor="#0A1628" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#0A1628" stopOpacity="0.4" />
                            </linearGradient>
                            {/* Radial glow for depth */}
                            <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#0A1628" stopOpacity="0.08" />
                                <stop offset="100%" stopColor="#0A1628" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        
                        {/* Background radial glow */}
                        <circle cx="200" cy="200" r="160" fill="url(#center-glow)" />
                        
                        {/* Outermost Ring - Faintest, slow pulse */}
                        <circle cx="200" cy="200" r="160" fill="none" stroke="#0A1628" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.08" className="animate-[spin_60s_linear_infinite_reverse]" style={{ transformOrigin: 'center' }} />
                        
                        {/* Outer Ring - Dashed */}
                        <circle cx="200" cy="200" r="140" fill="none" stroke="#0A1628" strokeWidth="1" strokeDasharray="4 4" opacity="0.12" />
                        
                        {/* Middle Ring - Solid with gradient */}
                        <circle cx="200" cy="200" r="100" fill="none" stroke="url(#ring-gradient)" strokeWidth="1.5" />

                        {/* Innermost Ring - Rotating with tick marks */}
                        <g className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: 'center' }}>
                            <circle cx="200" cy="200" r="60" fill="none" stroke="#0A1628" strokeWidth="1.5" opacity="0.7" strokeDasharray="200 180" />
                            {/* Tick marks around the ring */}
                            <line x1="200" y1="135" x2="200" y2="145" stroke="#0A1628" strokeWidth="2" strokeLinecap="round" />
                            <line x1="260" y1="200" x2="255" y2="200" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                        </g>
                        
                        {/* Secondary rotating ring - opposite direction */}
                        <g className="animate-[spin_30s_linear_infinite_reverse]" style={{ transformOrigin: 'center' }}>
                            <circle cx="200" cy="200" r="80" fill="none" stroke="#0A1628" strokeWidth="0.75" opacity="0.2" strokeDasharray="8 12" />
                        </g>

                        {/* Center Star - with subtle shadow/glow */}
                        <g filter="url(#star-glow)">
                            <path 
                                d="M200 160 L210 190 L240 200 L210 210 L200 240 L190 210 L160 200 L190 190 Z" 
                                fill="#0A1628"
                            />
                        </g>
                        
                        {/* Inner subtle star highlight */}
                        <path 
                            d="M200 170 L206 190 L226 200 L206 210 L200 230 L194 210 L174 200 L194 190 Z" 
                            fill="none"
                            stroke="#0A1628"
                            strokeWidth="0.5"
                            opacity="0.3"
                        />
                        
                        {/* Orbital dots */}
                        <g className="animate-[spin_25s_linear_infinite]" style={{ transformOrigin: 'center' }}>
                            <circle cx="200" cy="60" r="3" fill="#0A1628" opacity="0.4" />
                        </g>
                        <g className="animate-[spin_35s_linear_infinite_reverse]" style={{ transformOrigin: 'center' }}>
                            <circle cx="310" cy="260" r="2" fill="#0A1628" opacity="0.25" />
                        </g>

                    </svg>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
