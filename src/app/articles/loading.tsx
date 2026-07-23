import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function ArticlesLoading() {
  return (
    <>
      <span className="sr-only" role="status" aria-live="polite">
        記事を読み込んでいます
      </span>
      <section className="border-b border-line bg-bg pb-16 pt-36 md:pt-44">
        <Container>
          <Skeleton className="h-3 w-24" />
          <Skeleton className="mt-4 h-12 w-64 md:h-16 md:w-96" />
          <Skeleton className="mt-6 h-5 w-full max-w-xl" />
          <Skeleton className="mt-2 h-5 w-2/3 max-w-md" />
        </Container>
      </section>

      <section className="bg-bg py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-9 w-20 rounded-full" />
              ))}
            </div>
            <Skeleton className="h-10 w-full rounded-full md:w-72" />
          </div>

          <Skeleton className="mt-6 h-4 w-20" />

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-3xl border border-line">
                <Skeleton className="aspect-[16/11] w-full rounded-none" />
                <div className="space-y-3 p-6">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
