import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  location: string;
  quote: string;
};

export function TestimonialCard({ name, location, quote }: TestimonialCardProps) {
  return (
    <article className="rounded-large bg-white p-6 shadow-card">
      <div className="flex gap-1 text-brand-green" aria-label="Five star rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star aria-hidden="true" fill="currentColor" key={index} size={17} />
        ))}
      </div>
      <p className="mt-5 text-sm leading-6 text-dark">"{quote}"</p>
      <p className="mt-5 text-sm font-semibold text-dark">
        {name} <span className="font-normal text-gray-mid">· {location}</span>
      </p>
    </article>
  );
}
