import Image from "next/image";
import type { Media } from "@/content/site";

/** Shows a demo video, a screenshot/GIF, or a "coming soon" placeholder. */
export function ProjectMedia({ media }: { media: Media }) {
  const frame = "relative aspect-video w-full overflow-hidden rounded-md border border-line bg-surface";

  if (media.kind === "video") {
    return (
      <video
        className={frame}
        src={media.src}
        poster={media.poster}
        aria-label={media.alt}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      />
    );
  }

  if (media.kind === "image") {
    return (
      <div className={frame}>
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes="(min-width: 1024px) 960px, 100vw"
          className="object-cover object-top"
          unoptimized={media.src.endsWith(".gif")}
        />
      </div>
    );
  }

  // Placeholder until a demo video is recorded.
  return (
    <div className={`${frame} flex items-center justify-center text-sm text-muted`}>
      Demo video coming soon
    </div>
  );
}
