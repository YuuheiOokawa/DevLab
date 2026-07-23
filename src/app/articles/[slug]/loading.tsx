import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function ArticleDetailLoading() {
  return (
    <>
      <span className="sr-only" role="status" aria-live="polite">
        記事を読み込んでいます
      </span>
      <section className="border-b border-line bg-bg pb-16 pt-36 md:pt-44">
        <Container>
          <Skeleton className="h-4 w-56" />
          <Skeleton className="mt-6 h-3 w-32" />
          <Skeleton className="mt-4 h-10 w-full max-w-2xl md:h-14" />
          <Skeleton className="mt-2 h-10 w-2/3 max-w-lg md:h-14" />
          <Skeleton className="mt-6 h-4 w-48" />
        </Container>
      </section>

      <section className="bg-bg py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Skeleton className="aspect-[16/9] w-full rounded-3xl" />
              <div className="mt-8 space-y-3">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-5/6" />
              </div>
              <Skeleton className="mt-10 h-28 w-full rounded-3xl" />
            </div>
            <aside className="lg:col-span-4">
              <Skeleton className="h-64 w-full rounded-3xl" />
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
