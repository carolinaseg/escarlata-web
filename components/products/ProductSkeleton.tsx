import { cn } from "@/lib/utils/cn";

type ProductSkeletonProps = {
  count?: number;
  className?: string;
};

function ProductCardSkeleton() {
  return (
    <div className="flex h-full flex-col bg-crema p-6 shadow-soft md:p-8">
      <div className="mb-8 aspect-[4/5] w-full animate-pulse bg-beige/80" />
      <div className="mt-auto space-y-3">
        <div className="h-2 w-16 animate-pulse bg-beige" />
        <div className="h-7 w-3/4 animate-pulse bg-beige" />
        <div className="h-4 w-full animate-pulse bg-beige/80" />
        <div className="h-4 w-2/3 animate-pulse bg-beige/80" />
        <div className="mt-4 h-3 w-24 animate-pulse bg-beige" />
      </div>
    </div>
  );
}

export function ProductSkeleton({ count = 6, className }: ProductSkeletonProps) {
  return (
    <ul
      className={cn(
        "grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3",
        className,
      )}
      aria-hidden
    >
      {Array.from({ length: count }).map((_, index) => (
        <li key={index}>
          <ProductCardSkeleton />
        </li>
      ))}
    </ul>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-16" aria-hidden>
      <div className="aspect-[4/5] w-full animate-pulse bg-beige/80" />
      <div className="flex flex-col justify-center space-y-4">
        <div className="h-2 w-24 animate-pulse bg-beige" />
        <div className="h-12 w-full animate-pulse bg-beige" />
        <div className="h-4 w-full animate-pulse bg-beige/80" />
        <div className="h-4 w-5/6 animate-pulse bg-beige/80" />
        <div className="mt-4 h-10 w-32 animate-pulse bg-beige" />
      </div>
    </div>
  );
}
