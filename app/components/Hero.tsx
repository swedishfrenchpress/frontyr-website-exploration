import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20 gap-12">
      {/* Hero Text - Centered */}
      <div className="max-w-3xl text-center space-y-8 relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-border/60 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="font-sans text-[13px] font-semibold text-subtle tracking-tight">
              SOC 2 Compliant
            </span>
          </div>
          <h1 className="font-sans text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-obsidian leading-[0.95]">
            Stablecoin
            <br />
            <span className="text-subtle">Banking Core.</span>
          </h1>
          <p className="max-w-xl mx-auto font-sans text-base text-subtle leading-relaxed">
            Frontyr builds a modern, programmable banking core designed from
            the ground up for stablecoins, tokenized dollars, and real-time
            settlement.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="group relative isolate overflow-hidden bg-obsidian text-white text-sm font-semibold px-8 py-3.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:ring-offset-2 flex items-center gap-2">
            <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none animate-shimmer"></div>
            <span className="relative z-10">Request Platform Brief</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button className="px-8 py-3.5 bg-white text-obsidian border border-border text-sm font-medium rounded shadow-sm transition-all duration-300 ease-out hover:bg-gray-50 hover:border-obsidian/40 hover:text-black hover:shadow-md active:scale-[0.97] active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-obsidian/10 focus:ring-offset-2">
            Platform Overview
          </button>
        </div>
      </div>

      {/* Illustration - Below Hero */}
      <div className="relative w-full max-w-2xl aspect-[16/9] flex items-center justify-center mt-8">
        <div className="absolute inset-0 bg-gradient-to-tr from-canvas via-white to-canvas opacity-50 blur-3xl"></div>
        <div className="premium-card w-full h-full p-6 relative overflow-hidden rounded-xl bg-white border border-[#EAEAEA] shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_-4px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(0,0,0,0.03),0_12px_24px_-6px_rgba(0,0,0,0.06)] hover:border-[#D4D4D4]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-obsidian to-transparent"></div>
          {/* Mock UI: Node Graph */}
          <div className="h-full w-full flex flex-col">
            <div className="flex justify-between items-center mb-6 border-b border-border/50 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-border"></div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-subtle">
                  Stablecoin Core Graph
                </span>
              </div>
              <div className="flex gap-2">
                <span className="w-12 h-1.5 rounded-full bg-border/50"></span>
              </div>
            </div>
            <div className="flex-1 relative">
              {/* SVG Graph */}
              <svg className="w-full h-full" viewBox="0 0 400 200">
                {/* Active Signal Path */}
                <path d="M50,100 C100,100 100,50 150,50" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                <path d="M50,100 C100,100 100,150 150,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                <path d="M150,50 C200,50 200,80 250,80" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                <path d="M150,150 C200,150 200,120 250,120" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                <path d="M250,80 L320,100" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                <path d="M250,120 L320,100" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>

                <path d="M50,100 C100,100 100,50 150,50 C200,50 200,80 250,80 L320,100" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" className="animate-signal" style={{ strokeDasharray: '60 400' }}></path>

                {/* Nodes & Text */}
                <circle cx="50" cy="100" r="6" fill="#111" className="origin-[50px_100px] animate-[pulse-context_6s_infinite_ease-out]"></circle>
                <text x="50" y="125" textAnchor="middle" className="font-jakarta text-[10px] font-semibold fill-[#111]">
                  Issuance
                </text>

                <rect x="130" y="40" width="60" height="20" rx="4" fill="white" stroke="#111" strokeWidth="1.5" className="origin-[160px_50px] animate-[pulse-assumptions_6s_infinite_ease-out]"></rect>
                <text x="160" y="53" textAnchor="middle" className="font-jakarta text-[9px] font-semibold fill-[#111]" dy="1">
                  Compliance
                </text>

                <rect x="130" y="140" width="60" height="20" rx="4" fill="white" stroke="#E5E5E5"></rect>
                <rect x="230" y="110" width="50" height="20" rx="4" fill="#F5F5F7"></rect>

                <rect x="230" y="70" width="50" height="20" rx="4" fill="white" stroke="#111" strokeWidth="1.5" className="origin-[255px_80px] animate-[pulse-evidence_6s_infinite_ease-out]"></rect>
                <text x="255" y="83" textAnchor="middle" className="font-jakarta text-[9px] font-semibold fill-[#111]" dy="1">
                  Treasury
                </text>

                <circle cx="320" cy="100" r="12" fill="#111" className="origin-[320px_100px] animate-[pulse-outcome_6s_infinite_ease-out]"></circle>
                <path d="M316 100l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-[check-draw_6s_linear_infinite]" style={{ strokeDasharray: 12 }}></path>
                <text x="320" y="128" textAnchor="middle" className="font-jakarta text-[10px] font-semibold fill-[#111]">
                  Settlement
                </text>
              </svg>

              {/* Floating Label */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-obsidian text-white text-[10px] font-medium px-3 py-1.5 rounded shadow-xl">
                Real-Time: 24/7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
