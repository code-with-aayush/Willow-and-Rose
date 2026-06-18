"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  className?: string;
  children: React.ReactNode;
  once?: boolean;
};

export function Reveal({ children, className, delay = 0, y = 12, once = true, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
