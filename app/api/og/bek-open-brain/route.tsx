import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#E7E8EA",
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
            background: "#C2402A",
            marginBottom: "32px",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: "18px",
            fontWeight: "700",
            color: "#C2402A",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Governance-first AI Memory Layer
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: "72px",
            fontWeight: "900",
            color: "#14171C",
            lineHeight: "1.15",
            marginBottom: "28px",
          }}
        >
          Bek Open Brain
        </div>

        {/* Divider */}
        <div
          style={{
            width: "560px",
            height: "1px",
            background: "rgba(20,23,28,0.14)",
            marginBottom: "28px",
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#5C646F",
            lineHeight: "1.65",
            maxWidth: "780px",
          }}
        >
          Organised ≠ trustworthy. We add a governance layer above your
          folders — source confidence, validity lifecycle, and pre-send
          calibration.
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
              background: "#C2402A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "900",
              color: "#fff",
              fontFamily: "serif",
            }}
          >
            B
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#8E96A2",
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
