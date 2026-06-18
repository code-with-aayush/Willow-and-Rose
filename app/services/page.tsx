import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Diamond, DiamondRule, Leaf } from "@/components/shared/Ornament";
import { Reveal } from "@/components/shared/Reveal";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Botox, fillers, laser treatments, skin rejuvenation, and body contouring at Willow & Rose."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        intro="Whether you're looking for a little refresh or a complete confidence reset, we have the right treatment — and the right team to deliver it."
        title="Treatments designed around your life."
      />
      <SectionWrapper className="bg-cream">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.id}>
                  <section
                    className="grid scroll-mt-28 gap-10 lg:grid-cols-2 lg:items-center"
                    id={service.id}
                  >
                    <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                      <div className="group relative aspect-[4/3] overflow-hidden rounded-large shadow-card">
                        <Image
                          alt={`${service.name} at Willow & Rose`}
                          className="object-cover transition duration-700 group-hover:scale-[1.04]"
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          src={service.image}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-eyebrow text-brand-green shadow-soft">
                          <span className="text-gold">0{index + 1}</span>
                          <span className="text-dark/40">/</span>
                          <span className="text-dark/55">04</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand-green">
                          <Icon aria-hidden size={22} />
                        </span>
                        <p className="text-eyebrow text-brand-green">
                          <span className="text-gold">0{index + 1}</span>
                          <span className="text-dark/30"> / Chapter 0{services.length}</span>
                        </p>
                      </div>
                      <h2 className="mt-5 font-display text-4xl leading-[1.05] text-dark md:text-[44px]">
                        {service.name}
                      </h2>
                      <p className="mt-5 text-base leading-8 text-gray-mid">{service.body}</p>
                      <div className="mt-7 rounded-large bg-white p-6 shadow-card">
                        <p className="flex items-center gap-2 text-sm font-bold text-dark">
                          <Diamond className="text-gold" size={6} />
                          Who it's for
                        </p>
                        <p className="mt-3 text-sm leading-7 text-gray-mid">{service.who}</p>
                      </div>
                      <div className="mt-6">
                        <p className="text-sm font-bold text-dark">Popular treatments</p>
                        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                          {service.popular.map((item) => (
                            <li
                              className="flex items-center gap-2.5 text-sm text-gray-mid"
                              key={item}
                            >
                              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-light text-brand-green">
                                <Check aria-hidden size={12} />
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-7 flex items-center gap-3">
                        <DiamondRule className="max-w-[80px]" />
                        <p className="text-sm font-semibold text-brand-green">{service.price}</p>
                      </div>
                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <Button href="/book" showArrow>
                          Book Free Consultation
                        </Button>
                        <Button
                          className="text-brand-green hover:text-brand-deep"
                          href="/contact"
                          showArrow
                          variant="ghost"
                        >
                          Ask a question
                        </Button>
                      </div>
                    </div>
                  </section>
                </Reveal>
              );
            })}
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-28 overflow-hidden rounded-large bg-cream-warm p-6 shadow-card">
              <Leaf
                aria-hidden
                className="absolute right-4 top-4 text-brand-sage opacity-50"
                size={48}
              />
              <p className="text-eyebrow text-brand-green">
                <span className="text-gold">✦</span> Not sure where to start?
              </p>
              <p className="mt-4 font-display text-2xl leading-snug text-dark">
                Come in, ask everything, and decide what's right for you.
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-mid">No obligation, ever.</p>
              <div className="mt-6 max-w-[80px]">
                <DiamondRule tone="green" />
              </div>
              <Button className="mt-5 w-full" href="/book" showArrow variant="primary">
                Book Free Consultation
              </Button>
            </div>
          </aside>
        </div>
      </SectionWrapper>
    </>
  );
}
