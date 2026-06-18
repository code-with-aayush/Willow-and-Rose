import { Diamond, DiamondRule, Leaf } from "@/components/shared/Ornament";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  align?: "left" | "center";
  variant?: "green" | "cream";
};

export function PageHero({ eyebrow, title, intro, align = "left", variant = "green" }: PageHeroProps) {
  const isGreen = variant === "green";
  return (
    <section
      className={
        isGreen
          ? "relative overflow-hidden bg-brand-green pt-32 text-white"
          : "relative overflow-hidden bg-cream-warm pt-32 text-dark"
      }
    >
      <div
        aria-hidden
        className={
          isGreen
            ? "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/8 blur-2xl"
            : "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-green/12 blur-2xl"
        }
      />
      <Leaf
        aria-hidden
        className="pointer-events-none absolute -bottom-6 -left-6 opacity-15"
        size={140}
        tone={isGreen ? "white" : "green"}
      />
      <Leaf
        aria-hidden
        className="pointer-events-none absolute right-10 top-32 hidden opacity-10 md:block"
        size={70}
        tone={isGreen ? "white" : "green"}
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-6 md:pb-20 lg:px-8">
        <div className="flex items-center gap-3">
          <Diamond size={8} tone={isGreen ? "gold" : "gold"} />
          <p
            className={
              isGreen
                ? "text-eyebrow text-white/70"
                : "text-eyebrow text-brand-green"
            }
          >
            {eyebrow}
          </p>
        </div>
        <h1
          className={
            "mt-5 max-w-4xl font-display text-5xl leading-[1.05] md:text-[72px] md:leading-[1.02] " +
            (align === "center" ? "mx-auto text-center" : "")
          }
        >
          {title}
        </h1>
        <p
          className={
            "mt-6 max-w-2xl text-base leading-8 " +
            (isGreen ? "text-white/82" : "text-gray-mid") +
            (align === "center" ? " mx-auto" : "")
          }
        >
          {intro}
        </p>
        <div className="mt-10 max-w-md">
          <DiamondRule tone={isGreen ? "white" : "gold"} />
        </div>
      </div>
    </section>
  );
}
