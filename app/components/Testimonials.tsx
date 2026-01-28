'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote: "The financial system is entering a new architectural phase. Frontyr is being built to serve as core infrastructure for institutions that want to operate with stablecoins as a first-class banking primitive.",
    name: "Sam Abbassi",
    role: "Founder & CEO, Frontyr",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    stats: [
        { val: "$30M", lbl: "Platform Funding" },
        { val: "24/7", lbl: "Real-Time Settlement" },
        { val: "100%", lbl: "Audit Coverage" }
    ]
  },
  {
    quote: "Frontyr gives us a programmable core for stablecoin accounts with the compliance rigor and balance-sheet clarity regulators expect.",
    name: "Sarah Chen",
    role: "VP of Product, Fintech",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
    stats: [
        { val: "Full", lbl: "Compliance" },
        { val: "Real-Time", lbl: "Treasury View" },
        { val: "Programmable", lbl: "Policy Controls" }
    ]
  },
  {
    quote: "We can ship stablecoin payments and tokenized dollar accounts without stitching together legacy systems. Frontyr is the core we needed.",
    name: "David Ross",
    role: "COO, Banking Partner",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
    stats: [
        { val: "Tokenized", lbl: "Dollar Accounts" },
        { val: "Stablecoin", lbl: "Payments" },
        { val: "Enterprise", lbl: "Reliability" }
    ]
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
    <section className="py-32 bg-obsidian text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative w-full">
              <div className="relative w-full" style={{ display: 'grid', gridTemplateAreas: '"stack"' }}>
                {testimonials.map((t, i) => (
                  <div 
                    key={i}
                    className={`transition-all duration-700 ease-in-out flex flex-col justify-center ${
                        i === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                    }`}
                    style={{ gridArea: 'stack' }}
                  >
                    <h2 className="text-4xl font-semibold tracking-tighter mb-8">
                      "{t.quote}"
                    </h2>
                    <div className="flex items-center gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-sm" />
                      <div>
                        <div className="font-medium text-white">{t.name}</div>
                        <div className="text-sm text-white/50">
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-10">
                <button 
                    onClick={prev}
                    disabled={index === 0}
                    className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed" 
                    aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4.5 h-4.5" />
                </button>
                <button 
                    onClick={next}
                    disabled={index === testimonials.length - 1}
                    className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed" 
                    aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-row md:flex-col justify-between gap-6 md:gap-0 md:space-y-12 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-16">
            {testimonials[index].stats.map((stat, i) => (
              <div key={`${index}-${i}`}>
                <div className="text-3xl font-bold mb-1 animate-fade-in-up">
                  {stat.val}
                </div>
                <div className="text-sm text-white/50 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  {stat.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
