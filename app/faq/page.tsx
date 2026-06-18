import type { Metadata } from "next";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Diamond, DiamondRule, Leaf } from "@/components/shared/Ornament";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about consultations, pricing, Botox, fillers, appointments, and natural-looking results."
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked"
        intro="Straight answers before you book, with no pressure and no surprises."
        title="Questions patients ask us every week."
      />
      <SectionWrapper className="bg-cream">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <FAQAccordion />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mt-12 overflow-hidden rounded-large bg-brand-green p-8 text-white shadow-lift md:p-10">
              <Leaf
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-4 text-gold-soft opacity-25"
                size={140}
              />
              <div className="relative">
                <p className="text-eyebrow text-gold-soft">
                  <span className="text-white">✦</span> Still have questions?
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                  We're happy to chat — no pressure, no script.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 md:text-[15px]">
                  Willow (our AI) can answer most things in seconds, or you can book a free
                  consultation and meet the team in person.
                </p>
                <div className="mt-7 max-w-xs">
                  <DiamondRule tone="white" />
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/book" showArrow variant="secondary">
                    Book a Consultation
                  </Button>
                  <Button
                    className="border-white/40 text-white hover:bg-white hover:text-dark"
                    href="#chat"
                    showArrow
                    variant="outline"
                  >
                    Chat with Willow
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionWrapper>
    </>
  );
}
