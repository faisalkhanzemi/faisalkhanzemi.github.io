import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Mohd Faisal Khan — CRM & Lifecycle Marketing Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const metrics = [
  { v: "8+", l: "Years in CRM" },
  { v: "5", l: "Brands scaled" },
  { v: "3.4%", l: "Push CTR" },
  { v: "+18%", l: "Retention lift" },
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f8f8f6",
          padding: "72px 80px",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        {/* eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#6b6b6b",
            fontSize: 24,
            letterSpacing: 2,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#2c5f8a",
            }}
          />
          DUBAI, UAE · CRM & LIFECYCLE MARKETING
        </div>

        {/* name + headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              color: "#111111",
              letterSpacing: -2,
            }}
          >
            Mohd Faisal Khan
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 40,
              color: "#111111",
              lineHeight: 1.25,
              maxWidth: 920,
            }}
          >
            CRM &amp; Lifecycle marketing that&nbsp;
            <span style={{ color: "#2c5f8a", fontStyle: "italic" }}>moves</span>
            &nbsp;the retention needle.
          </div>
        </div>

        {/* metrics row */}
        <div style={{ display: "flex", gap: 56 }}>
          {metrics.map((m) => (
            <div key={m.l} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 48, fontWeight: 700, color: "#2c5f8a" }}>
                {m.v}
              </div>
              <div style={{ fontSize: 22, color: "#6b6b6b" }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
