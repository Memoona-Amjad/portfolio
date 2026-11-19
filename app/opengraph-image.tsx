import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// The preview image shown when the link is shared (LinkedIn, WhatsApp, Slack, X...).
// Generated once at build time from the content in content/site.ts.
export const alt = `${site.name}, ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#0f766e";

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
          padding: "72px 80px",
          background: "linear-gradient(135deg, #e6f7f4 0%, #f7f8fb 45%, #efe9fd 100%)",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: ACCENT, letterSpacing: 4 }}>
          PORTFOLIO
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ fontSize: 44, color: ACCENT, marginTop: 8, fontWeight: 600 }}>{site.title}</div>
          <div style={{ fontSize: 30, color: "#5b6475", marginTop: 28, maxWidth: 960 }}>
            {site.valueStatement}
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {site.projects.map((p) => (
            <div
              key={p.name}
              style={{
                display: "flex",
                fontSize: 26,
                padding: "10px 22px",
                borderRadius: 999,
                border: "2px solid #e3e7ee",
                background: "#ffffff",
              }}
            >
              {p.name}
            </div>
          ))}
          <div style={{ display: "flex", fontSize: 26, padding: "10px 6px", color: "#5b6475" }}>
            · live demos
          </div>
        </div>
      </div>
    ),
    size,
  );
}
