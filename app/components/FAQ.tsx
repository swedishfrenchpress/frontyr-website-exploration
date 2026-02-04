'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from '@carbon/icons-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is Frontyr?",
    answer: "Frontyr is a stablecoin-native banking infrastructure platform designed for the next generation of financial applications. We enable businesses to build global banking products that settle in seconds, not days."
  },
  {
    question: "How does Proof of Reserves work?",
    answer: "We provide real-time, cryptographic verification of assets, ensuring 1:1 backing for all deposits. Our transparency dashboard allows anyone to verify solvency on-chain at any time."
  },
  {
    question: "Is Frontyr regulated?",
    answer: "Yes, we work with fully licensed partners and adhere to strict compliance standards across all jurisdictions we operate in to ensure the safety and security of your funds."
  },
  {
    question: "Can I integrate Frontyr into my existing app?",
    answer: "Absolutely. Our developer-friendly API allows you to embed banking features directly into your product with just a few lines of code. Check out our Developer documentation for guides and SDKs."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 bg-white text-obsidian relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(10,22,40,0.02),transparent_70%)]" />
      </div>
      
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-subtle">
            Everything you need to know about Frontyr and our services.
          </p>
        </div>

        <div className="w-full">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-b border-border/60 last:border-0 transition-colors duration-300 ${openIndex === index ? 'border-obsidian/15' : ''}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="group flex flex-1 items-center justify-between py-5 w-full font-medium transition-all text-left text-obsidian/85 hover:text-obsidian"
                aria-expanded={openIndex === index}
              >
                <span className="pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className={`shrink-0 transition-colors duration-200 ${openIndex === index ? 'text-obsidian' : 'text-subtle group-hover:text-obsidian/60'}`}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto", marginBottom: 20 },
                      collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="text-sm text-subtle leading-relaxed pr-8">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
