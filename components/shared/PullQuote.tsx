import Image from "next/image";
import { Star } from "lucide-react";
import { DiamondRule, QuoteMark } from "@/components/shared/Ornament";

type PullQuoteProps = {
  quote: string;
  attribution: string;
  location?: string;
  rating?: number;
  avatarSrc?: string;
  avatarInitial?: string;
};

export function PullQuote({
  quote,
  attribution,
  location,
  rating = 5,
  avatarSrc,
  avatarInitial
}: PullQuoteProps) {
  return (
    <figure className="relative mx-auto max-w-3xl">
      <QuoteMark className="absolute -left-2 -top-6 opacity-90 md:-left-6 md:-top-10" tone="sage" />
      <blockquote className="relative z-10 px-2 text-center font-display text-2xl italic leading-snug text-dark md:text-3xl">
        “{quote}”
      </blockquote>
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          {avatarSrc ? (
            <span className="relative inline-flex h-12 w-12 overflow-hidden rounded-full ring-2 ring-white shadow-soft">
              <Image alt={`${attribution} portrait`} className="object-cover" fill sizes="48px" src={avatarSrc} />
            </span>
          ) : avatarInitial ? (
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-sage text-sm font-semibold text-white shadow-soft">
              {avatarInitial}
            </span>
          ) : null}
          <figcaption className="text-left">
            <p className="text-sm font-semibold text-dark">{attribution}</p>
            {location ? <p className="text-xs text-gray-mid">{location}</p> : null}
          </figcaption>
        </div>
        <div className="flex items-center gap-1 text-gold" aria-label={`${rating} star rating`}>
          {Array.from({ length: rating }).map((_, i) => (
            <Star aria-hidden fill="currentColor" key={i} size={15} />
          ))}
        </div>
        <DiamondRule className="mt-2 max-w-[200px]" tone="gold" />
      </div>
    </figure>
  );
}
