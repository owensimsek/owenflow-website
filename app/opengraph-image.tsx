import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OwenFlow — Know where your money goes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0F2248 0%, #0B1D3A 50%, #081528 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Icon mark */}
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 1024 1024" fill="none">
              <path
                d="M 238 634 A 300 300 0 0 1 755 336"
                stroke="white"
                strokeWidth="86"
                strokeLinecap="round"
              />
              <path
                d="M 786 390 A 300 300 0 0 1 269 688"
                stroke="white"
                strokeWidth="86"
                strokeLinecap="round"
              />
              <path
                d="M 221 680 C 568 694 412 318 803 342"
                stroke="white"
                strokeWidth="58"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span
            style={{
              color: "white",
              fontSize: "28px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            OwenFlow
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              color: "white",
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "860px",
            }}
          >
            Know where your
            <br />
            money goes.
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.50)",
              fontSize: "28px",
              fontWeight: 400,
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
            }}
          >
            Track income, expenses, and debt — manually, intentionally, clearly.
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.25)",
              fontSize: "20px",
              letterSpacing: "0.04em",
            }}
          >
            owenflow.com
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "8px",
              padding: "10px 20px",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.60)", fontSize: "18px" }}>
              Available on the App Store
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
