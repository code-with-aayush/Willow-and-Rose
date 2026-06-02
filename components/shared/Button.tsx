import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "outline";
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variants = {
  primary: "bg-brand-green text-white hover:bg-[#4d7661]",
  secondary: "bg-white text-dark hover:bg-brand-light",
  light: "bg-cream text-dark hover:bg-white",
  outline: "border border-white/50 bg-white/10 text-white hover:bg-white hover:text-dark"
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  ariaLabel,
  onClick,
  type = "button"
}: ButtonProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center rounded-base px-5 py-3 text-sm font-semibold transition",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link aria-label={ariaLabel} className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button aria-label={ariaLabel} className={classes} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
