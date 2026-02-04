'use client';

import { useEffect, useState, useRef } from 'react';

export function ReconciliationAnimation() {
  const [step, setStep] = useState(0);
  const [pathLength, setPathLength] = useState(600);
  const pathRef = useRef<SVGPathElement>(null);

  // Measure path length on mount for perfect sync
  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const runSequence = () => {
      // Step 0: Initial State (P1 Visible, Line Hidden at start)
      setStep(0);

      // Start Animation
      timer = setTimeout(() => {
        // Step 1: Trigger Line Animation (Draws to end over 2.4s)
        setStep(1);

        // Step 2: Midpoint (1.2s) -> Show P2
        timer = setTimeout(() => {
          setStep(2);

          // Step 3: End (2.4s) -> Show P3
          timer = setTimeout(() => {
            setStep(3);

            // Step 4: Hold then Reset
            timer = setTimeout(() => {
              runSequence();
            }, 3000); // Hold for 3s
          }, 1200); // 2nd leg duration (1.2s)
        }, 1200); // 1st leg duration (1.2s)
      }, 100); // Short delay before starting
    };

    runSequence();

    return () => clearTimeout(timer);
  }, []);

  // Path for 3 points: Start(20,60) -> Middle(300,20) -> End(580,60)
  const pathD = "M20,60 C150,60 180,20 300,20 C420,20 450,60 580,60";
  
  // Animation duration matches the sequence timing (1200ms * 2 = 2400ms)
  const animDuration = 2400;

  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent">
      <svg className="w-full h-full max-w-[900px] overflow-visible" viewBox="-50 -10 720 150">
        <defs>
          <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
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
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="#0A1628" // Dark Navy (Obsidian)
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={pathLength}
          style={{ 
            strokeDashoffset: step === 0 ? pathLength : 0,
            transition: step === 0 ? 'none' : `stroke-dashoffset ${animDuration}ms ease-in-out`
          }}
        />

        {/* --- Points & Labels --- */}

        {/* Point 1: Origin (Left) - Always visible in loop, fades in initially */}
        <g className="transition-all duration-500 opacity-100 translate-y-0">
          <circle cx="20" cy="60" r="4" fill="#0A1628" />
          {/* Label Box */}
          <foreignObject x="-30" y="75" width="100" height="60" style={{ overflow: 'visible' }}>
             <div className={`
               bg-white border border-border shadow-sm rounded-md p-2 flex flex-col items-center gap-1 w-max
               transition-all duration-500
               ${step >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
             `}>
                <div className="text-[10px] font-mono font-medium text-rose-600">-100 USD</div>
                <div className="text-[10px] font-mono font-medium text-emerald-600">+100 USDC</div>
             </div>
          </foreignObject>
        </g>

        {/* Point 2: Middle (Top) */}
        <g className={`transition-all duration-500 delay-[50ms] ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
          <circle cx="300" cy="20" r="4" fill="#0A1628" />
          {/* Label Box */}
           <foreignObject x="250" y="35" width="100" height="40" style={{ overflow: 'visible' }}>
             <div className={`
                bg-white border border-border shadow-sm rounded-md p-2 flex flex-col items-center gap-1 w-max mx-auto
                transition-all duration-500
                ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
             `}>
                <div className="text-[10px] font-mono font-medium text-rose-600">-100 USDC</div>
             </div>
          </foreignObject>
        </g>

        {/* Point 3: Final (Right) */}
        <g className={`transition-all duration-500 delay-[50ms] ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>
          <circle cx="580" cy="60" r="4" fill="#0A1628" />
           {/* Label Box */}
           <foreignObject x="510" y="75" width="140" height="80" style={{ overflow: 'visible' }}>
             <div className={`
                bg-white border border-border shadow-sm rounded-md p-2 flex flex-col items-start gap-1 w-max
                transition-all duration-500
                ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
             `}>
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
