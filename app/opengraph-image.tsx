import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Repair Copilot — Générateur de mail de réclamation garantie légale";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.2)",
              borderRadius: "16px",
              width: "64px",
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
            }}
          >
            🔧
          </div>
          <span
            style={{
              color: "white",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            Repair Copilot
          </span>
        </div>
        <div
          style={{
            color: "white",
            fontSize: "52px",
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "900px",
            marginBottom: "30px",
          }}
        >
          Appareil en panne ?
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "28px",
            textAlign: "center",
            lineHeight: 1.4,
            maxWidth: "800px",
            marginBottom: "40px",
          }}
        >
          Générez un mail de réclamation garantie légale gratuit en 30 secondes
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              borderRadius: "12px",
              padding: "12px 24px",
              color: "white",
              fontSize: "18px",
            }}
          >
            ✅ 100% gratuit
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              borderRadius: "12px",
              padding: "12px 24px",
              color: "white",
              fontSize: "18px",
            }}
          >
            ✅ Articles de loi inclus
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              borderRadius: "12px",
              padding: "12px 24px",
              color: "white",
              fontSize: "18px",
            }}
          >
            ✅ Sans inscription
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
