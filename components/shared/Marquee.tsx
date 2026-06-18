import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  tone?: "light" | "dark" | "green";
  reverse?: boolean;
  className?: string;
  speed?: "slow" | "normal";
};

const TONE_STYLES = {
  light: "text-dark/70",
  dark: "text-white/70",
  green: "text-white/85"
} as const;

const SEP = {
  light: "text-gold",
  dark: "text-gold",
  green: "text-gold-soft"
} as const;

export function Marquee({ items, tone = "light", reverse = false, className, speed = "slow" }: MarqueeProps) {
  const doubled = [...items, ...items];
  const animClass = speed === "slow" ? (reverse ? "animate-marquee-reverse" : "animate-marquee") : reverse ? "animate-marquee-reverse" : "animate-marquee";
  return (
    <div
      aria-hidden
      className={cn("group relative w-full overflow-hidden", className)}
    >
      <div
        className={cn(
          "flex w-max items-center gap-10 whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]",
          animClass
        )}
      >
        {doubled.map((item, i) => (
          <span
            className={cn("flex items-center gap-10 text-sm font-semibold uppercase tracking-eyebrow", TONE_STYLES[tone])}
            key={`${item}-${i}`}
          >
            {item}
            <span aria-hidden className={cn("text-base", SEP[tone])}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
