'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What makes Frontyr different from other core banking platforms?",
    answer: "We're built for the 24/7 era. Most cores were designed around batch processing and banking hours. Frontyr treats stablecoins as a first-class primitive, enabling real-time settlement without ripping out your existing infrastructure."
  },
  {
    question: "How does Frontyr handle compliance?",
    answer: "You retain full control over your compliance obligations (KYC, AML, KYB). Frontyr enhances your framework with on-chain risk monitoring, sanctions screening, and Travel Rule data handling—all logged and auditable."
  },
  {
    question: "Is Frontyr secure and enterprise-grade?",
    answer: "Yes. We're SOC 2 compliant, work with licensed custody partners, and follow financial-grade security standards. Full audit logs and webhook-level traceability come standard."
  },
  {
    question: "How long does integration take?",
    answer: "Most partners go live in 4–8 weeks. We provide APIs for wallet creation, on/off-ramping, treasury management, and cross-border payments. Your team focuses on product; we handle the rails."
  },
  {
    question: "Can we white-label Frontyr for our customers?",
    answer: "Absolutely. Frontyr is infrastructure-first. Your customers see your brand and fiat experience. We orchestrate the stablecoin settlement behind the scenes."
  },
  {
    question: "What currencies and stablecoins do you support?",
    answer: "We support major stablecoins including USDC, USDT, and EURC, with fiat settlement in key corridors. We'll work with you to configure the currencies and payout destinations you need."
  },
  {
    question: "Do I need to understand stablecoins to use Frontyr?",
    answer: "No. Frontyr abstracts the complexity. You interact with familiar banking concepts—accounts, balances, transfers. We handle the on-chain mechanics so you don't have to."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-start justify-between gap-6 text-left group focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-obsidian' : 'text-obsidian/80 group-hover:text-obsidian'}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 mt-1 w-5 h-5 flex items-center justify-center transition-colors duration-300 ${isOpen ? 'text-obsidian' : 'text-subtle group-hover:text-obsidian'}`}>
            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} // Custom easing for premium feel
            className="overflow-hidden"
          >
            <p className="pb-8 text-subtle leading-relaxed max-w-2xl text-[15px]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white border-t border-border/60 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-canvas border border-border/60 shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-obsidian"></span>
            <span className="font-sans text-[12px] font-semibold text-subtle tracking-tight uppercase">Support</span>
          </div>
          
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-6 leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <p className="text-subtle text-lg leading-relaxed max-w-2xl">
            Everything you need to know about Frontyr's infrastructure and integration process.
          </p>
        </div>

        <div className="border-t border-border/60">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
