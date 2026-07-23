import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SeriesCard } from "@/components/series/series-card";
import { seriesList } from "@/data/series";

export const metadata: Metadata = {
  title: "Series",
  description:
    "Claude Codeシリーズ、AI初心者シリーズ、AI副業シリーズ。DevLabのシリーズ連載一覧。",
};

export default function SeriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Series"
        title="シリーズ"
        description="1本で終わらない、体系立てて学べる連載コンテンツ。気になるシリーズから読み進めてください。"
      />
      <section className="bg-bg py-16 md:py-20">
        <Container className="flex flex-col gap-8">
          {seriesList.map((series, i) => (
            <SeriesCard key={series.slug} series={series} reverse={i % 2 === 1} />
          ))}
        </Container>
      </section>
    </>
  );
}
