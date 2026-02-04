'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CardProps {
  initialX: number;
  initialY: number;
  rotate: number;
  speed: number;
  width: number;
  height: number;
  scrollYProgress: MotionValue<number>;
  className?: string;
  delay?: number;
}

function FloatingCard({ initialX, initialY, rotate, speed, width, height, scrollYProgress, className = "", delay = 0 }: CardProps) {
  // Map scroll progress (0 to 1) to a vertical offset based on speed
  // Speed > 1 moves faster than scroll (upwards), Speed < 1 moves slower
  // We want them to move "up and around", so let's translate Y negatively as we scroll down
  const y = useTransform(scrollYProgress, [0, 1], [0, -150 * speed]);
  
  // Optional: Add a subtle rotation or scale effect
  const rot = useTransform(scrollYProgress, [0, 1], [rotate, rotate + (speed * 15)]);

  // Mobile responsiveness: Reduce X offset on small screens so they don't go off-screen, 
  // or hide some on mobile via className
  
  return (
    <motion.div
      style={{
        x: initialX,
        y: initialY, // Base position is handled by absolute positioning in parent, this is fine tuning or we use top/left
        rotate: rot,
        translateY: y,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute rounded-xl shadow-lg border border-border/60 bg-white hidden md:block ${className}`}
    >
        <div 
            style={{ width, height }} 
            className="rounded-lg bg-gray-50 w-full h-full p-4 flex flex-col justify-between relative overflow-hidden"
        >
             {/* Abstract Art / Pattern Placeholder */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-obsidian/20 to-transparent"></div>
            
            <div className="w-8 h-5 rounded bg-gray-200/80 z-10"></div>

            <div className="space-y-2 z-10">
                <div className="w-2/3 h-1.5 bg-gray-200 rounded"></div>
                 <div className="w-1/2 h-1.5 bg-gray-200 rounded"></div>
            </div>
        </div>
    </motion.div>
  );
}

export function CardParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="relative w-full py-32 md:py-48 overflow-hidden flex flex-col items-center justify-center min-h-[600px] md:min-h-[800px]">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-canvas/50 pointer-events-none"></div>
      
      {/* Central Copy */}
      <div className="relative z-20 text-center max-w-2xl px-6">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-4xl md:text-5xl md:leading-[1.1] font-semibold text-obsidian tracking-[-0.03em] mb-6"
        >
          Do more. Worry less.<br />
          Cards you can rely on
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-subtle text-lg leading-relaxed max-w-xl mx-auto"
        >
          Open a business account in minutes, from your phone. Without going to the bank. Your all-in-one account, with all essentials - No hidden fees.
        </motion.p>
      </div>

      {/* Floating Cards - positioned relative to the center */}
      {/* We use a container that centers everything, then translate items out */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        
        {/* Left Side Cards - Various positions and speeds */}
        <FloatingCard 
            initialX={-380} 
            initialY={-200} 
            rotate={-8} 
            speed={1.6} 
            width={220} 
            height={140} 
            scrollYProgress={scrollYProgress}
            delay={0.1}
            className="bg-gray-50" 
        />
         <FloatingCard 
            initialX={-520} 
            initialY={40} 
            rotate={-4} 
            speed={0.9} 
            width={260} 
            height={165} 
            scrollYProgress={scrollYProgress}
            delay={0.2}
             className="bg-gray-100" 
        />
        <FloatingCard 
            initialX={-340} 
            initialY={240} 
            rotate={6} 
            speed={2.2} 
            width={240} 
            height={150} 
            scrollYProgress={scrollYProgress}
            delay={0.3}
             className="bg-gray-50" 
        />

        {/* Right Side Cards */}
         <FloatingCard 
            initialX={400} 
            initialY={-180} 
            rotate={8} 
            speed={1.4} 
            width={230} 
            height={145} 
            scrollYProgress={scrollYProgress}
            delay={0.15}
             className="bg-gray-100" 
        />
         <FloatingCard 
            initialX={480} 
            initialY={100} 
            rotate={-5} 
            speed={1.1} 
            width={200} 
            height={130} 
            scrollYProgress={scrollYProgress}
            delay={0.25}
             className="bg-gray-50" 
        />
        <FloatingCard 
            initialX={320} 
            initialY={280} 
            rotate={10} 
            speed={1.9} 
            width={250} 
            height={160} 
            scrollYProgress={scrollYProgress}
            delay={0.35}
             className="bg-gray-100" 
        />

      </div>
      
      {/* Mobile-only static cards visual fallback (since parallax is hidden on mobile) */}
       <div className="md:hidden mt-12 grid grid-cols-2 gap-4 opacity-50 px-6">
            <div className="w-32 h-20 bg-gray-100 rounded-lg border border-border/60"></div>
            <div className="w-32 h-20 bg-gray-100 rounded-lg border border-border/60 mt-4"></div>
            <div className="w-32 h-20 bg-gray-100 rounded-lg border border-border/60 -mt-4"></div>
            <div className="w-32 h-20 bg-gray-100 rounded-lg border border-border/60"></div>
       </div>

    </div>
  );
}
