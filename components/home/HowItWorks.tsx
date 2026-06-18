import { ArrowRight, CalendarDays, Ear, Sparkles } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Diamond, DiamondRule } from "@/components/shared/Ornament";
import { Reveal } from "@/components/shared/Reveal";

const steps = [
  {
    title: "Book",
    body: "Choose a free consultation time that works for your week.",
    icon: CalendarDays
  },
  {
    title: "We Listen",
    body: "Meet with a licensed clinician who maps your goals and answers every question.",
    icon: Ear
  },
  {
    title: "Walk Out Glowing",
    body: "Leave with a clear plan, natural results, and no pressure.",
    icon: Sparkles
  }
];

export function HowItWorks() {
  return (
    <SectionWrapper className="bg-white">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2.5">
            <span className="gold-rule" />
            <p className="text-eyebrow text-brand-green">How it works</p>
            <span className="gold-rule" />
          </div>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] text-dark md:text-[60px]">
            Three steps to feeling refreshed.
          </h2>
        </div>
      </Reveal>

      <div className="relative mt-16 grid gap-6 md:grid-cols-3 md:gap-0">
        <div
          aria-hidden
          className="absolute left-[16%] right-[16%] top-6 hidden h-px md:block"
        >
          <DiamondRule tone="green" />
        </div>
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Reveal delay={index * 0.1} key={step.title}>
              <article className="group relative h-full rounded-large bg-cream-warm p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lift md:mx-3 md:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white shadow-soft">
                  0{index + 1}
                </div>
                <Icon
                  aria-hidden
                  className="mt-7 text-brand-green transition group-hover:text-brand-deep"
                  size={28}
                />
                <h3 className="mt-5 font-display text-2xl text-dark">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-mid">{step.body}</p>
                <div className="mt-7 hidden items-center gap-2 text-brand-green md:flex">
                  <span className="text-eyebrow">Next step</span>
                  <ArrowRight aria-hidden size={14} />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-14 text-center">
          <Button href="/book" showArrow size="lg">
            Book My Free Consultation
          </Button>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
