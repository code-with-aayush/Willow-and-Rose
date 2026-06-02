import { CalendarDays, Ear, Sparkles } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

const steps = [
  { title: "Book", body: "Choose a free consultation time that works for your week.", icon: CalendarDays },
  { title: "We Listen", body: "Meet with a licensed clinician who maps your goals and answers every question.", icon: Ear },
  { title: "Walk Out Glowing", body: "Leave with a clear plan, natural results, and no pressure.", icon: Sparkles }
];

export function HowItWorks() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">How it works</p>
        <h2 className="mt-4 font-display text-4xl text-dark md:text-5xl">Three steps to feeling refreshed.</h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <article className="relative rounded-large bg-white p-6 shadow-card" key={step.title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">
                {index + 1}
              </div>
              <Icon aria-hidden="true" className="mt-8 text-brand-green" size={30} />
              <h3 className="mt-5 font-display text-2xl text-dark">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-mid">{step.body}</p>
            </article>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <Button href="/book">Book My Free Consultation</Button>
      </div>
    </SectionWrapper>
  );
}
