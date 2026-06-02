type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="bg-brand-green pt-32 text-white">
      <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 md:pb-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/82">{intro}</p>
      </div>
    </section>
  );
}
