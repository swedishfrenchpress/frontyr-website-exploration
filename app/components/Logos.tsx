'use client';

export function Logos() {
  const logos = [
    { name: 'Stillmark', type: 'component' },
    { name: 'Castle Island', src: '/castle-island.svg', type: 'image' },
    { name: 'F-Prime', src: '/fprime.svg', type: 'image' },
    { name: 'Ten31', src: '/ten31.svg', type: 'image' },
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
                        {logo.type === 'component' ? (
                          <StillmarkLogo />
                        ) : (
                          <img 
                              src={logo.src} 
                              alt={logo.name}
                              className="h-8 w-auto transition-all duration-300 group-hover:scale-105"
                          />
                        )}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

function StillmarkLogo() {
  return (
    <svg
      viewBox="0 0 417.38666 59.386665"
      className="h-8 w-auto transition-all duration-300 group-hover:scale-105"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="matrix(1.3333333,0,0,-1.3333333,0,59.386667)">
        <g transform="scale(0.1)">
          <path
            d="M 0,445.367 H 331.609 V 374.164 H 78.2734 V 252.598 H 302.91 V 181.34 H 78.2734 L 78.2734,0 H 0 v 445.367"
            fill="#100f0d"
          />
          <path
            d="m 955.984,213.805 c 59.076,0 95.996,33.086 95.996,79.55 v 1.254 c 0,52.184 -37.55,79.555 -95.996,79.555 h -91.05 V 213.805 Z M 786.633,445.367 h 175.555 c 103.802,0 169.422,-59.078 169.422,-148.875 v -1.258 c 0,-99.89 -80.32,-152.14 -178.133,-152.14 H 864.934 V 0 h -78.301 v 445.367"
            fill="#100f0d"
          />
          <path
            d="m 1493.73,224.598 c 56.11,0 91.78,29.328 91.78,74.402 v 1.395 c 0,47.648 -34.34,73.769 -92.47,73.769 H 1379.13 V 224.598 Z m -192.69,220.769 h 198.47 c 56.05,0 99.93,-16.375 128.63,-44.383 23.55,-24.242 36.72,-57.332 36.72,-96.203 v -1.258 c 0,-73.21 -43.68,-117.097 -106.17,-135.007 L 1678.87,0 h -92.1 l -109.55,155.215 h -1.25 -96.84 V 0 h -78.09 v 445.367"
            fill="#100f0d"
          />
          <path
            d="m 1854.63,445.367 h 78.38 V 0 h -78.38 v 445.367"
            fill="#100f0d"
          />
          <path
            d="m 2141.03,445.367 h 83.45 l 135.36,-210.527 135.64,210.527 h 83.53 V 0 h -78.38 V 319.41 L 2359.84,109.375 h -2.44 L 2218.08,318.16 V 0 h -77.05 v 445.367"
            fill="#100f0d"
          />
          <path
            d="m 2796.99,445.367 h 330.24 v -69.875 h -252 V 259.637 h 223.36 V 189.629 H 2875.23 V 70.0195 h 255.2 V 0 h -333.44 v 445.367"
            fill="#100f0d"
          />
          <path
            d="m 519.004,112.578 h -85.547 l 116.516,178.129 h 85.664 L 519.004,112.578"
            fill="#100f0d"
          />
        </g>
      </g>
    </svg>
  );
}
