'use client';

export function Logos() {
  const logos = [
    { name: 'Stillmark', src: '/stillmark.svg', className: 'h-8' },
    { name: 'Castle Island', src: '/castle-island.svg', className: 'h-7' },
    { name: 'F-Prime', src: '/fprime.svg', className: 'h-5' },
    { name: 'Ten31', src: '/ten31.svg', className: 'h-7' },
  ];
  // Duplicate logos for infinite scroll effect
  const scrollingLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="border-y border-border/50 py-14 bg-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <p className="text-[11px] font-semibold text-subtle uppercase tracking-widest whitespace-nowrap md:w-auto w-full text-center md:text-left shrink-0 z-10 bg-white md:bg-transparent py-2 md:py-0">
          Supported by
        </p>
        
        <div className="relative w-full overflow-hidden">
            {/* Gradient Masks - softer edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-scroll-x w-fit hover:[animation-play-state:paused] items-center">
                {scrollingLogos.map((logo, i) => (
                    <div key={`${logo.name}-${i}`} className="group flex items-center px-10 shrink-0">
                        <img 
                            src={logo.src} 
                            alt={logo.name}
                            className={`w-auto transition-all duration-300 group-hover:scale-105 ${logo.className}`}
                        />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
