import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";
export const alt = `${site.fullName} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(120% 120% at 0% 0%, #F2D2BD 0%, #FAF8F2 55%, #FAF8F2 100%)",
          color: "#0E0E0C",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "20px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#636058",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background: "#D2553E",
            }}
          />
          <span>Portfolio · 2026</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "92px",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              maxWidth: "1000px",
            }}
          >
            <span>
              {site.fullName}
              <span style={{ color: "#636058" }}> — {site.role}.</span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              lineHeight: 1.3,
              maxWidth: "900px",
              color: "#3a3833",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            <span>{site.tagline}</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: "20px",
            color: "#636058",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          <span>{site.url.replace("https://", "")}</span>
          <span>{site.location}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
