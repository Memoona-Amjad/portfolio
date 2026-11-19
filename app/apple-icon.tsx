import { ImageResponse } from "next/og";

// Home-screen icon for iPhone/iPad (generated once at build time).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          color: "#fafafa",
          fontSize: 120,
          fontWeight: 700,
        }}
      >
        M
      </div>
    ),
    size,
  );
}
