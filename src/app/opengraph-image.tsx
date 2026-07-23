import { ImageResponse } from "next/og";
import { site } from "@/data/site";

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
          padding: "80px",
          background:
            "radial-gradient(60% 60% at 15% 10%, rgba(59,130,246,0.35), transparent 60%), radial-gradient(50% 60% at 90% 20%, rgba(108,99,255,0.3), transparent 60%), radial-gradient(55% 60% at 50% 100%, rgba(6,182,212,0.2), transparent 60%), #050505",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #3B82F6, #6C63FF, #06B6D4)",
              color: "#fff",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            D
          </div>
          <div style={{ fontSize: 28, color: "#F5F5F5", fontWeight: 600 }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#F5F5F5",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            AIを、知るだけで
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              backgroundImage:
                "linear-gradient(100deg, #eef2ff 0%, #06B6D4 45%, #6C63FF 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            終わらせない。
          </div>
          <div style={{ marginTop: 24, fontSize: 26, color: "#A1A1AA" }}>
            {site.taglineEn}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
