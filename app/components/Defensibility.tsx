'use client';

import { ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: 'Stablecoin Issuance & Redemption',
    desc: 'Frontyr provides the core ledger and compliance rails for minting, burning, and managing stablecoin supply with full reserve transparency.',
    image: '/bank-dither1.png',
    placeholder: '/solution-1-placeholder.svg',
  },
  {
    title: 'Treasury & Liquidity Management',
    desc: 'Track reserves, manage liquidity positions, and maintain balance-sheet clarity across all stablecoin operations in real time.',
    image: '/bank-dither2.png',
    placeholder: '/solution-2-placeholder.svg',
  },
];

export function Defensibility() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-canvas">
      <div className="max-w-7xl mx-auto bg-white border border-border rounded-xl p-8 md:p-12 lg:p-16">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4">
            Our Solutions
          </h2>
          <p className="text-subtle text-base max-w-2xl">
            Purpose-built infrastructure for institutions operating natively on stablecoin rails.
          </p>
        </div>

        {/* Solution Blocks */}
        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
            >
              {/* Text Side */}
              <div 
                className={`flex flex-col justify-end pb-8 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <h3 className="font-sans text-2xl font-semibold text-obsidian mb-4">
                  {solution.title}
                </h3>
                <p className="text-subtle leading-relaxed">
                  {solution.desc}
                </p>
              </div>

              {/* Visual Side - 1:1 Aspect Ratio */}
              <div 
                className={`w-full aspect-square bg-obsidian rounded-lg overflow-hidden relative ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                {/* Background Image - Absolute */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={solution.image} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
                
                {/* Navy Overlay for tinting */}
                <div className="absolute inset-0 bg-obsidian/40 mix-blend-multiply pointer-events-none"></div>

                {/* SVG Placeholder Overlay */}
                <div className="absolute inset-0 z-10 flex items-center justify-center p-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src={solution.placeholder} 
                        alt="UI Mockup" 
                        className="w-full h-full object-contain"
                    />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
