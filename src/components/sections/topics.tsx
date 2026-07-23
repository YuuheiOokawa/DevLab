import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CategoryArt } from "@/components/ui/category-art";
import { Reveal } from "@/components/ui/reveal";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

const spans = [
  "md:col-span-4 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
];

export function Topics() {
  return (
    <section id="topics" className="relative bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Topics"
          title="主要テーマ"
          description="DevLabが発信する6つの領域。あなたの興味に合わせて掘り下げてください。"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={i * 0.05} className={cn(spans[i % spans.length])}>
              <Link
                href={`/articles?category=${cat.slug}`}
                className={cn(
                  "group relative flex h-full min-h-[200px] flex-col justify-between overflow-hidden rounded-3xl border border-line p-7 transition-all duration-500 hover:-translate-y-1 hover:border-line-strong"
                )}
              >
                <CategoryArt category={cat.slug} className="absolute inset-0" />
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-widest text-white/60">
                    0{i + 1}
                  </span>
                  <ArrowUpRight className="size-5 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                    {cat.label}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{cat.labelJa}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
