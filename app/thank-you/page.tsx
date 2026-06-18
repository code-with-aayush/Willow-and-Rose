import type { Metadata } from "next";
import { CalendarPlus, Instagram } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { CheckCircle, Diamond, DiamondRule, Leaf } from "@/components/shared/Ornament";
import { Reveal } from "@/components/shared/Reveal";
import { clinic } from "@/lib/data";
import { ThankYouSummary } from "@/components/booking/ThankYouSummary";

export const metadata: Metadata = {
  title: "You're Booked",
  description: "Your Willow & Rose consultation is confirmed."
};

const nextSteps = [
  {
    title: "Check your email",
    body: "We've sent a confirmation with intake forms. Pre-fill them to save time at the visit."
  },
  {
    title: "Add to your calendar",
    body: "Use the button below — we'll send a friendly reminder the day before your appointment."
  },
  {
    title: "Reach out anytime",
    body: "Need to reschedule or have a quick question? Chat with Willow or text the clinic directly."
  }
];

export default function ThankYouPage() {
  return (
    <SectionWrapper className="relative min-h-screen overflow-hidden bg-brand-green pt-32 text-white">
      <Leaf
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 text-gold-soft opacity-15"
        size={220}
      />
      <Leaf
        aria-hidden
        className="pointer-events-none absolute -left-8 bottom-12 hidden text-gold-soft opacity-10 md:block"
        size={160}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)]"
      />

      <Reveal>
        <div className="relative mx-auto max-w-3xl text-center">
          <CheckCircle className="mx-auto text-gold-soft" size={72} />
          <p className="mt-7 text-eyebrow text-gold-soft">Confirmation</p>
          <h1 className="mt-4 font-display text-5xl italic leading-[1.04] md:text-[72px]">
            You're booked!
            <br />
            <span className="not-italic text-gold-soft">We'll see you soon.</span>
          </h1>
          <div className="mx-auto mt-8 max-w-md">
            <DiamondRule tone="white" />
          </div>
          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-white/85 md:text-lg">
            Your demo appointment summary is below. In production, this page can pull the confirmed
            appointment details from Cal.com.
          </p>

          <ThankYouSummary />


          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/thank-you" showArrow variant="secondary">
              <CalendarPlus aria-hidden className="mr-2" size={17} />
              Add to calendar
            </Button>
            <Button href="https://instagram.com" showArrow variant="outline">
              <Instagram aria-hidden className="mr-2" size={17} />
              Follow us on Instagram
            </Button>
          </div>

          <div className="mx-auto mt-16 max-w-2xl rounded-large bg-white/8 p-6 text-left backdrop-blur md:p-8">
            <p className="text-eyebrow text-gold-soft">
              <span className="text-white">✦</span> What's next
            </p>
            <ol className="mt-5 space-y-5">
              {nextSteps.map((step, i) => (
                <li className="flex gap-4" key={step.title}>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-brand-green">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-sm leading-6 text-white/75">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
