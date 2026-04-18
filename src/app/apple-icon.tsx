import { ImageResponse } from "next/og";

export const runtime = "edge";
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
          background:
            "radial-gradient(120% 120% at 0% 0%, #D2553E 0%, #0E0E0C 80%)",
          color: "#FAF8F2",
          fontSize: 120,
          fontWeight: 500,
          fontFamily: "Georgia, serif",
        }}
      >
        F
      </div>
    ),
    { ...size }
  );
}
