import { Button } from "@/components/shared/Button";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Leaf } from "@/components/shared/Ornament";
import { Reveal } from "@/components/shared/Reveal";

export function FinalCTA() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-brand-green py-20 text-white md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0">
        <div className="mx-auto h-px max-w-7xl bg-gold-soft/45" />
      </div>

      <Leaf
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 opacity-15"
        size={220}
        tone="white"
      />
      <Leaf
        aria-hidden
        className="pointer-events-none absolute -left-12 bottom-0 hidden opacity-10 md:block"
        size={180}
        tone="white"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]"
      />

      <Reveal>
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-eyebrow text-gold-soft">Your next chapter</p>
          <h2 className="mt-5 font-display text-5xl italic leading-[1.02] md:text-[88px]">
            Ready to feel like
            <br />
            <span className="text-gold-soft not-italic">yourself again?</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/85 md:text-lg">
            Book a free consultation with a team that listens first and recommends only what makes
            sense for you. Same-week appointments available.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/book" showArrow size="lg" variant="secondary">
              Book Your Free Consultation
            </Button>
            <Button
              className="text-white hover:text-gold-soft"
              href="/services"
              showArrow
              size="lg"
              variant="ghost"
            >
              Explore Treatments
            </Button>
          </div>
          <p className="mt-8 text-sm text-white/65">
            <span className="text-gold-soft">●</span> Currently booking 5 days out · No waitlist
          </p>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
