"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const total = faqItems.length;

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => {
        const open = openIndex === index;
        return (
          <article
            className={cn(
              "relative overflow-hidden rounded-large bg-white shadow-card transition",
              open && "ring-1 ring-gold/40"
            )}
            key={item.question}
          >
            <span
              aria-hidden
              className={cn(
                "absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gold transition-transform duration-300",
                open && "scale-y-100"
              )}
            />
            <button
              aria-expanded={open}
              className="focus-ring flex w-full items-center justify-between gap-5 rounded-large px-5 py-5 text-left md:px-7 md:py-6"
              onClick={() => setOpenIndex(open ? -1 : index)}
              type="button"
            >
              <span className="flex flex-1 items-center gap-4">
                <span className="text-eyebrow text-gray-mid">
                  <span className="text-gold">0{index + 1}</span>
                  <span className="text-dark/30"> / 0{total}</span>
                </span>
                <span className="text-base font-semibold text-dark md:text-lg">
                  {item.question}
                </span>
              </span>
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition",
                  open ? "bg-brand-green text-white" : "bg-cream-warm text-brand-green"
                )}
              >
                <ChevronDown
                  aria-hidden
                  className={cn("transition-transform duration-300", open ? "rotate-180" : "rotate-0")}
                  size={18}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  animate={{ height: "auto", opacity: 1 }}
                  className="overflow-hidden"
                  exit={{ height: 0, opacity: 0 }}
                  initial={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <p className="max-w-3xl px-5 pb-6 text-sm leading-7 text-gray-mid md:px-7 md:text-[15px] md:leading-8">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
