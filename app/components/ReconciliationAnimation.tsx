'use client';

import { useEffect, useState } from 'react';

export function ReconciliationAnimation() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const runSequence = () => {
      // Phase 0: Start (Initial State)
      setPhase(0);

      // Phase 1: Reveal Point 1 and start drawing to Point 2
      timer = setTimeout(() => {
        setPhase(1);

        // Phase 2: Reach Point 2, reveal label, start drawing to Point 3
        timer = setTimeout(() => {
          setPhase(2);

          // Phase 3: Reach Point 3, reveal final label
          timer = setTimeout(() => {
            setPhase(3);

            // Reset loop
            timer = setTimeout(() => {
              runSequence();
            }, 4000); // Hold final state for a bit
          }, 1500); // Travel time P2 -> P3
        }, 1500); // Travel time P1 -> P2
      }, 500); // Initial delay
    };

    runSequence();

    return () => clearTimeout(timer);
  }, []);

  // Path for 3 points: Start(20,60) -> Middle(300,20) -> End(580,60)
  const pathD = "M20,60 C150,60 180,20 300,20 C420,20 450,60 580,60";
  const pathLength = 600; // Approximate length for dashoffset calculation

  // Calculate stroke-dashoffset based on phase
  // Phase 0: Hidden (offset = length)
  // Phase 1: Point 1 to Point 2 (animating) -> We want to animate to ~50%
  // Phase 2: Point 2 (at ~50%) to Point 3 -> Animate to 0%
  // Phase 3: Full (offset = 0)

  // Actually, let's use CSS transitions for smooth drawing.
  // We'll set the target offset in the style.

  const getDashOffset = () => {
    if (phase === 0) return pathLength;
    if (phase === 1) return pathLength * 0.5; // Draw half way (to middle point)
    if (phase === 2) return 0; // Draw to end
    if (phase === 3) return 0;
    return pathLength;
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent">
      <svg className="w-full h-full max-w-[600px] overflow-visible" viewBox="0 0 600 120">
        <defs>
          <marker id="arrow-head-reconcile" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
            <path d="M0,0 L4,2 L0,4" fill="#111" />
          </marker>
        </defs>

        {/* --- Background Path (Dotted) --- */}
        <path
          d={pathD}
          fill="none"
          stroke="#E5E5E5"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* --- Animated Path (Solid) --- */}
        <path
          d={pathD}
          fill="none"
          stroke="#111"
          strokeWidth="1.5"
          strokeDasharray={pathLength}
          strokeDashoffset={getDashOffset()}
          className="transition-[stroke-dashoffset] duration-[1500ms] ease-in-out"
          markerEnd="url(#arrow-head-reconcile)"
        />

        {/* --- Points & Labels --- */}

        {/* Point 1: Origin (Left) */}
        <g className={`transition-all duration-500 ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <circle cx="20" cy="60" r="4" fill="#111" />
          {/* Label Box */}
          <foreignObject x="-20" y="75" width="100" height="60" style={{ overflow: 'visible' }}>
             <div className="bg-white border border-border shadow-sm rounded-md p-2 flex flex-col items-center gap-1 w-max">
                <div className="text-[10px] font-mono font-medium text-rose-600">-100 USD</div>
                <div className="text-[10px] font-mono font-medium text-emerald-600">+100 USDC</div>
             </div>
          </foreignObject>
        </g>

        {/* Point 2: Middle (Top) */}
        <g className={`transition-all duration-500 delay-300 ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <circle cx="300" cy="20" r="4" fill={phase >= 2 ? "#fff" : "#111"} stroke="#111" strokeWidth="1.5" />
          {/* Label Box */}
           <foreignObject x="250" y="35" width="100" height="40" style={{ overflow: 'visible' }}>
             <div className="bg-white border border-border shadow-sm rounded-md p-2 flex flex-col items-center gap-1 w-max mx-auto">
                <div className="text-[10px] font-mono font-medium text-rose-600">-100 USDC</div>
             </div>
          </foreignObject>
        </g>

        {/* Point 3: Final (Right) */}
        <g className={`transition-all duration-500 delay-300 ${phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <circle cx="580" cy="60" r="4" fill="#111" />
           {/* Label Box */}
           <foreignObject x="510" y="75" width="140" height="80" style={{ overflow: 'visible' }}>
             <div className="bg-white border border-border shadow-sm rounded-md p-2 flex flex-col items-start gap-1 w-max">
                <div className="flex items-center gap-2 w-full justify-between">
                   <span className="text-[10px] font-mono font-medium text-rose-600">-100 USD</span>
                   <span className="text-[8px] text-subtle uppercase tracking-tighter">Bank</span>
                </div>
                <div className="flex items-center gap-2 w-full justify-between">
                   <span className="text-[10px] font-mono font-medium text-emerald-600">+100 USDC</span>
                   <span className="text-[8px] text-subtle uppercase tracking-tighter">Mint</span>
                </div>
                <div className="flex items-center gap-2 w-full justify-between border-t border-border/50 pt-1 mt-0.5">
                   <span className="text-[10px] font-mono font-medium text-rose-600">-100 USDC</span>
                   <span className="text-[8px] text-subtle uppercase tracking-tighter">Burn</span>
                </div>
             </div>
          </foreignObject>
        </g>

      </svg>
    </div>
  );
}
