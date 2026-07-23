import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function AboutLoading() {
  return (
    <>
      <span className="sr-only" role="status" aria-live="polite">
        ページを読み込んでいます
      </span>
      <section className="border-b border-line bg-bg pb-16 pt-36 md:pt-44">
        <Container>
          <Skeleton className="h-3 w-24" />
          <Skeleton className="mt-4 h-12 w-64 md:h-16 md:w-80" />
        </Container>
      </section>

      <section className="bg-bg py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="space-y-3 lg:col-span-7">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-2/3" />
            </div>
            <div className="space-y-3 lg:col-span-5">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
