'use client';

import { useEffect, useRef, useState } from 'react';

/* eslint-disable @next/next/no-img-element */

export function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="product" className="relative w-full z-0 -mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div 
          className={`relative w-full rounded-t-2xl overflow-hidden border border-border/40 bg-white transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_25px_50px_-12px_rgba(10,22,40,0.15)]' 
              : 'opacity-0 translate-y-8 shadow-none'
          }`}
        >
            {/* Subtle top highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent z-10" />
            
            {/* 
                We are showing roughly the top 1/3 of the interface. 
                Height is constrained and overflow is hidden.
            */}
            <div className="relative h-[400px] md:h-[500px] w-full bg-white overflow-hidden">
                <img 
                    src="/dashboard-placeholder.svg" 
                    alt="Frontyr Dashboard" 
                    className={`w-full h-auto object-cover object-top min-w-[1000px] transition-transform duration-1000 ease-out delay-200 ${
                      isVisible ? 'scale-100' : 'scale-[1.02]'
                    }`}
                />
                
                {/* Fade to white gradient overlay - refined */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white pointer-events-none"></div>
                {/* Harder fade at the very bottom to merge with the next section */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"></div>
            </div>
        </div>
      </div>
    </section>
  );
}
