import Image from "next/image";
import { Button } from "@/components/shared/Button";
import type { services } from "@/lib/data";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="group overflow-hidden rounded-large bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          alt={`${service.name} treatment at Willow & Rose`}
          className="object-cover transition duration-500 group-hover:scale-105"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          src={service.image}
        />
      </div>
      <div className="p-6">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-light text-brand-green">
          <Icon aria-hidden="true" size={21} />
        </div>
        <h3 className="font-display text-2xl text-dark">{service.name}</h3>
        <p className="mt-3 text-sm leading-6 text-gray-mid">{service.body}</p>
        <p className="mt-4 text-sm font-semibold text-brand-green">{service.price}</p>
        <Button className="mt-5 w-full" href="/book">
          Book a Consultation
        </Button>
      </div>
    </article>
  );
}
