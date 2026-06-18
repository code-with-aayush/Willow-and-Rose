import { cn } from "@/lib/utils";

type OrnamentProps = {
  className?: string;
  tone?: "green" | "gold" | "white" | "dark";
  size?: number;
  ariaLabel?: string;
};

const TONE_CLASS = {
  green: "text-brand-green",
  gold: "text-gold",
  white: "text-white",
  dark: "text-dark"
} as const;

export function Leaf({ className, tone = "green", size = 24, ariaLabel = "Decorative leaf" }: OrnamentProps) {
  return (
    <svg
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      className={cn(TONE_CLASS[tone], className)}
      fill="none"
      height={size}
      role={ariaLabel ? "img" : undefined}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="M20 4c-7 0-13 4-13 12 0 2 1 4 3 4 7 0 12-5 12-13 0-1 0-2-1-3-1 0-1 0-1 0Z" />
      <path d="M7 20c2-6 5-9 11-12" />
    </svg>
  );
}

export function Rose({ className, tone = "green", size = 32, ariaLabel = "Decorative rose" }: OrnamentProps) {
  return (
    <svg
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      className={cn(TONE_CLASS[tone], className)}
      fill="none"
      height={size}
      role={ariaLabel ? "img" : undefined}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.1"
      viewBox="0 0 32 32"
      width={size}
    >
      <circle cx="16" cy="14" r="6" />
      <circle cx="13" cy="13" r="3" />
      <path d="M16 20c0 4-1 8-2 11" />
      <path d="M14 31c2-3 3-7 2-11" />
    </svg>
  );
}

export function Diamond({ className, tone = "gold", size = 10, ariaLabel = "Decorative diamond" }: OrnamentProps) {
  return (
    <svg
      aria-hidden
      aria-label={ariaLabel}
      className={cn(TONE_CLASS[tone], className)}
      fill="currentColor"
      height={size}
      role={undefined}
      viewBox="0 0 10 10"
      width={size}
    >
      <path d="M5 0 L10 5 L5 10 L0 5 Z" />
    </svg>
  );
}

export function DiamondRule({ className, tone = "gold" }: { className?: string; tone?: "gold" | "green" | "white" }) {
  const lineClass =
    tone === "white"
      ? "bg-white/40"
      : tone === "green"
        ? "bg-brand-green/40"
        : "bg-gold/55";
  return (
    <div aria-hidden className={cn("flex w-full items-center gap-3", className)}>
      <span className={cn("h-px flex-1", lineClass)} />
      <Diamond className="shrink-0" size={8} tone={tone} />
      <span className={cn("h-px flex-1", lineClass)} />
    </div>
  );
}

export function CheckCircle({ className, tone = "green", size = 56 }: OrnamentProps) {
  return (
    <svg
      aria-hidden
      className={cn(TONE_CLASS[tone], className)}
      fill="none"
      height={size}
      viewBox="0 0 56 56"
      width={size}
    >
      <circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="28" cy="28" r="20" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
      <path d="M19 29 L25 35 L37 22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function QuoteMark({ className, tone = "sage" }: { className?: string; tone?: "sage" | "gold" | "green" }) {
  const color = tone === "gold" ? "text-gold" : tone === "green" ? "text-brand-green" : "text-brand-sage";
  return (
    <svg
      aria-hidden
      className={cn(color, className)}
      fill="currentColor"
      height="100"
      viewBox="0 0 100 100"
      width="100"
    >
      <path d="M30 30 C 30 22, 36 18, 44 18 L 44 26 C 38 26, 35 30, 35 36 L 44 36 L 44 56 L 26 56 L 26 36 C 26 32, 28 30, 30 30 Z" />
      <path d="M70 30 C 70 22, 76 18, 84 18 L 84 26 C 78 26, 75 30, 75 36 L 84 36 L 84 56 L 66 56 L 66 36 C 66 32, 68 30, 70 30 Z" />
    </svg>
  );
}
