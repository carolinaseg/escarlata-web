import Image from "next/image";
import { cn } from "@/lib/utils/cn";

type ProductImageProps = {
  src?: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function ProductImage({
  src,
  alt,
  priority = false,
  className,
}: ProductImageProps) {
  return (
    <div
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden bg-beige/80",
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-b from-beige/40 to-rosa/10"
          aria-hidden
        />
      )}
    </div>
  );
}
