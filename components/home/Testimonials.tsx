import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { stats, testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <SectionWrapper className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">Patient stories</p>
        <h2 className="mt-4 font-display text-4xl text-dark md:text-5xl">Don't take our word for it.</h2>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
      <div className="mt-10 grid gap-4 rounded-large bg-brand-light p-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div className="text-center" key={stat.label}>
            <p className="font-display text-3xl text-brand-green">{stat.value}</p>
            <p className="mt-1 text-sm font-semibold text-gray-mid">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
