'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const DocumentIcon = ({ className, contentRows = 1, variant = 'solid' }: { className?: string, contentRows?: number, variant?: 'outline' | 'solid' }) => (
  <svg viewBox="0 0 24 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Main Rect */}
    <rect 
      x="0.5" y="0.5" width="23" height="31" rx="1" 
      fill={variant === 'solid' ? "white" : "none"} 
      stroke={variant === 'solid' ? "#E5E7EB" : "#9CA3AF"} 
      strokeWidth={variant === 'solid' ? 1.5 : 1}
      strokeDasharray={variant === 'solid' ? "none" : "3 3"}
      strokeOpacity={1}
      vectorEffect="non-scaling-stroke"
    />
    
    {/* Header Bar */}
    <rect 
      x="3" y="4" width="18" height="3" rx="0.5" 
      fill={variant === 'solid' ? "#E5E7EB" : "none"} 
      stroke={variant === 'outline' ? "#9CA3AF" : "none"}
      strokeWidth={variant === 'outline' ? 1 : 0}
      strokeDasharray={variant === 'outline' ? "2 2" : "none"}
      strokeOpacity={1}
    />
    
    {/* Content Lines */}
    <g fill={variant === 'solid' ? "#E5E7EB" : "#9CA3AF"}>
       {variant === 'solid' ? (
         <>
           <rect x="3" y="10" width="14" height="1.5" rx="0.5" />
           {contentRows >= 1 && <rect x="3" y="14" width="18" height="1" rx="0.5" /> }
           {contentRows >= 2 && <rect x="3" y="17" width="12" height="1" rx="0.5" /> }
           {contentRows >= 2 && <rect x="3" y="20" width="16" height="1" rx="0.5" /> }
           {contentRows >= 3 && <rect x="3" y="23" width="10" height="1" rx="0.5" /> }
           {contentRows >= 3 && <rect x="3" y="26" width="14" height="1" rx="0.5" /> }
         </>
       ) : (
         /* Subtle lines for outline mode */
         <>
           <rect x="3" y="10" width="14" height="1" rx="0.5" fillOpacity="0.5" />
           <rect x="3" y="14" width="18" height="1" rx="0.5" fillOpacity="0.5" />
           <rect x="3" y="17" width="12" height="1" rx="0.5" fillOpacity="0.5" />
         </>
       )}
    </g>
  </svg>
);

export function ReconciliationAnimation() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);
  
  // Animation Controls
  useEffect(() => {
    // The main loop
    const runAnimation = async () => {
      if (isHovered) return; 
      
      progress.set(0);
      
      // Animate 0 -> 1 with smooth easeOut
      await animate(progress, 1, {
        duration: 5,
        ease: "easeOut", // Smoother, no bounce
        onComplete: () => {}
      });
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      runAnimation();
    };

    runAnimation();

    return () => {
      progress.stop();
    };
  }, [isHovered, progress]);

  // Derived transforms
  
  // Opacity: Left/Right papers fade out around 0.5
  // We keep them visible (1) longer to ensure no flickering
  const papersOpacity = useTransform(progress, [0, 0.45, 0.5], [1, 1, 0]);
  
  // Scale: Merged paper smooth transition (no overshoot)
  const mergedScale = useTransform(progress, [0.45, 0.6], [0.9, 1]); 
  const mergedOpacity = useTransform(progress, [0.45, 0.5], [0, 1]);

  // Positions for Papers
  const leftX = useTransform(progress, [0, 0.5], ["20%", "50%"]); 
  const rightX = useTransform(progress, [0, 0.5], ["80%", "50%"]); 

  // Path is a "Bridge" arch: M 10 50 Q 50 10 90 50
  // Reduced arc height slightly to -20 to keep it tighter
  const arcY = useTransform(progress, [0, 0.25, 0.5], [0, -20, 0]); 

  return (
    <div 
      className="w-full h-full flex flex-col select-none relative z-10"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Section: Animation Area */}
      <div className="absolute inset-0 flex items-center justify-center">
        
        {/* Curved Dotted Line (SVG) */}
         <svg 
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
         >
            <path 
              d="M 20 50 Q 50 30 80 50" 
              fill="none" 
              stroke="currentColor" 
              className="text-obsidian"
              strokeWidth="0.5" 
              strokeDasharray="2 2" 
              vectorEffect="non-scaling-stroke"
            />
         </svg>


        {/* Left Paper: On-Chain (Outline) */}
        <motion.div
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2"
          style={{ 
            left: leftX, 
            y: arcY,
            opacity: papersOpacity 
          }}
        >
          <div className="relative opacity-50">
             <DocumentIcon className="w-16 h-20" contentRows={1} variant="outline" />
          </div>
        </motion.div>


        {/* Right Paper: Ledger (Outline) */}
        <motion.div
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2"
          style={{ 
            left: rightX, 
            y: arcY,
            opacity: papersOpacity 
          }}
        >
          <div className="relative opacity-50">
             <DocumentIcon className="w-16 h-20" contentRows={2} variant="outline" />
          </div>
        </motion.div>


        {/* Merged Paper: Reconciled (Solid) */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2"
          style={{ 
            scale: mergedScale, 
            opacity: mergedOpacity 
          }}
        >
           {/* Success Badge */}
           <motion.div 
             className="absolute -top-4 -right-4 z-40 bg-obsidian rounded-full shadow-lg border-2 border-white p-1.5 flex items-center justify-center"
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ delay: 3 }} // Hardcoded delay relative to animation loop
             style={{ 
                 scale: useTransform(progress, [0.5, 0.6], [0, 1]) 
             }}
           >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
           </motion.div>

          <div className="relative">
             <DocumentIcon className="w-20 h-24 shadow-lg border-obsidian/10" contentRows={3} variant="solid" />
          </div>
          
          <span className="text-[10px] uppercase font-bold text-obsidian tracking-wider font-mono mt-2">Reconciled</span>
        </motion.div>

      </div>
    </div>
  );
}
