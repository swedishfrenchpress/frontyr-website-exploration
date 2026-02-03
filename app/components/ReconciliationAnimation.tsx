'use client';

import { useState, useEffect } from 'react';

export function ReconciliationAnimation() {
  // phases: 0=init, 1=match1, 2=match2, 3=match3, 4=done/reset
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Sequence timing
    const timeouts: NodeJS.Timeout[] = [];

    const loop = () => {
      setPhase(0);
      
      // Start Match 1
      timeouts.push(setTimeout(() => setPhase(1), 500));
      // Start Match 2
      timeouts.push(setTimeout(() => setPhase(2), 1600)); // 1.1s for first match
      // Start Match 3
      timeouts.push(setTimeout(() => setPhase(3), 2700)); // 1.1s for second match
      // Finish / Reset
      timeouts.push(setTimeout(() => {
        setPhase(4); 
        // Restart loop
        timeouts.push(setTimeout(loop, 2000));
      }, 4000));
    };

    loop();

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center select-none">
      <svg className="w-full max-w-lg h-32" viewBox="0 0 500 120">
        <defs>
          <marker id="check-marker" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M2,4 L3.5,6 L6,2" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        {/* Labels */}
        <text x="80" y="20" textAnchor="middle" className="text-[10px] font-mono fill-subtle font-semibold uppercase tracking-wide">On-Chain</text>
        <text x="420" y="20" textAnchor="middle" className="text-[10px] font-mono fill-subtle font-semibold uppercase tracking-wide">Internal Ledger</text>

        {/* Rows */}
        {[0, 1, 2].map((i) => {
          // Status based on phase
          // phase 1: row 0 matching
          // phase 2: row 0 matched, row 1 matching
          // phase 3: row 0,1 matched, row 2 matching
          // phase 4: all matched
          
          let state = 'waiting'; // waiting, matching, matched
          if (phase > i) state = 'matched';
          if (phase === i + 1) state = 'matching';
          if (phase === 0) state = 'waiting';

          const y = 40 + (i * 30);
          
          // Staggered opacity for initial appearance
          const rowOpacity = phase === 0 ? 0.6 : 1;

          return (
            <g key={i} className="transition-opacity duration-500" style={{ opacity: rowOpacity }}>
              
              {/* Left Box (On-Chain) */}
              <rect 
                x="40" y={y} width="80" height="20" rx="4" 
                fill="white" 
                stroke={state === 'matched' ? '#10B981' : '#E5E7EB'} 
                strokeWidth={state === 'matched' ? 1.5 : 1}
                className="transition-colors duration-500"
              />
              <rect x="50" y={y + 6} width="40" height="2" rx="1" fill="#E5E7EB" />
              <rect x="50" y={y + 12} width="20" height="2" rx="1" fill="#E5E7EB" />

              {/* Right Box (Internal) */}
              <rect 
                x="380" y={y} width="80" height="20" rx="4" 
                fill="white" 
                stroke={state === 'matched' ? '#10B981' : '#E5E7EB'} 
                strokeWidth={state === 'matched' ? 1.5 : 1}
                className="transition-colors duration-500"
              />
              <rect x="390" y={y + 6} width="40" height="2" rx="1" fill="#E5E7EB" />
              <rect x="390" y={y + 12} width="20" height="2" rx="1" fill="#E5E7EB" />

              {/* Connecting Line */}
              {/* Dashed line background */}
              <path 
                d={`M 125 ${y + 10} L 375 ${y + 10}`} 
                fill="none" 
                stroke="#E5E7EB" 
                strokeWidth="1" 
                strokeDasharray="4 4"
                opacity={state !== 'waiting' ? 0.5 : 1}
              />

              {/* Animated Progress Line */}
              <path 
                d={`M 125 ${y + 10} L 375 ${y + 10}`} 
                fill="none" 
                stroke="#10B981" 
                strokeWidth="1.5" 
                strokeDasharray="250"
                strokeDashoffset={state === 'waiting' ? 250 : 0}
                className={`transition-[stroke-dashoffset] ease-linear ${state === 'matching' ? 'duration-[1000ms]' : 'duration-0'}`}
              />

              {/* Checkmark at the end */}
              <g 
                transform={`translate(470, ${y + 10})`} 
                className={`transition-all duration-300 ${state === 'matched' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
              >
                 <circle cx="0" cy="0" r="8" fill="#ECFDF5" />
                 <path d="M-2.5 0.5 L-0.5 2.5 L3 -2" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>

            </g>
          );
        })}

      </svg>
    </div>
  );
}
