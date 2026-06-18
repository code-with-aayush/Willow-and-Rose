"use client";

import Link from "next/link";
import { useState } from "react";
import { Send } from "lucide-react";
import { clinic, navLinks, services, socialLinks } from "@/lib/data";
import { Logomark } from "@/components/shared/Logomark";
import { Diamond, DiamondRule, Leaf } from "@/components/shared/Ornament";
import { Button } from "@/components/shared/Button";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!email.includes("@")) {
      setStatus("err");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Newsletter", email, message: "Newsletter opt-in" })
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("err");
    }
  }

  return (
    <footer className="relative overflow-hidden bg-dark-warm text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <Link className="focus-ring inline-flex items-center gap-3 rounded-base" href="/">
              <Logomark className="text-gold" size={36} />
              <span className="font-display text-3xl">{clinic.name}</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">
              Warm, no-pressure medical aesthetics in the heart of Austin. NP-led, female-owned,
              and quietly obsessed with natural results.
            </p>
            <div className="mt-7 flex gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    aria-label={social.label}
                    className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-white transition hover:bg-gold hover:text-dark"
                    href={social.href}
                    key={social.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Icon aria-hidden size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-eyebrow text-white/55">Quick links</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {[...navLinks, { href: "/book", label: "Book" }].map((link) => (
                <li key={link.href}>
                  <Link
                    className="transition hover:text-gold"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-eyebrow text-white/55">Services</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    className="transition hover:text-gold"
                    href={`/services#${service.id}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-eyebrow text-white/55">Stay in the loop</h2>
            <p className="mt-5 text-sm leading-6 text-white/65">
              Skin tips, clinic news, and the occasional first-look at new treatments.
            </p>
            <form className="mt-5" onSubmit={submit}>
              <div className="flex overflow-hidden rounded-base border border-white/15 bg-white/5 backdrop-blur transition focus-within:border-gold/70">
                <label className="sr-only" htmlFor="footer-newsletter">
                  Email address
                </label>
                <input
                  className="min-w-0 flex-1 bg-transparent px-3.5 py-3 text-sm text-white placeholder-white/40 focus:outline-none"
                  id="footer-newsletter"
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder="you@email.com"
                  type="email"
                  value={email}
                />
                <button
                  aria-label="Subscribe"
                  className="focus-ring inline-flex items-center gap-1 bg-gold px-4 text-sm font-semibold text-dark transition hover:bg-gold-soft disabled:opacity-50"
                  disabled={status === "sending"}
                  type="submit"
                >
                  <Send aria-hidden size={14} />
                </button>
              </div>
              <p
                aria-live="polite"
                className={
                  "mt-2 text-xs " +
                  (status === "ok" ? "text-brand-sage" : status === "err" ? "text-gold-soft" : "text-white/40")
                }
              >
                {status === "ok"
                  ? "Thanks — we'll be in touch."
                  : status === "err"
                    ? "That doesn't look like a valid email."
                    : status === "sending"
                      ? "Sending…"
                      : "No spam, ever. Unsubscribe anytime."}
              </p>
            </form>
            <address className="mt-7 space-y-2 text-sm not-italic leading-6 text-white/70">
              <p>{clinic.address}</p>
              <p>
                <a className="transition hover:text-gold" href={`tel:${clinic.phone.replace(/[^0-9]/g, "")}`}>
                  {clinic.phone}
                </a>
              </p>
              <p>
                <a className="transition hover:text-gold" href={`mailto:${clinic.email}`}>
                  {clinic.email}
                </a>
              </p>
              <p className="text-white/55">{clinic.hours}</p>
            </address>
          </div>
        </div>

        <div className="mt-14 max-w-xs">
          <DiamondRule tone="white" />
        </div>

        <div className="mt-7 flex flex-col gap-4 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <Leaf className="text-gold-soft opacity-80" size={14} />
            <p>© 2026 Willow & Rose Medical Aesthetics. Portfolio demo.</p>
          </div>
          <p className="flex items-center gap-2">
            <Diamond className="text-gold" size={6} />
            Appointments available same week
          </p>
        </div>
      </div>
    </footer>
  );
}
