import Image from "next/image";
import { Button } from "@/components/shared/Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-green py-16 text-white md:py-24">
      <Image
        alt="Serene med spa treatment room"
        className="object-cover opacity-[0.24] mix-blend-multiply"
        fill
        sizes="100vw"
        src="/images/cta-bg.png"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl leading-tight md:text-5xl">Ready to feel like yourself again?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82">
          Book a free consultation with a team that listens first and recommends only what makes sense for you.
        </p>
        <Button className="mt-8" href="/book" variant="secondary">
          Book Your Free Consultation
        </Button>
      </div>
    </section>
  );
}
