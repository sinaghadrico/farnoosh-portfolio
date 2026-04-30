import { ImageResponse } from "next/og";
import { site } from "@/content/site";

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
            "radial-gradient(120% 120% at 0% 0%, #E5E3FF 0%, #F5F5F3 55%, #F5F5F3 100%)",
          color: "#101014",
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
            color: "#56555C",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background: "#4F46E5",
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
              <span style={{ color: "#84838A" }}> — {site.role}.</span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              lineHeight: 1.3,
              maxWidth: "900px",
              color: "#3F3E47",
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
            color: "#56555C",
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
