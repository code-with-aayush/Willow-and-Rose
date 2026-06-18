import { cn } from "@/lib/utils";

export function Logomark({ className, size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      aria-hidden
      className={cn("text-brand-green", className)}
      fill="none"
      height={size}
      viewBox="0 0 40 40"
      width={size}
    >
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" />
      <path
        d="M11 13 C 13 22, 16 27, 20 27 C 24 27, 27 22, 29 13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
      <path d="M20 12 L 20 27" stroke="currentColor" strokeLinecap="round" strokeWidth="1" />
      <circle cx="29" cy="13" r="1.5" fill="currentColor" />
    </svg>
  );
}
