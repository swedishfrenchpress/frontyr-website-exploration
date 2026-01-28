'use client';

export function Logos() {
  const logos = ['VERCEL', 'stripe', 'Linear', 'OpenAI', 'Raycast'];
  // Duplicate logos for infinite scroll effect
  const scrollingLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="border-y border-border/60 py-16 bg-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <p className="text-xs font-semibold text-obsidian whitespace-nowrap md:w-auto w-full text-center md:text-left shrink-0 z-10 bg-white md:bg-transparent py-2 md:py-0">
          POWERING STABLECOIN FINANCE AT
        </p>
        
        <div className="relative w-full overflow-hidden mask-linear-fade">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-scroll-x w-fit">
                {scrollingLogos.map((logo, i) => (
                    <div key={`${logo}-${i}`} className="flex items-center px-12">
                        <span className="font-sans text-lg font-bold text-obsidian/60 tracking-tight hover:text-obsidian transition-colors cursor-default whitespace-nowrap">
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
