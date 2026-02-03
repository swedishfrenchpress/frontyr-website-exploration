'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from '@carbon/icons-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
    <section className="py-24 bg-canvas text-obsidian relative">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-obsidian/60">
            Everything you need to know about Frontyr and our services.
          </p>
        </div>

        <div className="w-full">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-obsidian/10 last:border-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex flex-1 items-center justify-between py-4 w-full font-medium transition-all hover:text-obsidian text-left text-obsidian/90"
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-obsidian/50"
                >
                  <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto", marginBottom: 16 },
                      collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                    }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="text-sm text-obsidian/70 leading-relaxed">
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
