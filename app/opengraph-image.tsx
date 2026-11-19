import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// The preview image shown when the link is shared (LinkedIn, WhatsApp, Slack, X...).
// Generated once at build time from the content in content/site.ts.
export const alt = `${site.name}, ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#2dd4bf";

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
          background: "radial-gradient(circle at 80% 0%, #10302d 0%, #0a0b10 55%)",
          color: "#eceef4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: ACCENT, letterSpacing: 4 }}>
          PORTFOLIO
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ fontSize: 44, color: ACCENT, marginTop: 8 }}>{site.title}</div>
          <div style={{ fontSize: 30, color: "#a0a6b6", marginTop: 28, maxWidth: 960 }}>
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
                border: "2px solid #252936",
                background: "#11131a",
              }}
            >
              {p.name}
            </div>
          ))}
          <div style={{ display: "flex", fontSize: 26, padding: "10px 6px", color: "#a0a6b6" }}>
            · live demos
          </div>
        </div>
      </div>
    ),
    size,
  );
}
