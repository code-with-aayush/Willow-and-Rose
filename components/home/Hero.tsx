"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Marquee } from "@/components/shared/Marquee";
import { Diamond, Leaf } from "@/components/shared/Ornament";
import { trustItems } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const marqueeItems = [
  "NP-LED CLINIC",
  "4.9 ★ PATIENT RATING",
  "SAME-WEEK APPOINTMENTS",
  "FREE CONSULTATIONS",
  "AUSTIN, TX",
  "EST. 2019"
];

export function Hero() {
  return (
    <section className="grain relative flex min-h-[88vh] items-center overflow-hidden pt-20 md:min-h-screen">
      <Image
        alt="Warm luxury medical spa interior at Willow & Rose"
        className="object-cover"
        fill
        priority
        sizes="100vw"
        src="/images/hero-bg.png"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-black/72 via-black/45 to-black/30"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
      />

      <div className="absolute right-6 top-28 z-10 hidden md:block">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 rounded-large bg-white/95 px-4 py-3 shadow-lift backdrop-blur"
          initial={{ opacity: 0, y: -8 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-warm text-brand-green">
            <Star aria-hidden fill="currentColor" size={17} />
          </div>
          <div>
            <p className="flex items-center gap-1 text-sm font-semibold text-dark">
              5.0
              <span className="inline-flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star aria-hidden fill="currentColor" key={i} size={12} />
                ))}
              </span>
            </p>
            <p className="text-xs text-gray-mid">200+ verified reviews</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 lg:px-8"
        initial="hidden"
        variants={container}
      >
        <div className="max-w-3xl">
          <motion.div className="inline-flex items-center gap-2.5" variants={item}>
            <span className="inline-flex h-7 items-center gap-2 rounded-full border border-white/25 bg-white/8 px-3 text-eyebrow text-white/90 backdrop-blur">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-gold" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              Austin · Now Booking
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 font-display text-[44px] italic leading-[1.04] text-white sm:text-6xl md:text-[88px] md:leading-[0.98]"
            variants={item}
          >
            Feel Like <span className="not-italic text-gold-soft">Yourself</span> Again
            <span className="text-gold-soft">.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg"
            variants={item}
          >
            Austin's most trusted medical aesthetics clinic. Real results, no pressure — just a team
            that listens and treatments that work.
          </motion.p>

          <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" variants={item}>
            <Button href="/book" showArrow size="lg" variant="secondary">
              Book Your Free Consultation
            </Button>
            <Button
              className="text-white hover:text-gold-soft"
              href="#services"
              showArrow
              size="lg"
              variant="ghost"
            >
              See Our Treatments
            </Button>
          </motion.div>

          <motion.div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3" variants={item}>
            {trustItems.map((trust, i) => {
              const Icon = trust.icon;
              return (
                <span className="flex items-center gap-2 text-sm font-medium text-white/80" key={trust.text}>
                  <Icon aria-hidden className="text-gold-soft" size={15} />
                  {trust.text}
                  {i < trustItems.length - 1 ? (
                    <Diamond aria-hidden className="ml-4 text-white/30" size={5} />
                  ) : null}
                </span>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-black/35 backdrop-blur-md">
        <Marquee className="py-3" items={marqueeItems} tone="green" />
      </div>

      <motion.div
        aria-hidden
        animate={{ y: [0, 6, 0] }}
        className="absolute bottom-20 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/60 md:flex"
        transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
      >
        <Leaf className="text-gold-soft opacity-70" size={14} />
        <span className="text-eyebrow">Scroll</span>
        <ChevronDown aria-hidden size={16} />
      </motion.div>
    </section>
  );
}
