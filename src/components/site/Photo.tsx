import Image from "next/image";
import type { Photo as PhotoData } from "@/lib/site-content";

/** next/image with the export size of our clinic photos (portraits are 1200×1500). */
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
      width={photo.w ?? 1200}
      height={photo.h ?? 1500}
      sizes={sizes}
      className={className}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
    />
  );
}
