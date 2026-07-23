"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Check, Lock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { claudeCodeCurriculum } from "@/data/curriculum";
import { cn } from "@/lib/utils";

export function ClaudeCodeSeries() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const published = claudeCodeCurriculum.filter((i) => i.articleSlug).length;

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  return (
    <section className="relative overflow-hidden bg-bg-raised py-24 md:py-32">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(40% 60% at 90% 10%, rgba(108,99,255,0.14), transparent 70%)",
        }}
        aria-hidden
      />
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Signature Series"
            title="MASTER CLAUDE CODE"
            description="AIに質問する時代から、AIと一緒に開発する時代へ。"
          />
          <Button href="/series#claude-code-series" variant="secondary" size="sm" className="hidden md:inline-flex">
            シリーズを見る
          </Button>
        </div>

        <div className="mt-4 flex items-center gap-3 text-sm text-ink-soft">
          <span className="font-display font-semibold text-ink">
            {published}
          </span>
          / {claudeCodeCurriculum.length} 公開中
        </div>

        <div className="relative mt-4 h-1 w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan transition-[width] duration-150"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
      </Container>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="scrollbar-none mt-10 flex gap-4 overflow-x-auto px-6 pb-4 md:px-10 lg:px-14"
      >
        {claudeCodeCurriculum.map((item) => {
          const isPublished = Boolean(item.articleSlug);
          const cardClassName = cn(
            "group flex min-w-[240px] shrink-0 flex-col justify-between rounded-2xl border p-6 transition-all duration-300",
            isPublished
              ? "border-line bg-bg-alt hover:-translate-y-1 hover:border-line-strong"
              : "border-dashed border-line/70 bg-transparent opacity-60"
          );

          const content = (
            <>
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-semibold text-ink-soft">
                  {String(item.step).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "flex size-7 items-center justify-center rounded-full border",
                    isPublished
                      ? "border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan"
                      : "border-line text-ink-soft"
                  )}
                >
                  {isPublished ? <Check className="size-3.5" /> : <Lock className="size-3.5" />}
                </span>
              </div>
              <div>
                <p className="font-display text-lg font-semibold leading-snug tracking-tight text-ink">
                  {item.title}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-ink-soft">
                  {isPublished ? "Read Article" : "Coming Soon"}
                </p>
              </div>
            </>
          );

          if (isPublished) {
            return (
              <Link
                key={item.step}
                href={`/articles/${item.articleSlug}`}
                className={cardClassName}
                style={{ aspectRatio: "4/5" }}
              >
                {content}
              </Link>
            );
          }

          return (
            <div key={item.step} className={cardClassName} style={{ aspectRatio: "4/5" }}>
              {content}
            </div>
          );
        })}
      </div>

      <Container>
        <div className="mt-6 md:hidden">
          <Button href="/series#claude-code-series" variant="secondary" size="sm">
            シリーズを見る
          </Button>
        </div>
      </Container>
    </section>
  );
}
