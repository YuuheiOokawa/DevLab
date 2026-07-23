import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CategoryArt } from "@/components/ui/category-art";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ArticleCard } from "@/components/articles/article-card";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/data/articles";
import { getCategory } from "@/data/categories";
import { getSeries } from "@/data/series";
import { site } from "@/data/site";

const dateFormatter = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const category = getCategory(article.category);
  const series = article.seriesSlug ? getSeries(article.seriesSlug) : undefined;
  const seriesArticles = series
    ? series.articleSlugs
        .map((s) => articles.find((a) => a.slug === s))
        .filter((a): a is typeof article => Boolean(a))
    : [];
  const related = getRelatedArticles(article);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-bg pb-16 pt-36 md:pt-44">
        <div className="grid-overlay absolute inset-0 -z-10 opacity-20 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" aria-hidden />
        <Container>
          <Breadcrumbs
            items={[
              { label: "Articles", href: "/articles" },
              { label: article.title },
            ]}
          />

          <Reveal delay={0.06}>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
              <span>{category?.labelJa}</span>
              <span className="text-ink-soft/50">/</span>
              <span className="text-ink-soft">VOL. {String(article.vol).padStart(2, "0")}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display mt-4 max-w-3xl text-[clamp(32px,5.5vw,64px)] font-semibold leading-[1.08] tracking-tight text-ink">
              {article.title}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-ink-soft">
              <time dateTime={article.date}>{dateFormatter.format(new Date(article.date))}</time>
              <span aria-hidden>·</span>
              <span>{article.readMinutes}分で読める</span>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-bg py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <CategoryArt
                  category={article.category}
                  className="aspect-[16/9] w-full rounded-3xl border border-line"
                />
              </Reveal>

              <Reveal delay={0.08}>
                <p className="mt-8 text-lg leading-relaxed text-ink-soft">
                  {article.description}
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-10 flex flex-col items-start gap-5 rounded-3xl border border-line bg-bg-alt p-8 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-lg font-semibold tracking-tight text-ink">
                      続きはnoteで公開中
                    </p>
                    <p className="mt-1 text-sm text-ink-soft">
                      この記事の全文はDevLabのnoteでお読みいただけます。
                    </p>
                  </div>
                  <Button href={article.noteUrl} external>
                    noteで読む
                  </Button>
                </div>
              </Reveal>

              {series && (
                <Reveal delay={0.18}>
                  <div className="mt-10 rounded-3xl border border-line bg-bg-raised p-8">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
                      Series
                    </span>
                    <h2 className="font-display mt-2 text-xl font-semibold tracking-tight text-ink">
                      {series.titleJa}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {series.description}
                    </p>
                    <ul className="mt-6 divide-y divide-line">
                      {seriesArticles.map((a) => (
                        <li key={a.slug}>
                          <a
                            href={
                              a.slug === article.slug ? undefined : `/articles/${a.slug}`
                            }
                            aria-current={a.slug === article.slug ? "page" : undefined}
                            className={
                              a.slug === article.slug
                                ? "flex items-center gap-4 py-3 text-ink"
                                : "group flex items-center gap-4 py-3 text-ink-soft transition-colors hover:text-ink"
                            }
                          >
                            <span className="font-display w-8 shrink-0 text-sm">
                              {String(a.vol).padStart(2, "0")}
                            </span>
                            <span className="flex-1 text-sm font-medium">{a.title}</span>
                            {a.slug === article.slug && (
                              <span className="text-xs font-semibold uppercase tracking-widest text-accent-cyan">
                                今読んでいる記事
                              </span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button href={`/series#${series.slug}`} variant="secondary" size="sm">
                        シリーズ全体を見る
                      </Button>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 rounded-3xl border border-line bg-bg-alt p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
                  Category
                </p>
                <a
                  href={`/articles?category=${article.category}`}
                  className="group mt-3 flex items-center justify-between rounded-2xl border border-line px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-line-strong"
                >
                  {category?.labelJa}
                  <ArrowUpRight className="size-4 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
                  Follow DevLab
                </p>
                <a
                  href={site.noteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 flex items-center justify-between rounded-2xl border border-line px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-line-strong"
                >
                  noteをフォローする
                  <ArrowUpRight className="size-4 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line bg-bg-alt py-16 md:py-20">
          <Container>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-cyan">
                Related
              </span>
              <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight text-ink">
                関連記事
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.06}>
                  <ArticleCard article={a} size="md" className="h-full" />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
