import Image from "next/image";
import type { Media } from "@/content/site";
import { PlayIcon } from "./icons";

/** Shows a demo video, a screenshot/GIF, or a "coming soon" placeholder. */
export function ProjectMedia({ media }: { media: Media }) {
  const frame =
    "relative aspect-video w-full overflow-hidden rounded-xl border border-line bg-surface-2";

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
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          unoptimized={media.src.endsWith(".gif")}
        />
      </div>
    );
  }

  // TODO placeholder until the demo video is recorded.
  return (
    <div className={`${frame} flex flex-col items-center justify-center gap-2 text-muted`}>
      <PlayIcon className="h-8 w-8 text-accent/70" />
      <span className="text-sm">Demo video coming soon</span>
    </div>
  );
}
