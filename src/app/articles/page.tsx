import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { ArticlesExplorer } from "@/components/articles/articles-explorer";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "生成AI、ChatGPT、Claude Code、AI開発、仕事効率化、AI副業。DevLabが発信するすべての記事一覧。",
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Articles"
        title="記事一覧"
        description="AIを知る、学ぶ、使う、作るための記事をすべてここに。カテゴリーやキーワードで絞り込めます。"
      />
      <section className="bg-bg py-16 md:py-20">
        <Container>
          <Suspense fallback={null}>
            <ArticlesExplorer />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
