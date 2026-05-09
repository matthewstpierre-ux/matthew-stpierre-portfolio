import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Matthew St Pierre — Music industry builder · Founder, Lisnin.io";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(201,205,210,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,205,210,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Red glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(179,0,27,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Decorative line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div style={{ width: 60, height: 1, background: "linear-gradient(90deg, transparent, #B3001B)" }} />
          <div style={{ fontFamily: "monospace", fontSize: 12, color: "#B3001B", letterSpacing: "0.3em" }}>
            PORTFOLIO · 2026
          </div>
          <div style={{ width: 60, height: 1, background: "linear-gradient(90deg, #B3001B, transparent)" }} />
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            color: "#EAEAEA",
            letterSpacing: "-0.02em",
            lineHeight: 0.9,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          MATTHEW
          <br />
          ST PIERRE
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 18,
            color: "#7A7E85",
            letterSpacing: "0.15em",
            marginBottom: 40,
          }}
        >
          MUSIC INDUSTRY BUILDER · FOUNDER, LISNIN.IO
        </div>

        {/* Chrome badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            border: "1px solid rgba(201,205,210,0.2)",
            borderRadius: 4,
            padding: "8px 20px",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#B3001B",
            }}
          />
          <span style={{ color: "#C9CDD2", fontFamily: "monospace", fontSize: 14, letterSpacing: "0.2em" }}>
            MATTHEWSTPIERRE.COM
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
