import type { Metadata } from "next";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about consultations, pricing, Botox, fillers, appointments, and natural-looking results."
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        intro="Straight answers before you book, with no pressure and no surprises."
        title="Questions patients ask us every week."
      />
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <FAQAccordion />
          <div className="mt-10 rounded-large bg-brand-light p-6 text-center">
            <h2 className="font-display text-3xl text-dark">Still have questions?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-mid">
              Chat with us or book a free consultation and meet the team in person.
            </p>
            <Button className="mt-5" href="/book">
              Chat with us
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
