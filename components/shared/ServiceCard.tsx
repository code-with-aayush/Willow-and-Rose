import Image from "next/image";
import { Button } from "@/components/shared/Button";
import type { services } from "@/lib/data";
import { Diamond } from "@/components/shared/Ornament";

type Service = (typeof services)[number];

type Variant = "default" | "featured" | "compact" | "wide";

type ServiceCardProps = {
  service: Service;
  index: number;
  variant?: Variant;
};

export function ServiceCard({ service, index, variant = "default" }: ServiceCardProps) {
  const Icon = service.icon;
  const isFeatured = variant === "featured";
  const isWide = variant === "wide";
  const isCompact = variant === "compact";

  const imageClass = isFeatured
    ? "md:col-span-2 aspect-[16/9] md:aspect-[16/8]"
    : isWide
      ? "aspect-[16/8] md:aspect-[16/6]"
      : "aspect-[4/3]";

  const containerClass = cn(
    "group relative flex flex-col overflow-hidden rounded-large bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift",
    isFeatured && "md:flex-row",
    isWide && "md:flex-row"
  );

  return (
    <article className={containerClass}>
      <div className={cn("relative overflow-hidden", imageClass, (isFeatured || isWide) && "md:w-1/2")}>
        <Image
          alt={`${service.name} treatment at Willow & Rose`}
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          src={service.image}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-eyebrow text-brand-green shadow-soft">
          <span aria-hidden className="text-gold">0{index + 1}</span>
          <span className="text-dark/40">/</span>
          <span className="text-dark/55">04</span>
        </div>
      </div>
      <div className={cn("flex flex-1 flex-col p-6 md:p-8", isFeatured && "md:p-10")}>
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-light text-brand-green">
          <Icon aria-hidden size={21} />
        </div>
        <h3 className="relative inline-block font-display text-2xl text-dark md:text-[28px]">
          {service.name}
          <span
            aria-hidden
            className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full"
          />
        </h3>
        <p className="mt-3 text-sm leading-6 text-gray-mid md:text-[15px]">{service.body}</p>
        <div className="mt-5 flex items-center gap-3">
          <Diamond className="text-gold" size={8} />
          <p className="text-sm font-semibold tracking-wide text-brand-green">{service.price}</p>
        </div>
        <div className={cn("mt-auto pt-6", isCompact ? "pt-5" : "pt-6")}>
          <Button className="w-full" href="/book" showArrow variant="primary">
            Book a Consultation
          </Button>
        </div>
      </div>
    </article>
  );
}

function cn(...args: (string | undefined | false)[]) {
  return args.filter(Boolean).join(" ");
}
