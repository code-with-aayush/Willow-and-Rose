import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
  ornament?: React.ReactNode;
  ornamentPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  as?: "section" | "div";
};

const POS = {
  "top-left": "top-0 left-0 -translate-x-1/3 -translate-y-1/3",
  "top-right": "top-0 right-0 translate-x-1/3 -translate-y-1/3",
  "bottom-left": "bottom-0 left-0 -translate-x-1/3 translate-y-1/3",
  "bottom-right": "bottom-0 right-0 translate-x-1/3 translate-y-1/3"
};

export function SectionWrapper({
  children,
  className,
  innerClassName,
  id,
  ornament,
  ornamentPosition = "top-right",
  as: Tag = "section"
}: SectionWrapperProps) {
  return (
    <Tag className={cn("relative overflow-hidden py-20 md:py-28", className)} id={id}>
      {ornament ? (
        <div
          aria-hidden
          className={cn("pointer-events-none absolute opacity-25", POS[ornamentPosition])}
        >
          {ornament}
        </div>
      ) : null}
      <div className={cn("relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", innerClassName)}>
        {children}
      </div>
    </Tag>
  );
}
