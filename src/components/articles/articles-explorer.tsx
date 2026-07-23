"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { articles } from "@/data/articles";
import { categories } from "@/data/categories";
import { ArticleCard } from "@/components/articles/article-card";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import type { CategorySlug } from "@/data/types";

const PAGE_SIZE = 6;

export function ArticlesExplorer() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as CategorySlug | null;

  const [activeCategory, setActiveCategory] = useState<CategorySlug | "all">(
    initialCategory && categories.some((c) => c.slug === initialCategory)
      ? initialCategory
      : "all"
  );
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles
      .filter((a) => activeCategory === "all" || a.category === activeCategory)
      .filter(
        (a) =>
          !q ||
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q)
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [activeCategory, query]);

  const shown = filtered.slice(0, visible);

  return (
    <div>
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div
          className="scrollbar-none flex gap-2 overflow-x-auto pb-1"
          role="tablist"
          aria-label="カテゴリー絞り込み"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === "all"}
            onClick={() => {
              setActiveCategory("all");
              setVisible(PAGE_SIZE);
            }}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
              activeCategory === "all"
                ? "border-ink bg-ink text-bg"
                : "border-line text-ink-soft hover:border-line-strong hover:text-ink"
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.slug}
              onClick={() => {
                setActiveCategory(cat.slug);
                setVisible(PAGE_SIZE);
              }}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
                activeCategory === cat.slug
                  ? "border-ink bg-ink text-bg"
                  : "border-line text-ink-soft hover:border-line-strong hover:text-ink"
              )}
            >
              {cat.labelJa}
            </button>
          ))}
        </div>

        <label className="relative w-full md:w-72">
          <span className="sr-only">記事を検索</span>
          <Search
            className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-soft"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(PAGE_SIZE);
            }}
            placeholder="記事を検索"
            className="w-full rounded-full border border-line bg-bg-alt py-2.5 pl-11 pr-4 text-sm text-ink placeholder:text-ink-soft focus-visible:border-accent-cyan"
          />
        </label>
      </div>

      <p className="mt-6 text-sm text-ink-soft">{filtered.length}件の記事</p>

      {shown.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((article, i) => (
            <Reveal key={article.slug} delay={(i % PAGE_SIZE) * 0.05}>
              <ArticleCard article={article} size="md" className="h-full" />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-3 rounded-3xl border border-dashed border-line py-20 text-center">
          <p className="text-ink">該当する記事が見つかりませんでした</p>
          <p className="text-sm text-ink-soft">
            検索条件を変えて、もう一度お試しください。
          </p>
        </div>
      )}

      {visible < filtered.length && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-white/5"
          >
            もっと見る
          </button>
        </div>
      )}
    </div>
  );
}
