'use client';

import { useEffect, useRef, useState } from 'react';
import { HeroDashboard } from './HeroDashboard';

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
    <section ref={sectionRef} id="product" className="relative w-full z-0 -mt-20 md:-mt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-center">
        <div 
          className={`relative w-full max-w-5xl transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
             {/* Glow effect behind the dashboard */}
             <div className={`absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
             
             <div className="relative">
                <HeroDashboard />
             </div>
        </div>
      </div>
    </section>
  );
}
