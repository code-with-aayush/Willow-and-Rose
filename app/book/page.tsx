import type { Metadata } from "next";
import { CalendarDays, Check, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Diamond, DiamondRule, Leaf } from "@/components/shared/Ornament";
import { Reveal } from "@/components/shared/Reveal";
import { BookingFlow } from "@/components/booking/BookingFlow";

export const metadata: Metadata = {
  title: "Book Now",
  description: "Book your free consultation with Willow & Rose Medical Aesthetics in Austin."
};

const expectations = [
  "A free, no-pressure consultation with a licensed clinician",
  "A careful conversation about goals, comfort level, and timing",
  "A clear treatment recommendation with transparent pricing",
  "Same-week appointment options when available"
];

type BookPageProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function BookPage({ searchParams }: BookPageProps) {
  return (
    <>
      <PageHero
        eyebrow="Book Now"
        intro="Choose a free consultation time and come in with every question you have. No credit card required."
        title="Let's find the right treatment for you."
      />
      <SectionWrapper className="bg-cream">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <BookingFlow searchParams={searchParams} />
          </Reveal>
          <aside className="space-y-5">
            <Reveal delay={0.05}>
              <div className="rounded-large bg-white p-6 shadow-card">
                <p className="text-eyebrow text-brand-green">
                  <span className="text-gold">✦</span> What to expect
                </p>
                <h2 className="mt-4 font-display text-2xl text-dark md:text-3xl">
                  An unhurried, honest first visit.
                </h2>
                <ul className="mt-6 space-y-4">
                  {expectations.map((item, i) => (
                    <li className="flex gap-3 text-sm leading-7 text-gray-mid" key={item}>
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-light text-xs font-bold text-brand-green">
                        0{i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 max-w-[100px]">
                  <DiamondRule />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-large border-l-4 border-gold bg-cream-warm p-6 shadow-card">
                <Leaf
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-2 text-brand-sage opacity-40"
                  size={70}
                />
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-green shadow-soft">
                  <MessageCircle aria-hidden size={18} />
                </span>
                <h2 className="mt-4 font-display text-2xl text-dark">Prefer to chat first?</h2>
                <p className="mt-3 text-sm leading-7 text-gray-mid">
                  Willow can answer pricing, treatment, hours, location, and booking questions from
                  the chat button on this page.
                </p>
                <div className="mt-5 max-w-[80px]">
                  <DiamondRule tone="green" />
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </SectionWrapper>
    </>
  );
}

