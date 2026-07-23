"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CategoryArt } from "@/components/ui/category-art";
import { ArticleCard } from "@/components/articles/article-card";
import { getCategory } from "@/data/categories";
import { getLatestArticles } from "@/data/articles";

const dateFormatter = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export function LatestArticles() {
  const latest = getLatestArticles(6);
  const [hovered, setHovered] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-bg-alt py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Latest" title="最新記事" />
          <Button href="/articles" variant="secondary" size="sm" className="hidden md:inline-flex">
            すべての記事を見る
          </Button>
        </div>

        {/* Editorial list — desktop / tablet */}
        <div
          className="relative mt-12 hidden border-t border-line md:block"
          onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
        >
          {latest.map((article) => {
            const category = getCategory(article.category);
            return (
              <a
                key={article.slug}
                href={article.noteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(article.slug)}
                onMouseLeave={() => setHovered(null)}
                className="group grid grid-cols-12 items-center gap-4 border-b border-line py-6 transition-colors duration-300 hover:border-line-strong"
              >
                <div className="col-span-3 flex items-center gap-4 lg:col-span-2">
                  <span className="font-display text-sm text-ink-soft">
                    VOL.{String(article.vol).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-1 hidden text-xs font-semibold uppercase tracking-widest text-accent-cyan lg:block">
                  {category?.label}
                </div>
                <div className="col-span-6 lg:col-span-6">
                  <p className="font-display text-xl font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-cyan md:text-2xl">
                    {article.title}
                  </p>
                </div>
                <div className="col-span-3 flex items-center justify-end gap-4 text-xs text-ink-soft lg:col-span-3">
                  <span>{dateFormatter.format(new Date(article.date))}</span>
                  <ArrowUpRight className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Floating thumbnail preview */}
        {!reduced && (
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none fixed z-40 hidden h-40 w-56 overflow-hidden rounded-2xl border border-line-strong shadow-2xl md:block"
                style={{ left: pos.x + 24, top: pos.y - 80 }}
              >
                <CategoryArt
                  category={
                    latest.find((a) => a.slug === hovered)?.category ?? "ai"
                  }
                  className="h-full w-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Card grid — mobile */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:hidden">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} size="sm" />
          ))}
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
