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
          background: "#131210",
          color: "#ece8e1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#a39e94" }}>
          {site.name} · {site.title}
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 1.1 }}>
          <div style={{ display: "flex" }}>{site.headline}</div>
          <div style={{ display: "flex", color: "#e8a45c" }}>{site.headlineItalic}</div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#a39e94", borderTop: "2px solid #2c2a26", paddingTop: 28 }}>
          {site.projects.map((p) => p.name).join("  ·  ")} · live demos
        </div>
      </div>
    ),
    size,
  );
}
