import { ArrowUpRight } from "lucide-react";
import { getArticlesBySeries } from "@/data/articles";
import { getCategory } from "@/data/categories";
import type { SeriesItem } from "@/data/types";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function SeriesCard({
  series,
  reverse = false,
}: {
  series: SeriesItem;
  reverse?: boolean;
}) {
  const items = getArticlesBySeries(series.slug);
  const progress = Math.min(100, Math.round((items.length / series.totalPlanned) * 100));

  return (
    <Reveal>
      <article className="grid grid-cols-1 gap-10 rounded-3xl border border-line bg-bg-alt p-8 md:p-12 lg:grid-cols-12 lg:gap-14">
        <div className={cn("lg:col-span-5", reverse && "lg:order-2")}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-cyan">
            Series
          </span>
          <h2 className="font-display mt-3 text-[clamp(28px,4vw,44px)] font-semibold leading-[1.05] tracking-tight text-ink">
            {series.title}
          </h2>
          <p className="mt-1 text-base font-medium text-ink-soft">{series.titleJa}</p>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">
            {series.description}
          </p>

          <div className="mt-8">
            <div className="flex items-center justify-between text-xs text-ink-soft">
              <span>
                {items.length} / {series.totalPlanned} 公開
              </span>
              <span>{progress}%</span>
            </div>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-line">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className={cn("lg:col-span-7", reverse && "lg:order-1")}>
          <ul className="divide-y divide-line">
            {items.map((article) => {
              const category = getCategory(article.category);
              return (
                <li key={article.slug}>
                  <a
                    href={article.noteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-4 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-display w-10 shrink-0 text-sm text-ink-soft">
                        {String(article.vol).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-medium text-ink transition-colors group-hover:text-accent-cyan">
                          {article.title}
                        </p>
                        <p className="mt-0.5 text-xs text-ink-soft">
                          {category?.labelJa}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="size-4 shrink-0 text-ink-soft transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}
