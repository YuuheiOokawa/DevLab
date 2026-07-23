import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "DevLabとは何か、なぜ存在するのか。AIを知るだけで終わらせないためのブランドの思想。",
};

const problems = [
  {
    title: "難しすぎる",
    description: "専門用語や技術の壁が高く、多くの人が最初の一歩で立ち止まる。",
  },
  {
    title: "情報が分散している",
    description: "有益な情報が点在し、体系立てて学べる場所がほとんどない。",
  },
  {
    title: "実践方法が分からない",
    description: "知識はあっても、実際に使う・作るところまで辿り着けない。",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="DevLabについて" />

      <section className="bg-bg py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="font-display text-[clamp(24px,3.4vw,38px)] font-medium leading-[1.4] tracking-tight text-ink">
                AIの進化によって、
                <br />
                誰でも「作る側」になれる時代が来ています。
              </p>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5 lg:pt-3">
              <p className="text-base leading-relaxed text-ink-soft">
                しかし、多くの情報は難しすぎたり、分散していたり、実践方法が分からなかったりします。
                DevLabでは、AIを分かりやすく学び、実際に使い、実際に作るところまでを届けます。
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-bg-alt py-20 md:py-28">
        <Container>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-cyan">
              The Problem
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-4 max-w-xl text-[clamp(28px,4vw,44px)] font-semibold leading-tight tracking-tight text-ink">
              AIの情報が溢れているのに、
              <br />
              なぜ使えるようにならないのか。
            </h2>
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {problems.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-3xl border border-line bg-bg-raised p-8">
                  <span className="font-display text-4xl font-semibold text-ink-soft/40">
                    0{i + 1}
                  </span>
                  <h3 className="font-display mt-5 text-xl font-semibold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {p.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-bg py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-cyan">
                Mission
              </span>
              <h2 className="font-display mt-4 text-[clamp(40px,7vw,88px)] font-semibold leading-[0.95] tracking-tight text-ink">
                Make AI
                <br />
                <span className="text-gradient">Practical.</span>
              </h2>
              <p className="mt-6 text-lg font-medium text-ink-soft">
                AIを、誰もが使える力に。
              </p>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="text-base leading-relaxed text-ink-soft">
                DevLabは、生成AIメディア、AI開発ナレッジプラットフォーム、AIツール紹介、
                AI学習プラットフォーム、個人開発プロジェクト、そしてAI関連サービスへと発展していく、
                AI時代を生きるための本拠地です。知る、学ぶ、使う、作る、仕事や収益につなげる。
                その全ての段階に伴走します。
              </p>
              <div className="mt-8">
                <Button href={site.noteUrl} external variant="secondary">
                  noteでDevLabを読む
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
