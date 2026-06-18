import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Diamond, Leaf } from "@/components/shared/Ornament";
import { Reveal } from "@/components/shared/Reveal";
import { services } from "@/lib/data";

export function ServicesPreview() {
  const [featured, laser, skin, body] = services;

  return (
    <SectionWrapper className="bg-cream-warm" id="services">
      <Reveal>
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="gold-rule" />
              <p className="text-eyebrow text-brand-green">Our Treatments</p>
            </div>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-dark md:text-[60px]">
              Treatments designed around your life.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-gray-mid">
              Whether you're looking for a little refresh or a complete confidence reset, we have
              the right treatment — and the right team to deliver it.
            </p>
          </div>
          <a
            className="focus-ring group inline-flex items-center gap-2 rounded-base text-sm font-semibold text-brand-green transition hover:text-brand-deep"
            href="/services"
          >
            View all services
            <span className="text-gold transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
        <Reveal className="md:col-span-2">
          <ServiceCard index={0} service={featured} variant="featured" />
        </Reveal>
        <Reveal delay={0.1} className="md:row-span-2">
          <ServiceCard index={1} service={laser} variant="compact" />
        </Reveal>
        <Reveal delay={0.15}>
          <ServiceCard index={2} service={skin} variant="compact" />
        </Reveal>
        <Reveal delay={0.2} className="md:col-span-2">
          <ServiceCard index={3} service={body} variant="wide" />
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-gray-mid">
          <Diamond className="text-gold" size={6} />
          <p>Every treatment begins with a free, no-pressure consultation.</p>
          <Diamond className="text-gold" size={6} />
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
