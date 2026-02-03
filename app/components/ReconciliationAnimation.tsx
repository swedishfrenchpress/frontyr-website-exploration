'use client';

import { useState, useEffect } from 'react';

export function ReconciliationAnimation() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Loop reset
    const timer = setTimeout(() => {
      setKey(prev => prev + 1);
    }, 4500); // Wait for animations (3 * 0.4s start delay + 1s duration + 2s hold) -> ~4.5s total loop

    return () => clearTimeout(timer);
  }, [key]);

  // Layout Constants
  const viewBoxWidth = 600;
  const viewBoxHeight = 180; // 50% taller than 120
  const rowCount = 3;
  const rowHeight = 45; // Taller gaps
  const startY = 50; 
  
  // Element positions
  const leftX = 50;
  const rightX = 450;
  const rectWidth = 100;
  const rectHeight = 24;
  
  // Line positions
  const lineStartX = leftX + rectWidth + 5; // 155
  const lineEndX = rightX - 5; // 445
  const lineLength = lineEndX - lineStartX; // 290

  return (
    <div className="w-full h-full flex items-center justify-center select-none">
      <svg 
        key={key} 
        className="w-full max-w-2xl h-full" 
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      >
        <defs>
          <filter id="glow-green-dot" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Labels */}
        <text x={leftX + rectWidth/2} y="25" textAnchor="middle" className="text-[10px] font-mono fill-subtle font-semibold uppercase tracking-wide">On-Chain</text>
        <text x={rightX + rectWidth/2} y="25" textAnchor="middle" className="text-[10px] font-mono fill-subtle font-semibold uppercase tracking-wide">Internal Ledger</text>

        {/* Rows */}
        {[0, 1, 2].map((i) => {
          const y = startY + (i * rowHeight);
          const delay = i * 400; // 400ms stagger
          const duration = 1000; // 1s travel time
          
          return (
            <g key={i}>
              
              {/* Left Box (On-Chain) */}
              <rect 
                x={leftX} y={y} width={rectWidth} height={rectHeight} rx="4" 
                fill="white" 
                stroke="#E5E7EB" 
                strokeWidth="1"
                className="transition-colors"
                style={{
                    animation: `highlightBox ${duration}ms forwards`,
                    animationDelay: `${delay + duration}ms` // Highlight when dot arrives (simulated match)
                }}
              />
              <rect x={leftX + 10} y={y + 8} width={rectWidth * 0.5} height="2" rx="1" fill="#E5E7EB" />
              <rect x={leftX + 10} y={y + 14} width={rectWidth * 0.25} height="2" rx="1" fill="#E5E7EB" />

              {/* Right Box (Internal) */}
              <rect 
                x={rightX} y={y} width={rectWidth} height={rectHeight} rx="4" 
                fill="white" 
                stroke="#E5E7EB" 
                strokeWidth="1"
                className="transition-colors"
                style={{
                    animation: `highlightBox ${duration}ms forwards`,
                    animationDelay: `${delay + duration}ms`
                }}
              />
              <rect x={rightX + 10} y={y + 8} width={rectWidth * 0.5} height="2" rx="1" fill="#E5E7EB" />
              <rect x={rightX + 10} y={y + 14} width={rectWidth * 0.25} height="2" rx="1" fill="#E5E7EB" />

              {/* Connecting Line (Background Dashed) */}
              <path 
                d={`M ${lineStartX} ${y + rectHeight/2} L ${lineEndX} ${y + rectHeight/2}`} 
                fill="none" 
                stroke="#E5E7EB" 
                strokeWidth="1" 
                strokeDasharray="4 4"
              />

              {/* Dot / Pulse */}
              <circle 
                r="3" 
                fill="#10B981"
                filter="url(#glow-green-dot)"
                opacity="0"
                style={{
                    offsetPath: `path('M ${lineStartX} ${y + rectHeight/2} L ${lineEndX} ${y + rectHeight/2}')`,
                    animation: `travelDot ${duration}ms linear forwards`,
                    animationDelay: `${delay}ms`
                }}
              />

              {/* Trailing Line (Optional, matches dot path) */}
              {/* Note: Standard SVG stroke-dashoffset animation is easier than trailing a dot perfectly without complex sync. 
                  Let's stick to the user request: "dot/pulse travels". 
                  We can also animate the line color turning solid green BEHIND the dot if desired, but dot is key.
              */}
              <path 
                d={`M ${lineStartX} ${y + rectHeight/2} L ${lineEndX} ${y + rectHeight/2}`} 
                fill="none" 
                stroke="#10B981" 
                strokeWidth="1.5" 
                strokeDasharray={lineLength}
                strokeDashoffset={lineLength}
                style={{
                    animation: `fillLine ${duration}ms linear forwards`,
                    animationDelay: `${delay}ms`
                }}
              />

              {/* Checkmark */}
              <g 
                transform={`translate(${rightX + rectWidth + 20}, ${y + rectHeight/2})`} 
                className="opacity-0"
                style={{
                    animation: `popIn 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`,
                    animationDelay: `${delay + duration}ms`
                }}
              >
                 <circle cx="0" cy="0" r="8" fill="#ECFDF5" />
                 <path d="M-2.5 0.5 L-0.5 2.5 L3 -2" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>

            </g>
          );
        })}

        <style jsx>{`
          @keyframes travelDot {
            0% { offset-distance: 0%; opacity: 1; }
            90% { opacity: 1; }
            100% { offset-distance: 100%; opacity: 0; }
          }
          @keyframes fillLine {
            from { stroke-dashoffset: ${lineLength}; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes popIn {
            from { opacity: 0; transform: translate(${rightX + rectWidth + 20}px, ${startY}px) scale(0.5); } /* Note: transform logic in CSS keyframes within SVG can be tricky with translate, using local transform in group is safer */
            to { opacity: 1; transform: translate(${rightX + rectWidth + 20}px, ${startY}px) scale(1); } /* Wait, we need dynamic Y in keyframes or apply animation to opacity/scale only */
          }
          /* Re-defining popIn to be transform-agnostic (applied to G which is already translated) */
           @keyframes popIn {
            from { opacity: 0; transform: scale(0.5); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes highlightBox {
            to { stroke: #10B981; stroke-width: 1.5px; }
          }
        `}</style>
      </svg>
    </div>
  );
}
