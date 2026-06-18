import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Diamond, DiamondRule, Leaf, Rose } from "@/components/shared/Ornament";
import { Reveal } from "@/components/shared/Reveal";
import { whyUs } from "@/lib/data";

export function WhyUs() {
  return (
    <SectionWrapper className="bg-cream" ornament={<Rose size={420} />}>
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
        <Reveal>
          <div className="flex items-center gap-2.5">
            <span className="gold-rule" />
            <p className="text-eyebrow text-brand-green">Why Willow &amp; Rose</p>
          </div>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] text-dark md:text-[56px]">
            A med spa that doesn't feel like a med spa.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-gray-mid">
            At Willow &amp; Rose, we believe looking your best shouldn't feel intimidating. No hard
            upsells. No rushed appointments. Just a warm, welcoming clinic in the heart of Austin
            where our nurse practitioners take the time to actually understand your goals — and help
            you get there safely.
          </p>
          <Link
            className="focus-ring mt-7 inline-flex items-center gap-2 rounded-base text-sm font-semibold text-brand-green transition hover:text-brand-deep"
            href="/about"
          >
            Meet the team
            <ArrowRight
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
              size={16}
            />
          </Link>
          <div className="mt-10 max-w-sm">
            <DiamondRule />
          </div>
        </Reveal>

        <div className="grid gap-0">
          {whyUs.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal delay={i * 0.08} key={pillar.title}>
                <article
                  className={
                    "relative grid grid-cols-[auto_1fr] gap-6 py-8 transition md:gap-8 " +
                    (i === 0
                      ? "rounded-large bg-white p-7 shadow-card md:p-8"
                      : "border-t border-dark/8 px-2")
                  }
                >
                  <div
                    className={
                      "flex shrink-0 items-center justify-center rounded-full " +
                      (i === 0 ? "h-14 w-14 bg-brand-light text-brand-green" : "h-12 w-12 bg-cream-warm text-brand-green")
                    }
                  >
                    <Icon aria-hidden size={i === 0 ? 24 : 20} />
                  </div>
                  <div>
                    <p className="text-eyebrow mb-2 text-brand-green">
                      <span className="text-gold">0{i + 1}</span>
                      <span className="text-dark/30"> / 03</span>
                    </p>
                    <h3 className="font-display text-2xl text-dark md:text-[26px]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-gray-mid md:text-[15px]">
                      {pillar.body}
                    </p>
                  </div>
                  {i === 0 ? (
                    <span aria-hidden className="absolute right-6 top-6">
                      <Leaf className="text-brand-sage opacity-70" size={28} />
                    </span>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
