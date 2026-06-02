import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { whyUs } from "@/lib/data";

export function WhyUs() {
  return (
    <SectionWrapper>
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">Why Willow & Rose</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-dark md:text-5xl">
            A med spa that doesn't feel like a med spa.
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-mid">
            At Willow & Rose, we believe looking your best shouldn't feel intimidating. No hard upsells. No rushed
            appointments. Just a warm, welcoming clinic in the heart of Austin where our nurse practitioners take the
            time to actually understand your goals — and help you get there safely.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {whyUs.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article className="rounded-large bg-white p-6 shadow-card" key={pillar.title}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-light text-brand-green">
                  <Icon aria-hidden="true" size={21} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-dark">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-mid">{pillar.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
