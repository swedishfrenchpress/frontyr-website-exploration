'use client';

import { useState, useEffect } from 'react';

export function ReconciliationAnimation() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Loop reset
    const timer = setTimeout(() => {
      setKey(prev => prev + 1);
    }, 4500); 

    return () => clearTimeout(timer);
  }, [key]);

  // Layout Constants
  const viewBoxWidth = 600;
  const viewBoxHeight = 180;
  const rowHeight = 60;
  const startY = 45;
  
  // Element positions
  const leftX = 50;
  const rightX = 450;
  const rectWidth = 100;
  const rectHeight = 24;
  
  // Line positions
  const lineStartX = leftX + rectWidth + 5; 
  const lineEndX = rightX - 5; 
  const lineLength = lineEndX - lineStartX; 
  
  // Center of lines/boxes
  const centerY = rectHeight / 2;

  // Colors
  const obsidian = '#0A1628';
  const checkmarkBg = '#F3F4F6';

  // Data for rows
  const rowData = [
    { usdc: "5,000.00", usd: "5,000.00" },
    { usdc: "12,350.00", usd: "12,350.00" }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center select-none group">
      <svg 
        key={key} 
        className="w-full max-w-2xl h-full" 
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      >
        <defs>
          <filter id="glow-obsidian-dot" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Labels */}
        <text x={leftX + rectWidth/2} y="25" textAnchor="middle" className="text-[10px] font-mono fill-subtle font-semibold uppercase tracking-wide">On-Chain</text>
        <text x={rightX + rectWidth/2} y="25" textAnchor="middle" className="text-[10px] font-mono fill-subtle font-semibold uppercase tracking-wide">Internal Ledger</text>

        {/* Rows */}
        {rowData.map((data, i) => {
          const y = startY + (i * rowHeight);
          const delay = i * 400; // 400ms stagger
          const duration = 1000; // 1s travel time
          
          return (
            <g key={i}>
              
              {/* Left Box (On-Chain) */}
              <g className="box-group">
                  {/* Background Rect */}
                  <rect 
                    x={leftX} y={y} width={rectWidth} height={rectHeight} rx="4" 
                    fill="white" 
                    stroke="#E5E7EB" 
                    strokeWidth="1"
                    className="transition-all duration-300 group-hover:fill-canvas group-hover:stroke-border/60"
                    style={{
                        transformBox: 'fill-box',
                        transformOrigin: 'center',
                    }}
                  />
                   {/* This separate rect handles the success border animation independent of hover scaling */}
                   <rect 
                    x={leftX} y={y} width={rectWidth} height={rectHeight} rx="4" 
                    fill="none" 
                    stroke="transparent"
                    strokeWidth="1.5"
                    style={{
                        animation: `highlightBox ${duration}ms forwards`,
                        animationDelay: `${delay + duration}ms`,
                        pointerEvents: 'none'
                    }}
                  />

                  {/* Placeholder Content */}
                  <g className="transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                    <rect x={leftX + 10} y={y + 8} width={rectWidth * 0.5} height="2" rx="1" fill="#E5E7EB" />
                    <rect x={leftX + 10} y={y + 14} width={rectWidth * 0.25} height="2" rx="1" fill="#E5E7EB" />
                  </g>

                  {/* Hover Content */}
                  <g className="opacity-0 transition-all duration-300 group-hover:opacity-100">
                     {/* USDC Icon */}
                     <circle cx={leftX + 16} cy={y + 12} r="6" fill="#2775CA" />
                     <text x={leftX + 16} y={y + 15} textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">$</text>
                     
                     {/* Text */}
                     <text 
                        x={leftX + 28} y={y + 15} 
                        className="text-[9px] font-mono fill-obsidian font-medium"
                     >
                        {data.usdc} <tspan className="fill-subtle font-normal">USDC</tspan>
                     </text>
                  </g>
              </g>

              {/* Right Box (Internal) */}
              <g className="box-group">
                  <rect 
                    x={rightX} y={y} width={rectWidth} height={rectHeight} rx="4" 
                    fill="white" 
                    stroke="#E5E7EB" 
                    strokeWidth="1"
                    className="transition-all duration-300 group-hover:fill-canvas group-hover:stroke-border/60"
                    style={{
                        transformBox: 'fill-box',
                        transformOrigin: 'center',
                    }}
                  />
                   <rect 
                    x={rightX} y={y} width={rectWidth} height={rectHeight} rx="4" 
                    fill="none" 
                    stroke="transparent"
                    strokeWidth="1.5"
                    style={{
                        animation: `highlightBox ${duration}ms forwards`,
                        animationDelay: `${delay + duration}ms`,
                         pointerEvents: 'none'
                    }}
                  />

                   {/* Placeholder Content */}
                   <g className="transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                        <rect x={rightX + 10} y={y + 8} width={rectWidth * 0.5} height="2" rx="1" fill="#E5E7EB" />
                        <rect x={rightX + 10} y={y + 14} width={rectWidth * 0.25} height="2" rx="1" fill="#E5E7EB" />
                   </g>

                   {/* Hover Content */}
                   <g className="opacity-0 transition-all duration-300 group-hover:opacity-100">
                        {/* USD Icon */}
                        <circle cx={rightX + 16} cy={y + 12} r="6" fill="#10B981" />
                        <text x={rightX + 16} y={y + 15} textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">$</text>

                        <text 
                            x={rightX + 28} y={y + 15} 
                            className="text-[9px] font-mono fill-obsidian font-medium"
                        >
                            <tspan className="fill-subtle font-normal">$</tspan>{data.usd}
                        </text>
                    </g>
              </g>

              {/* Connecting Line (Background Dashed) */}
              <path 
                d={`M ${lineStartX} ${y + centerY} L ${lineEndX} ${y + centerY}`} 
                fill="none" 
                stroke="#E5E7EB" 
                strokeWidth="1" 
                strokeDasharray="4 4"
              />

              {/* Dot / Pulse */}
              <circle 
                cx="0" cy="0" // Start at 0 to align with path
                r="3" 
                fill={obsidian}
                filter="url(#glow-obsidian-dot)"
                opacity="0"
                style={{
                    offsetPath: `path('M ${lineStartX} ${y + centerY} L ${lineEndX} ${y + centerY}')`,
                    animation: `travelDot ${duration}ms linear forwards`,
                    animationDelay: `${delay}ms`
                }}
              />

              {/* Trailing Line */}
              <path 
                d={`M ${lineStartX} ${y + centerY} L ${lineEndX} ${y + centerY}`} 
                fill="none" 
                stroke={obsidian} 
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
                transform={`translate(${rightX + rectWidth + 20}, ${y + centerY})`} 
                className="opacity-0"
                style={{
                    animation: `popIn 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`,
                    animationDelay: `${delay + duration}ms`
                }}
              >
                 <circle cx="0" cy="0" r="8" fill={checkmarkBg} />
                 <path d="M-2.5 0.5 L-0.5 2.5 L3 -2" fill="none" stroke={obsidian} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>

            </g>
          );
        })}

        <style jsx>{`
          /* Smoothly animate height and width on hover */
          .group:hover .box-group rect:first-of-type {
            transform: scale(1.25, 1.5); /* Increased scale slightly for better height */
          }
          
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
            from { opacity: 0; transform: scale(0.5); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes highlightBox {
            to { stroke: ${obsidian}; }
          }
        `}</style>
      </svg>
    </div>
  );
}
