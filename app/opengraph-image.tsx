import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// The preview image shown when the link is shared (LinkedIn, WhatsApp, Slack, X...).
// Generated once at build time from the content in content/site.ts.
export const alt = `${site.name}, ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "radial-gradient(70% 90% at 50% 0%, #1f1f23 0%, #09090b 70%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, color: "#a1a1aa" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#4ade80" }} />
          {site.name} · {site.title}
        </div>

        <div style={{ display: "flex", fontSize: 80, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05, maxWidth: 1000 }}>
          {site.headline}
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {site.projects.map((p) => (
            <div
              key={p.name}
              style={{
                display: "flex",
                fontSize: 26,
                padding: "10px 20px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "#18181b",
              }}
            >
              {p.name}
            </div>
          ))}
          <div style={{ display: "flex", fontSize: 26, padding: "10px 4px", color: "#a1a1aa" }}>live demos</div>
        </div>
      </div>
    ),
    size,
  );
}
