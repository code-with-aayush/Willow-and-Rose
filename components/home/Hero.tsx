"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/shared/Button";
import { trustItems } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-20 md:min-h-screen">
      <Image
        alt="Warm luxury medical spa interior at Willow & Rose"
        className="object-cover"
        fill
        priority
        sizes="100vw"
        src="/images/hero-bg.png"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/68 via-black/38 to-black/18" />
      <motion.div
        animate="visible"
        className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8"
        initial="hidden"
        variants={container}
      >
        <div className="max-w-3xl">
          <motion.h1 className="font-display text-5xl italic leading-[1.03] text-white md:text-7xl" variants={item}>
            Feel Like Yourself Again — Only Better.
          </motion.h1>
          <motion.p className="mt-6 max-w-2xl text-lg leading-8 text-white/88" variants={item}>
            Austin's most trusted medical aesthetics clinic. Real results, no pressure — just a team that listens and
            treatments that work.
          </motion.p>
          <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" variants={item}>
            <Button href="/book" variant="secondary">
              Book Your Free Consultation
            </Button>
            <Button href="#services" variant="outline">
              See Our Treatments →
            </Button>
          </motion.div>
          <motion.div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" variants={item}>
            {trustItems.map((trust) => {
              const Icon = trust.icon;
              return (
                <div
                  className="flex items-center gap-2 rounded-full bg-white/14 px-4 py-3 text-sm font-semibold text-white backdrop-blur"
                  key={trust.text}
                >
                  <Icon aria-hidden="true" size={17} />
                  {trust.text}
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
