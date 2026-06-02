import type { Metadata } from "next";
import { CalendarDays, Check, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

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

export default function BookPage() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK ?? "willowandrose/consultation";
  const calUrl = `https://cal.com/${calLink}?embed=true&theme=light`;

  return (
    <>
      <PageHero
        eyebrow="Book now"
        intro="Choose a free consultation time and come in with every question you have. No credit card required."
        title="Let's find the right treatment for you."
      />
      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-large bg-white shadow-card">
            <div className="flex items-center gap-3 border-b border-black/10 px-5 py-4">
              <CalendarDays aria-hidden="true" className="text-brand-green" size={21} />
              <h2 className="text-base font-semibold text-dark">Free Consultation Calendar</h2>
            </div>
            <iframe
              className="h-[720px] w-full"
              src={calUrl}
              title="Book a Willow & Rose consultation"
            />
          </div>
          <aside className="space-y-5">
            <div className="rounded-large bg-white p-6 shadow-card">
              <h2 className="font-display text-3xl text-dark">What to expect</h2>
              <ul className="mt-5 space-y-4">
                {expectations.map((item) => (
                  <li className="flex gap-3 text-sm leading-6 text-gray-mid" key={item}>
                    <Check aria-hidden="true" className="mt-1 shrink-0 text-brand-green" size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-large bg-brand-light p-6">
              <MessageCircle aria-hidden="true" className="text-brand-green" size={28} />
              <h2 className="mt-4 font-display text-2xl text-dark">Prefer to chat first?</h2>
              <p className="mt-3 text-sm leading-6 text-gray-mid">
                Willow can answer pricing, treatment, hours, location, and booking questions from the chat button on
                this page.
              </p>
            </div>
          </aside>
        </div>
      </SectionWrapper>
    </>
  );
}
