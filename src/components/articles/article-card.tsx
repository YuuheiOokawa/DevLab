import { ArrowUpRight } from "lucide-react";
import { CategoryArt } from "@/components/ui/category-art";
import { getCategory } from "@/data/categories";
import type { Article } from "@/data/types";
import { cn } from "@/lib/utils";

const dateFormatter = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export function ArticleCard({
  article,
  size = "sm",
  className,
}: {
  article: Article;
  size?: "lg" | "md" | "sm";
  className?: string;
}) {
  const category = getCategory(article.category);

  return (
    <a
      href={article.noteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-bg-alt transition-all duration-500 ease-out hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.25)]",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          size === "lg" ? "aspect-[16/10]" : "aspect-[16/11]"
        )}
      >
        <CategoryArt
          category={article.category}
          className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="font-display absolute left-5 top-5 text-xs font-semibold tracking-widest text-white/70">
          VOL. {String(article.vol).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
          {category?.labelJa}
        </span>
        <h3
          className={cn(
            "font-display font-semibold leading-snug tracking-tight text-ink",
            size === "lg" ? "text-2xl md:text-3xl" : "text-lg"
          )}
        >
          {article.title}
        </h3>
        {size !== "sm" && (
          <p className="line-clamp-2 text-sm leading-relaxed text-ink-soft">
            {article.description}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between pt-3 text-xs text-ink-soft">
          <span>{dateFormatter.format(new Date(article.date))}</span>
          <span className="inline-flex items-center gap-1 font-medium text-ink transition-colors group-hover:text-accent-cyan">
            読む
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </a>
  );
}
