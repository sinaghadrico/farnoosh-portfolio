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
          background: "#F5F5F3",
          color: "#101014",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Decorative gradient blob — top right */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -150,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(249,123,170,0.45), rgba(249,123,170,0) 70%)",
            display: "flex",
          }}
        />
        {/* Decorative gradient blob — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(123,107,240,0.4), rgba(123,107,240,0) 70%)",
            display: "flex",
          }}
        />

        {/* Top row: logo + label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background:
                "linear-gradient(135deg, #7B6BF0 0%, #F97BAA 55%, #FFB060 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 14px -6px rgba(139,123,255,0.5)",
            }}
          >
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
              <path
                d="M 20,5 L 5,5 L 5,19"
                stroke="white"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 5,12 L 16,12"
                stroke="white"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#56555C",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Portfolio · 2026
          </div>
        </div>

        {/* Headline + role */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 120,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              fontStyle: "italic",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, #F97316 0%, #E94BA4 50%, #9333EA 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {site.fullName}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              lineHeight: 1.3,
              maxWidth: 900,
              color: "#3F3E47",
              fontFamily: "Inter, system-ui, sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            {site.role} · simplifying complex workflows through UX strategy and
            systems thinking.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#56555C",
            fontFamily: "Inter, system-ui, sans-serif",
            position: "relative",
          }}
        >
          <span>{site.url.replace("https://", "")}</span>
          <span>📍 {site.location}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
