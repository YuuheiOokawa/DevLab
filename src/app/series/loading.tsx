import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function SeriesLoading() {
  return (
    <>
      <span className="sr-only" role="status" aria-live="polite">
        シリーズを読み込んでいます
      </span>
      <section className="border-b border-line bg-bg pb-16 pt-36 md:pt-44">
        <Container>
          <Skeleton className="h-3 w-24" />
          <Skeleton className="mt-4 h-12 w-64 md:h-16 md:w-96" />
          <Skeleton className="mt-6 h-5 w-full max-w-xl" />
        </Container>
      </section>

      <section className="bg-bg py-16 md:py-20">
        <Container className="flex flex-col gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-10 rounded-3xl border border-line p-8 md:p-12 lg:grid-cols-12 lg:gap-14"
            >
              <div className="space-y-4 lg:col-span-5">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-9 w-full" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-1 w-full" />
              </div>
              <div className="space-y-4 lg:col-span-7">
                {Array.from({ length: 4 }).map((_, j) => (
                  <Skeleton key={j} className="h-12 w-full" />
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
