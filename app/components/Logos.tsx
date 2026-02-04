'use client';

export function Logos() {
  const logos = ['VERCEL', 'stripe', 'Linear', 'OpenAI', 'Raycast'];
  // Duplicate logos for infinite scroll effect
  const scrollingLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="border-y border-border/50 py-14 bg-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <p className="text-[11px] font-semibold text-subtle uppercase tracking-widest whitespace-nowrap md:w-auto w-full text-center md:text-left shrink-0 z-10 bg-white md:bg-transparent py-2 md:py-0">
          Powering stablecoin finance at
        </p>
        
        <div className="relative w-full overflow-hidden">
            {/* Gradient Masks - softer edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-scroll-x w-fit hover:[animation-play-state:paused]">
                {scrollingLogos.map((logo, i) => (
                    <div key={`${logo}-${i}`} className="group flex items-center px-10">
                        <span className="font-sans text-base font-bold text-obsidian/40 tracking-tight transition-all duration-300 cursor-default whitespace-nowrap group-hover:text-obsidian group-hover:scale-105">
                            {logo}
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
