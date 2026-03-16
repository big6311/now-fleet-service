"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

function FAQItemComponent({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="faq-item"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span
          className={`font-body font-semibold text-base pr-4 transition-colors duration-200 ${
            open ? "text-gold" : "text-softwhite group-hover:text-gold"
          }`}
        >
          {item.question}
        </span>
        <span
          className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
            open
              ? "bg-gold/15 border-gold/50 text-gold"
              : "border-gold/20 text-muted/60 group-hover:border-gold/40 group-hover:text-gold/60"
          }`}
        >
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-muted font-body text-sm leading-relaxed pb-5 pr-10">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="divide-y-0">
      {items.map((item, i) => (
        <FAQItemComponent key={i} item={item} index={i} />
      ))}
    </div>
  );
}
