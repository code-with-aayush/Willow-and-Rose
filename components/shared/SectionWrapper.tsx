import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
};

export function SectionWrapper({ children, className, innerClassName, id }: SectionWrapperProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} id={id}>
      <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", innerClassName)}>{children}</div>
    </section>
  );
}
