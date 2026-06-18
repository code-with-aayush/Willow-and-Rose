import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "outline" | "ghost" | "gold";
  size?: "md" | "lg";
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  showArrow?: boolean;
};

const variants = {
  primary: "bg-brand-green text-white hover:bg-brand-deep shadow-soft",
  secondary: "bg-white text-dark hover:bg-cream-warm shadow-soft",
  light: "bg-cream-warm text-dark hover:bg-white",
  outline: "border border-white/60 text-white hover:bg-white hover:text-dark",
  ghost: "text-white hover:text-gold-soft bg-transparent",
  gold: "bg-gold text-dark hover:bg-gold-soft shadow-soft"
};

const sizes = {
  md: "min-h-11 px-5 py-3 text-sm",
  lg: "min-h-12 px-7 py-3.5 text-[15px]"
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
  onClick,
  type = "button",
  showArrow = false
}: ButtonProps) {
  const classes = cn(
    "focus-ring group inline-flex min-h-11 items-center justify-center gap-2 rounded-base font-semibold tracking-wide transition duration-200",
    sizes[size],
    variants[variant],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight
          aria-hidden
          className="translate-x-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
          size={17}
        />
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link aria-label={ariaLabel} className={classes} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <button aria-label={ariaLabel} className={classes} onClick={onClick} type={type}>
      {content}
    </button>
  );
}
