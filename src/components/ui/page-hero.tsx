import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg pb-16 pt-36 md:pt-44">
      <div className="grid-overlay absolute inset-0 -z-10 opacity-20 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" aria-hidden />
      <Container>
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] text-accent-cyan uppercase">
            <span className="h-px w-6 bg-accent-cyan/70" aria-hidden />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display mt-4 text-[clamp(40px,7vw,96px)] font-semibold leading-[0.98] tracking-tight text-ink">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
