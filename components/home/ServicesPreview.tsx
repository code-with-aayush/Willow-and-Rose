import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services } from "@/lib/data";

export function ServicesPreview() {
  return (
    <SectionWrapper className="bg-brand-light" id="services">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">Treatments</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-dark md:text-5xl">
          Treatments designed around your life.
        </h2>
        <p className="mt-5 text-base leading-8 text-gray-mid">
          Whether you're looking for a little refresh or a complete confidence reset, we have the right treatment — and
          the right team to deliver it.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </SectionWrapper>
  );
}
