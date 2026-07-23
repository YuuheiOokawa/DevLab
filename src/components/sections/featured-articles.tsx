import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/articles/article-card";
import { getFeaturedArticles } from "@/data/articles";
import { Reveal } from "@/components/ui/reveal";

export function FeaturedArticles() {
  const featured = getFeaturedArticles();
  const [first, second, third, fourth, fifth] = featured;

  return (
    <section className="relative bg-bg py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured"
            title="注目の記事"
            description="今、読まれているDevLabの記事をピックアップ。"
          />
          <Reveal delay={0.1}>
            <Button href="/articles" variant="secondary" size="sm" className="hidden md:inline-flex">
              すべての記事を見る
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {first && (
            <Reveal className="lg:col-span-2 lg:row-span-2">
              <ArticleCard article={first} size="lg" className="h-full" />
            </Reveal>
          )}
          {second && (
            <Reveal delay={0.08} className="lg:col-span-2">
              <ArticleCard article={second} size="md" className="h-full" />
            </Reveal>
          )}
          {third && (
            <Reveal delay={0.14}>
              <ArticleCard article={third} size="sm" className="h-full" />
            </Reveal>
          )}
          {fourth && (
            <Reveal delay={0.2}>
              <ArticleCard article={fourth} size="sm" className="h-full" />
            </Reveal>
          )}
          {fifth && (
            <Reveal delay={0.26} className="md:col-span-2 lg:col-span-1">
              <ArticleCard article={fifth} size="sm" className="h-full" />
            </Reveal>
          )}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Button href="/articles" variant="secondary" size="sm">
            すべての記事を見る
          </Button>
        </div>
      </Container>
    </section>
  );
}
