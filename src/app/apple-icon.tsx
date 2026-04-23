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
            "radial-gradient(120% 120% at 0% 0%, #4F46E5 0%, #0C0C10 80%)",
          color: "#ECECE8",
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
