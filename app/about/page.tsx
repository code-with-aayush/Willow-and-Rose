import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Diamond, DiamondRule, Leaf } from "@/components/shared/Ornament";
import { PullQuote } from "@/components/shared/PullQuote";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the small, clinically trained team behind Willow & Rose Medical Aesthetics in Austin."
};

const team = [
  {
    name: "Claire Whitmore, NP-C",
    title: "Lead Injector & Co-Founder",
    specialty: "Injectables & Facial Balancing",
    image: "/images/team-claire.png",
    bio: "Board-certified Nurse Practitioner with 10 years in aesthetic medicine. Claire trained at Johns Hopkins and now leads our injectables practice with a philosophy she calls 'the softest possible touch.'"
  },
  {
    name: "Maya Torres, RN",
    title: "Laser & Skin Specialist",
    specialty: "Laser & Skin Resurfacing",
    image: "/images/team-maya.png",
    bio: "Registered nurse specialising in laser treatments and medical-grade facials. Maya has a particular passion for pigment correction and is the person our team goes to for tricky skin stories."
  }
];

const values = [
  {
    title: "Safety",
    body: "Licensed clinical providers, careful assessments, and treatment plans that respect your health before your timeline.",
    icon: ShieldCheck
  },
  {
    title: "Honesty",
    body: "Clear recommendations, transparent pricing, and no pressure to do more than you actually want.",
    icon: BadgeCheck
  },
  {
    title: "Results",
    body: "Natural-looking outcomes that help you feel refreshed, not changed. Subtlety is the entire point.",
    icon: Sparkles
  }
];

const credentials = [
  "Licensed NPs",
  "FDA-approved products",
  "Medical-grade protocols",
  "HIPAA-compliant",
  "Continuing education",
  "Same-day consults"
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        intro="After years in clinical settings and high-end medical spas, our founders built a clinic where patients feel heard, respected, and never rushed."
        title="We started Willow & Rose because something was missing."
      />
      <SectionWrapper className="bg-cream">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-eyebrow text-brand-green">
                <span className="text-gold">✦</span> Origin story
              </p>
              <h2 className="mt-4 font-display text-3xl leading-[1.1] text-dark md:text-5xl">
                Built around a single, simple rule.
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-mid">
                After years working in clinical settings and high-end medical spas, our founders
                kept seeing the same problem: patients feeling rushed, oversold, or just plain
                ignored.
              </p>
              <p className="mt-5 text-base leading-8 text-gray-mid">
                So in 2019, we opened Willow &amp; Rose in Austin with one simple rule: treat every
                patient like a friend who came to us for honest advice. That's still how we operate
                today.
              </p>
              <p className="mt-5 text-base leading-8 text-gray-mid">
                We're proud to be a small, tight-knit team. You'll see the same faces every visit —
                and we'll remember yours.
              </p>
              <div className="mt-8 max-w-sm">
                <DiamondRule />
              </div>
            </div>
            <div className="relative">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-large shadow-lift">
                <Image
                  alt="Warm Willow & Rose clinic interior"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src="/images/about-clinic.png"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <Leaf
                aria-hidden
                className="absolute -right-6 -top-6 text-brand-sage opacity-50"
                size={80}
              />
              <Diamond
                aria-hidden
                className="absolute -left-4 -bottom-4 text-gold"
                size={14}
              />
            </div>
          </div>
        </Reveal>
      </SectionWrapper>

      <SectionWrapper className="bg-cream-warm">
        <Reveal>
          <PullQuote
            attribution="— Our founders, 2019"
            location="Austin, Texas"
            quote="Treat every patient like a friend who came to us for honest advice."
          />
        </Reveal>
      </SectionWrapper>

      <SectionWrapper className="bg-cream-warm pt-0">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-2.5">
              <span className="gold-rule" />
              <p className="text-eyebrow text-brand-green">The Team</p>
              <span className="gold-rule" />
            </div>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-dark md:text-[60px]">
              Clinicians who listen first.
            </h2>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {team.map((member, i) => (
            <Reveal delay={i * 0.1} key={member.name}>
              <article className="group overflow-hidden rounded-large bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    alt={`${member.name} portrait`}
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    src={member.image}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-eyebrow text-brand-green shadow-soft">
                    {member.specialty}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-dark md:text-3xl">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand-green">{member.title}</p>
                  <p className="mt-4 text-sm leading-7 text-gray-mid md:text-[15px]">
                    {member.bio}
                  </p>
                  <div className="mt-6 max-w-[80px]">
                    <DiamondRule tone="green" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-2.5">
              <span className="gold-rule" />
              <p className="text-eyebrow text-brand-green">Our Values</p>
              <span className="gold-rule" />
            </div>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-dark md:text-[56px]">
              Three things we won't compromise on.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-0">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <Reveal delay={i * 0.08} key={value.title}>
                <article
                  className={
                    "h-full md:px-8 " +
                    (i < values.length - 1
                      ? "border-b border-dark/8 pb-10 md:border-b-0 md:border-r md:pb-0"
                      : "")
                  }
                >
                  <p className="text-eyebrow text-gold">
                    0{i + 1}
                    <span className="text-dark/30"> / 0{values.length}</span>
                  </p>
                  <div className="mt-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand-green">
                    <Icon aria-hidden size={22} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-dark md:text-3xl">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-mid md:text-[15px]">
                    {value.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 grid gap-3 rounded-large bg-cream-warm p-6 shadow-card sm:grid-cols-3 md:grid-cols-6">
            {credentials.map((credential) => (
              <div
                className="rounded-base bg-white px-4 py-3 text-center text-sm font-semibold text-brand-green shadow-soft"
                key={credential}
              >
                {credential}
              </div>
            ))}
          </div>
        </Reveal>
      </SectionWrapper>
    </>
  );
}
