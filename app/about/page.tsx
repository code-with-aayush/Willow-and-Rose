import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the small, clinically trained team behind Willow & Rose Medical Aesthetics in Austin."
};

const team = [
  {
    name: "Claire Whitmore, NP-C",
    title: "Lead Injector & Co-Founder",
    image: "/images/team-claire.png",
    bio: "Board-certified Nurse Practitioner with 10 years in aesthetic medicine."
  },
  {
    name: "Maya Torres, RN",
    title: "Laser & Skin Specialist",
    image: "/images/team-maya.png",
    bio: "Registered nurse specialising in laser treatments and medical-grade facials."
  }
];

const values = [
  { title: "Safety", body: "Licensed clinical providers, careful assessments, and treatment plans that respect your health.", icon: ShieldCheck },
  { title: "Honesty", body: "Clear recommendations, transparent pricing, and no pressure to do more than you want.", icon: BadgeCheck },
  { title: "Results", body: "Natural-looking outcomes that help you feel refreshed, not changed.", icon: Sparkles }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        intro="After years in clinical settings and high-end medical spas, our founders built a clinic where patients feel heard, respected, and never rushed."
        title="We started Willow & Rose because something was missing."
      />
      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-large shadow-card">
            <Image
              alt="Warm Willow & Rose clinic interior"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/images/about-clinic.png"
            />
          </div>
          <div>
            <p className="text-base leading-8 text-gray-mid">
              After years working in clinical settings and high-end medical spas, our founders kept seeing the same
              problem: patients feeling rushed, oversold, or just plain ignored.
            </p>
            <p className="mt-5 text-base leading-8 text-gray-mid">
              So in 2019, we opened Willow & Rose in Austin with one simple rule: treat every patient like a friend who
              came to us for honest advice. That's still how we operate today.
            </p>
            <p className="mt-5 text-base leading-8 text-gray-mid">
              We're proud to be a small, tight-knit team. You'll see the same faces every visit — and we'll remember
              yours.
            </p>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-brand-light">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">Team</p>
          <h2 className="mt-4 font-display text-4xl text-dark md:text-5xl">Clinicians who listen first.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {team.map((member) => (
            <article className="overflow-hidden rounded-large bg-white shadow-card" key={member.name}>
              <div className="relative aspect-[4/3]">
                <Image
                  alt={`${member.name} portrait`}
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  src={member.image}
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-dark">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-green">{member.title}</p>
                <p className="mt-3 text-sm leading-6 text-gray-mid">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article className="rounded-large bg-white p-6 shadow-card" key={value.title}>
                <Icon aria-hidden="true" className="text-brand-green" size={28} />
                <h2 className="mt-5 font-display text-2xl text-dark">{value.title}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-mid">{value.body}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-10 grid gap-4 rounded-large bg-white p-5 shadow-card sm:grid-cols-3">
          {["Licensed NPs", "FDA-approved products", "Medical-grade protocols"].map((credential) => (
            <div className="rounded-base bg-brand-light px-4 py-3 text-center text-sm font-semibold text-brand-green" key={credential}>
              {credential}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
