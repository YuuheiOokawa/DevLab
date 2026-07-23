import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  titleJa,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  titleJa?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] text-accent-cyan uppercase">
          <span className="h-px w-6 bg-accent-cyan/70" aria-hidden />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-4 text-[clamp(32px,4.5vw,56px)] font-semibold leading-[1.05] tracking-tight text-ink">
          {title}
        </h2>
      </Reveal>
      {titleJa && (
        <Reveal delay={0.14}>
          <p className="mt-2 text-lg font-medium text-ink-soft">{titleJa}</p>
        </Reveal>
      )}
      {description && (
        <Reveal delay={0.18}>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
