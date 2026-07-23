import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { projectCategories } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="DevLab Projects"
          description="DevLabが今後手がけるプロダクトや実験の置き場所。準備が整い次第、ここに並びます。"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projectCategories.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <div className="group relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-bg-alt p-8 transition-colors duration-500 hover:border-line-strong">
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 100% 0%, rgba(59,130,246,0.12), transparent 70%)",
                  }}
                  aria-hidden
                />
                <div className="relative z-10 flex items-start justify-between">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <span className="rounded-full border border-line-strong px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-ink-soft">
                    COMING SOON
                  </span>
                </div>
                <p className="relative z-10 max-w-sm text-sm leading-relaxed text-ink-soft">
                  {project.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
