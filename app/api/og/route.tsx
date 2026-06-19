import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#faf6ef",
          backgroundImage:
            "radial-gradient(120% 120% at 50% -10%, #fdfaf4 0%, #faf6ef 45%, #f3ead9 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 90px",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            width: "48px",
            height: "3px",
            background: "#a8431e",
            marginBottom: "32px",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: "18px",
            fontWeight: 700,
            color: "#a8431e",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: "22px",
          }}
        >
          Bekhelpme.com · Bek Tsai
        </div>

        {/* Title (English mirror of the hero) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "serif",
            fontSize: "64px",
            fontWeight: 900,
            color: "#221c15",
            lineHeight: 1.2,
            marginBottom: "28px",
          }}
        >
          <span>Everyone shares the model.</span>
          <span style={{ color: "#a8431e" }}>Your context is yours alone.</span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "560px",
            height: "1px",
            background: "rgba(34,28,21,0.16)",
            marginBottom: "28px",
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: "23px",
            color: "#5b5345",
            lineHeight: 1.6,
            maxWidth: "820px",
          }}
        >
          When owning AI gets cheap, the value moves to what can&apos;t be
          commoditized — your company&apos;s judgment, data, and context. I
          compile that into your AI.
        </div>

        {/* Bottom brand */}
        <div
          style={{
            position: "absolute",
            bottom: "52px",
            right: "90px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "6px",
              background: "#a8431e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: 900,
              color: "#faf6ef",
              fontFamily: "serif",
            }}
          >
            B
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#8a7b67",
              fontFamily: "monospace",
              letterSpacing: "0.02em",
            }}
          >
            bekhelpme.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
