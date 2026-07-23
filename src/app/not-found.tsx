import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-bg py-24">
      <div className="aurora noise absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div className="grid-overlay absolute inset-0 -z-10 opacity-20 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" aria-hidden />

      <Container>
        <span className="font-display block text-[clamp(64px,14vw,220px)] font-semibold leading-none tracking-tight text-white/[0.06]">
          404
        </span>
        <h1 className="font-display -mt-6 text-[clamp(28px,4vw,48px)] font-semibold leading-tight tracking-tight text-ink md:-mt-10">
          このページは見つかりませんでした。
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
          お探しのページは移動または削除された可能性があります。トップページから、知る・学ぶ・使う・作るコンテンツへ進んでください。
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/">トップへ戻る</Button>
          <Button href="/articles" variant="secondary" showArrow={false}>
            記事一覧を見る
          </Button>
        </div>
      </Container>
    </section>
  );
}
