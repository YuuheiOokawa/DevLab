import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";

export function NewsletterCta() {
  return (
    <section className="relative overflow-hidden bg-bg py-28 md:py-40">
      <div className="aurora absolute inset-0 -z-10 opacity-70" aria-hidden />
      <div className="grid-overlay absolute inset-0 -z-10 opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" aria-hidden />

      <Container className="text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(36px,6.5vw,88px)] font-semibold leading-[1.02] tracking-tight text-ink">
            THE FUTURE
            <br />
            IS BUILT,
            <br />
            <span className="text-gradient">NOT WAITED FOR.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            AIの未来を待つのではなく、AIと一緒に未来を作ろう。
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Button href={site.noteUrl} external size="md">
              DevLabをフォローする
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
