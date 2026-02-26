import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2563eb",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "80px",
            fontWeight: 800,
            fontFamily: "Inter, Arial, sans-serif",
          }}
        >
          RC
        </span>
      </div>
    ),
    { ...size }
  );
}
