"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => {
        const open = openIndex === index;
        return (
          <article className="rounded-large bg-white shadow-card" key={item.question}>
            <button
              aria-expanded={open}
              className="focus-ring flex w-full items-center justify-between gap-5 rounded-large px-5 py-5 text-left"
              onClick={() => setOpenIndex(open ? -1 : index)}
              type="button"
            >
              <span className="text-base font-semibold text-dark">{item.question}</span>
              <ChevronDown
                aria-hidden="true"
                className={cn("shrink-0 text-brand-green transition", open ? "rotate-180" : "rotate-0")}
                size={21}
              />
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  initial={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-7 text-gray-mid">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
