import type { Metadata } from "next";
import { CalendarPlus, Instagram } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { clinic } from "@/lib/data";

export const metadata: Metadata = {
  title: "You're Booked",
  description: "Your Willow & Rose consultation is confirmed."
};

export default function ThankYouPage() {
  return (
    <SectionWrapper className="min-h-screen bg-brand-green pt-32 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Confirmation</p>
        <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">You're booked! We'll see you soon.</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82">
          Your demo appointment summary is below. In production, this page can pull the confirmed appointment details
          from Cal.com.
        </p>
        <div className="mt-10 rounded-large bg-white p-6 text-left text-dark shadow-card">
          <dl className="grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-mid">Service</dt>
              <dd className="mt-2 text-sm font-semibold">Free Medical Aesthetics Consultation</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-mid">Location</dt>
              <dd className="mt-2 text-sm font-semibold">{clinic.address}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-mid">Contact</dt>
              <dd className="mt-2 text-sm font-semibold">{clinic.phone}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-mid">Email</dt>
              <dd className="mt-2 text-sm font-semibold">{clinic.email}</dd>
            </div>
          </dl>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/thank-you" variant="secondary">
            <CalendarPlus aria-hidden="true" className="mr-2" size={17} />
            Add to calendar
          </Button>
          <Button href="https://instagram.com" variant="outline">
            <Instagram aria-hidden="true" className="mr-2" size={17} />
            Follow us on Instagram
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
