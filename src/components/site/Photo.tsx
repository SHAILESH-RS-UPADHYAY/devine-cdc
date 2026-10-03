import Image from "next/image";
import type { Photo as PhotoData } from "@/lib/site-content";

/** A clinic photo: size and blur placeholder come from the static import, so a preview paints instantly. */
export function Photo({
  photo,
  sizes,
  className,
  eager = false,
  alt,
}: {
  photo: PhotoData;
  sizes: string;
  className?: string;
  eager?: boolean;
  alt?: string;
}) {
  return (
    <Image
      src={photo.src}
      alt={alt ?? photo.alt}
      sizes={sizes}
      className={className}
      placeholder="blur"
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
    />
  );
}
