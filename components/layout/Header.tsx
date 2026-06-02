"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { clinic, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
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
        "fixed inset-x-0 top-0 z-40 transition",
        scrolled || open ? "bg-white/95 shadow-sm backdrop-blur" : "bg-white/10 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link className="focus-ring rounded-base" href="/" onClick={() => setOpen(false)}>
          <span className={cn("font-display text-2xl", scrolled || open ? "text-dark" : "text-white")}>
            {clinic.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              className={cn(
                "focus-ring rounded-base text-sm font-semibold transition hover:text-brand-green",
                scrolled ? "text-dark" : "text-white"
              )}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="/book" variant={scrolled ? "primary" : "secondary"}>
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
          "fixed inset-x-0 top-20 z-30 h-[calc(100vh-5rem)] bg-white px-5 py-8 transition md:hidden",
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
          <Button className="mt-4 w-full" href="/book">
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  );
}
