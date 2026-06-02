import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Botox, fillers, laser treatments, skin rejuvenation, and body contouring at Willow & Rose."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        intro="Whether you're looking for a little refresh or a complete confidence reset, we have the right treatment — and the right team to deliver it."
        title="Treatments designed around your life."
      />
      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <section
                  className="grid scroll-mt-28 gap-8 lg:grid-cols-2 lg:items-center"
                  id={service.id}
                  key={service.id}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-large shadow-card">
                      <Image
                        alt={`${service.name} at Willow & Rose`}
                        className="object-cover"
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        src={service.image}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand-green">
                      <Icon aria-hidden="true" size={22} />
                    </div>
                    <h2 className="mt-5 font-display text-4xl text-dark">{service.name}</h2>
                    <p className="mt-4 text-base leading-8 text-gray-mid">{service.body}</p>
                    <div className="mt-6 rounded-large bg-white p-5 shadow-card">
                      <p className="text-sm font-bold text-dark">Who it's for</p>
                      <p className="mt-2 text-sm leading-6 text-gray-mid">{service.who}</p>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm font-bold text-dark">Popular treatments</p>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {service.popular.map((item) => (
                          <li className="flex items-center gap-2 text-sm text-gray-mid" key={item}>
                            <Check aria-hidden="true" className="text-brand-green" size={17} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="mt-6 text-sm font-semibold text-brand-green">{service.price}</p>
                    <Button className="mt-5" href="/book">
                      Book Free Consultation
                    </Button>
                  </div>
                </section>
              );
            })}
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-large bg-white p-5 shadow-card">
              <p className="font-display text-2xl text-dark">Not sure where to start?</p>
              <p className="mt-3 text-sm leading-6 text-gray-mid">
                Come in, ask everything, and decide what's right for you. No obligation, ever.
              </p>
              <Button className="mt-5 w-full" href="/book">
                Book Free Consultation
              </Button>
            </div>
          </aside>
        </div>
      </SectionWrapper>
    </>
  );
}
