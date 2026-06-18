import { QuoteMark } from "@/components/shared/Ornament";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  name: string;
  location: string;
  quote: string;
  variant?: "default" | "featured";
  avatarSrc?: string;
  avatarInitial?: string;
};

export function TestimonialCard({
  name,
  location,
  quote,
  variant = "default",
  avatarSrc,
  avatarInitial
}: TestimonialCardProps) {
  if (variant === "featured") {
    return (
      <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-large bg-dark p-8 text-white shadow-lift md:p-12">
        <QuoteMark className="absolute right-6 top-6 opacity-15 md:right-10 md:top-10" tone="green" />
        <div className="relative">
          <div className="flex items-center gap-1 text-gold-soft" aria-label="Five star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star aria-hidden fill="currentColor" key={i} size={16} />
            ))}
          </div>
          <p className="mt-6 font-display text-2xl italic leading-snug md:text-3xl">
            "{quote}"
          </p>
        </div>
        <div className="relative mt-10 flex items-center gap-4">
          {avatarSrc ? (
            <span
              aria-hidden
              className="relative inline-flex h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/20"
            >
              <span
                className="block h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${avatarSrc})` }}
              />
            </span>
          ) : avatarInitial ? (
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-sage text-base font-semibold text-white">
              {avatarInitial}
            </span>
          ) : null}
          <div>
            <p className="text-sm font-semibold text-white">{name}</p>
            <p className="text-xs text-white/60">{location}</p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-large bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
      <QuoteMark className="absolute -top-2 left-4 opacity-50" tone="sage" />
      <div className="relative mt-6 flex gap-1 text-brand-green" aria-label="Five star rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star aria-hidden fill="currentColor" key={i} size={15} />
        ))}
      </div>
      <p className={cn("mt-5 text-sm leading-7 text-dark md:text-[15px]")}>"{quote}"</p>
      <div className="mt-6 flex items-center gap-3 border-t border-black/5 pt-5">
        {avatarInitial ? (
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-sage text-xs font-semibold text-white">
            {avatarInitial}
          </span>
        ) : null}
        <div>
          <p className="text-sm font-semibold text-dark">{name}</p>
          <p className="text-xs text-gray-mid">· {location}</p>
        </div>
      </div>
    </article>
  );
}
