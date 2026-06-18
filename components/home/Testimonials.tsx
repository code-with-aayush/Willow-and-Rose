import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { Marquee } from "@/components/shared/Marquee";
import { DiamondRule } from "@/components/shared/Ornament";
import { Reveal } from "@/components/shared/Reveal";
import { stats, testimonials } from "@/lib/data";

const pressItems = [
  "AS SEEN IN",
  "AUSTIN WELLNESS MAG",
  "VOGUE",
  "ELLE",
  "BYRDIE",
  "REFINERY29",
  "AUSTIN MONTHLY",
  "THE KNOT"
];

export function Testimonials() {
  const [first, second, third] = testimonials;
  return (
    <SectionWrapper className="bg-brand-light">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2.5">
            <span className="gold-rule" />
            <p className="text-eyebrow text-brand-green">Patient stories</p>
            <span className="gold-rule" />
          </div>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] text-dark md:text-[60px]">
            Don't take our word for it.
          </h2>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <TestimonialCard
            avatarInitial={first.name[0]}
            location={first.location}
            name={first.name}
            quote={first.quote}
            variant="featured"
          />
        </Reveal>
        <div className="grid gap-6 lg:col-span-2">
          <Reveal delay={0.1}>
            <TestimonialCard
              avatarInitial={second.name[0]}
              location={second.location}
              name={second.name}
              quote={second.quote}
            />
          </Reveal>
          <Reveal delay={0.18}>
            <TestimonialCard
              avatarInitial={third.name[0]}
              location={third.location}
              name={third.name}
              quote={third.quote}
            />
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.05}>
        <div className="mt-14 overflow-hidden rounded-large bg-white p-8 shadow-card md:p-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                className={
                  "text-center sm:text-left " +
                  (i < stats.length - 1 ? "sm:border-r sm:border-dark/8 sm:pr-8" : "")
                }
                key={stat.label}
              >
                <p className="font-display text-5xl text-brand-green md:text-[64px]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-eyebrow text-gray-mid">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-md">
            <DiamondRule />
          </div>
        </div>
      </Reveal>

      <div className="mt-14 -mx-5 overflow-hidden sm:-mx-6 lg:-mx-8">
        <Marquee items={pressItems} />
      </div>
    </SectionWrapper>
  );
}
