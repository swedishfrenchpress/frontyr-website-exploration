import { GitBranch, History, FileText, RotateCw } from 'lucide-react';

export function Features() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 relative z-10 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-sans text-4xl md:text-5xl font-semibold text-obsidian tracking-tight mb-6 leading-[1.1]">
              Stablecoin-native banking.
              <span className="text-subtle block">Not retrofitted rails.</span>
            </h2>
            <p className="text-subtle text-lg leading-relaxed">
              Frontyr delivers a programmable core built for tokenized dollars,
              real-time settlement, and enterprise-grade compliance.
            </p>
          </div>
          <a href="#" className="pb-1 border-b border-obsidian text-sm font-medium hover:opacity-70 transition-opacity mb-2">
            Explore Platform Capabilities
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Programmable Ledger */}
          <div className="md:col-span-8 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="max-w-md">
                <div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
                  <GitBranch className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold text-obsidian mb-3">
                  Programmable Ledger
                </h3>
                <p className="text-subtle leading-relaxed">
                  Model stablecoin flows and balance-sheet state with full
                  lineage across issuance, settlement, and redemption.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="px-3 py-1 bg-canvas border border-border rounded text-[10px] font-mono text-subtle uppercase tracking-wider group-hover:text-obsidian group-hover:border-obsidian/30 transition-colors">
                  Real-Time Settlement
                </div>
              </div>
            </div>

              {/* Visual */}
              <div className="mt-12 h-32 w-full relative flex items-center border-t border-border/40 pt-6 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 600 100" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <marker id="arrow-head" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                      <path d="M0,0 L4,2 L0,4" fill="#111"></path>
                    </marker>
                  </defs>
                  <path d="M20,50 C100,50 120,20 200,20 C280,20 300,80 380,80 C460,80 480,50 560,50" fill="none" stroke="#E5E5E5" strokeWidth="1.5" strokeDasharray="4 4"></path>

                  <path d="M20,50 C100,50 120,20 200,20 C280,20 300,80 380,80 C460,80 480,50 560,50" fill="none" stroke="#111" strokeWidth="1.5" strokeDasharray="600" strokeDashoffset="600" className="transition-all duration-[1500ms] ease-in-out group-hover:stroke-dashoffset-0" markerEnd="url(#arrow-head)"></path>

                  <g className="transition-all duration-500 delay-0 opacity-100 group-hover:scale-110 origin-center">
                    <circle cx="20" cy="50" r="4" fill="#111"></circle>
                    <text x="20" y="70" textAnchor="middle" className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      INPUT
                    </text>
                  </g>
                  <g className="transition-all duration-500 delay-[400ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
                    <circle cx="200" cy="20" r="4" fill="#fff" stroke="#111" strokeWidth="1.5"></circle>
                    <text x="200" y="40" textAnchor="middle" className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      LOGIC A
                    </text>
                  </g>
                  <g className="transition-all duration-500 delay-[800ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
                    <circle cx="380" cy="80" r="4" fill="#fff" stroke="#111" strokeWidth="1.5"></circle>
                    <text x="380" y="100" textAnchor="middle" className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      LOGIC B
                    </text>
                  </g>
                  <g className="transition-all duration-500 delay-[1200ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
                    <circle cx="560" cy="50" r="4" fill="#111"></circle>
                    <text x="560" y="70" textAnchor="middle" className="text-[8px] font-mono fill-obsidian font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      RESULT
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2: Regulatory Audit */}
          <div className="md:col-span-4 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500 flex flex-col">
            <div className="p-10 relative z-10 flex flex-col h-full">
              <div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
                <History className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-obsidian mb-3">
                Regulatory Audit
              </h3>
              <p className="text-sm text-subtle leading-relaxed mb-8">
                Audit-ready state history with immutable versioning and
                programmable compliance controls.
              </p>

              <div className="mt-auto relative w-full h-32 flex flex-col justify-end items-center">
                <div className="absolute w-[80%] h-12 bg-border/30 border border-border rounded-t-md top-4 scale-90 opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all duration-500 ease-out"></div>
                <div className="absolute w-[90%] h-12 bg-canvas border border-border rounded-t-md top-8 scale-95 opacity-50 group-hover:opacity-80 group-hover:top-6 transition-all duration-500 ease-out delay-75"></div>

                <div className="relative w-full h-16 bg-white border border-border rounded shadow-sm flex items-center px-4 gap-4 z-10 transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:shadow-md">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-bold text-obsidian uppercase tracking-wide">
                        Compliance State
                      </span>
                      <span className="text-[10px] font-mono text-subtle">
                        v1.0.0
                      </span>
                    </div>
                    <div className="h-1 w-full bg-canvas rounded overflow-hidden">
                      <div className="h-full w-2/3 bg-obsidian/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Tokenized Accounts */}
          <div className="md:col-span-12 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
            <div className="p-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 max-w-lg">
                <div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-obsidian mb-2">
                  Tokenized Accounts
                </h3>
                <p className="text-subtle leading-relaxed">
                  Launch stablecoin-based checking, treasury, and liquidity
                  products on a single programmable core.
                </p>
              </div>

              <div className="flex-1 w-full flex items-center justify-center gap-6 h-32 relative">
                <div className="flex flex-col gap-2 relative">
                  <div className="w-10 h-12 bg-white border border-border shadow-sm rounded-sm flex items-center justify-center transition-all duration-700 ease-in-out group-hover:translate-x-12 group-hover:opacity-0 group-hover:scale-50">
                    <div className="w-4 h-0.5 bg-subtle/20"></div>
                  </div>
                  <div className="w-10 h-12 bg-white border border-border shadow-sm rounded-sm flex items-center justify-center absolute top-2 left-2 transition-all duration-700 ease-in-out delay-100 group-hover:translate-x-10 group-hover:opacity-0 group-hover:scale-50">
                    <div className="w-4 h-0.5 bg-subtle/20"></div>
                  </div>
                </div>

                <div className="w-16 h-16 rounded-full border border-dashed border-border flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-t border-obsidian transparent animate-spin [animation-duration:3s] opacity-0 group-hover:opacity-100"></div>
                  <RotateCw className="w-5 h-5 text-subtle group-hover:text-obsidian transition-colors" />
                </div>

                <div className="w-24 h-32 bg-white border border-border shadow-lg rounded-sm p-4 space-y-3 transition-all duration-500 group-hover:shadow-xl group-hover:scale-105">
                  <div className="w-6 h-6 rounded bg-obsidian/5"></div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full bg-obsidian/10 rounded overflow-hidden">
                      <div className="h-full w-0 bg-obsidian group-hover:w-full transition-all duration-700 delay-300 ease-out"></div>
                    </div>
                    <div className="h-1.5 w-3/4 bg-obsidian/10 rounded overflow-hidden">
                      <div className="h-full w-0 bg-obsidian group-hover:w-full transition-all duration-700 delay-500 ease-out"></div>
                    </div>
                    <div className="h-1.5 w-5/6 bg-obsidian/10 rounded overflow-hidden">
                      <div className="h-full w-0 bg-obsidian group-hover:w-full transition-all duration-700 delay-700 ease-out"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
