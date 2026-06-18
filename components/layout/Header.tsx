"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Logomark } from "@/components/shared/Logomark";
import { clinic, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled || open
          ? "bg-white/95 shadow-soft backdrop-blur"
          : "bg-transparent backdrop-blur-[2px]"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          className="focus-ring group flex items-center gap-2.5 rounded-base"
          href="/"
          onClick={() => setOpen(false)}
        >
          <Logomark
            className={cn(
              "transition-all duration-300",
              scrolled || open ? "text-brand-green" : "text-white"
            )}
            size={28}
          />
          <span
            className={cn(
              "font-display font-medium transition-all duration-300",
              scrolled || open ? "text-2xl text-dark" : "text-2xl text-white"
            )}
          >
            {clinic.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              className={cn(
                "focus-ring group relative rounded-base py-1 text-sm font-semibold tracking-wide transition hover:text-brand-green",
                scrolled || open ? "text-dark" : "text-white"
              )}
              href={link.href}
              key={link.href}
            >
              {link.label}
              <span
                aria-hidden
                className="absolute -bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 scale-0 rounded-full bg-gold transition-transform duration-200 group-hover:scale-100"
              />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href="/book"
            showArrow
            size="md"
            variant={scrolled || open ? "primary" : "secondary"}
          >
            Book Now
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "focus-ring inline-flex h-11 w-11 items-center justify-center rounded-base md:hidden",
            scrolled || open ? "text-dark" : "text-white"
          )}
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-20 z-30 h-[calc(100vh-5rem)] bg-white px-5 py-8 transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              className="focus-ring rounded-base py-2 text-3xl font-semibold text-dark"
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button className="mt-4 w-full" href="/book" showArrow>
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  );
}
