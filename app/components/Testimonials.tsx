'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote: "The financial system is entering a new architectural phase. Frontyr is being built to serve as core infrastructure for institutions that want to operate with stablecoins as a first-class banking primitive.",
    name: "Sam Abbassi",
    role: "Founder & CEO, Frontyr",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "Frontyr gives us a programmable core for stablecoin accounts with the compliance rigor and balance-sheet clarity regulators expect.",
    name: "Sarah Chen",
    role: "VP of Product, Fintech",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "We can ship stablecoin payments and tokenized dollar accounts without stitching together legacy systems. Frontyr is the core we needed.",
    name: "David Ross",
    role: "COO, Banking Partner",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
  }
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < testimonials.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="py-32 bg-obsidian bg-noise text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="relative w-full">
          <div className="relative w-full" style={{ display: 'grid', gridTemplateAreas: '"stack"' }}>
            {testimonials.map((t, i) => (
              <div 
                key={i}
                className={`transition-all duration-700 ease-in-out flex flex-col items-center justify-center ${
                    i === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                }`}
                style={{ gridArea: 'stack' }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-10">
                  "{t.quote}"
                </h2>
                <div className="flex flex-col items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border border-white/10 shadow-sm" />
                  <div>
                    <div className="font-medium text-white text-lg">{t.name}</div>
                    <div className="text-white/50">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button 
                onClick={prev}
                disabled={index === 0}
                className="group w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed" 
                aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
                onClick={next}
                disabled={index === testimonials.length - 1}
                className="group w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed" 
                aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
