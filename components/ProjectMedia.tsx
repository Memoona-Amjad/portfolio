import Image from "next/image";
import type { Media } from "@/content/site";
import { LiveDot } from "./icons";

/**
 * The project's screenshot (or video) inside a realistic browser window,
 * with the real address of the live demo in the address bar.
 */
export function ProjectMedia({ media, url }: { media: Media; url: string }) {
  const host = url ? new URL(url).host : "";

  return (
    <div className="overflow-hidden rounded-xl border border-line-strong bg-surface-2 shadow-2xl shadow-black/40">
      {/* Browser bar */}
      <div className="flex h-9 items-center gap-3 border-b border-line px-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </span>
        <span className="flex min-w-0 flex-1 items-center justify-center">
          <span className="flex min-w-0 max-w-full items-center gap-2 rounded-md bg-white/5 px-3 py-0.5 font-mono text-[11px] text-muted">
            {host ? (
              <>
                <LiveDot />
                <span className="truncate">{host}</span>
              </>
            ) : (
              "demo coming soon"
            )}
          </span>
        </span>
        <span className="hidden w-[42px] sm:block" aria-hidden />
      </div>

      {/* Page content */}
      <div className="relative aspect-video w-full bg-white">
        {media.kind === "image" && (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover object-top"
            unoptimized={media.src.endsWith(".gif")}
          />
        )}
        {media.kind === "video" && (
          <video
            className="absolute inset-0 h-full w-full object-cover object-top"
            src={media.src}
            poster={media.poster}
            aria-label={media.alt}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          />
        )}
        {media.kind === "placeholder" && (
          <div className="absolute inset-0 flex items-center justify-center bg-surface-2 text-sm text-muted">
            Demo video coming soon
          </div>
        )}
      </div>
    </div>
  );
}
