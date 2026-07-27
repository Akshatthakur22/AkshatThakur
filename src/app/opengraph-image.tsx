import { ImageResponse } from "next/og";
import { person } from "@/lib/site";

export const alt = `${person.name} — ${person.jobTitle}, Indore, India`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

/**
 * Social share card. Generated at build time, so it costs nothing at runtime.
 * Only flexbox and a subset of CSS are supported by ImageResponse.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAF9F6",
          padding: "72px 80px",
        }}
      >
        {/* Top rule — the notebook margin line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#1E3A8A",
          }}
        >
          Indore, India
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 700,
              letterSpacing: -4,
              color: "#1E293B",
              lineHeight: 1.05,
            }}
          >
            {person.name}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 38,
              color: "#475569",
            }}
          >
            {person.jobTitle} — Next.js, TypeScript, Python
          </div>

          {/* Hand-drawn style underline */}
          <div
            style={{
              display: "flex",
              marginTop: 32,
              width: 220,
              height: 4,
              backgroundColor: "#1E3A8A",
              borderRadius: 4,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#64748B",
          }}
        >
          <div style={{ display: "flex" }}>
            SafeExam · MailMyCertificate · Calcuzy
          </div>
          <div style={{ display: "flex" }}>Every product begins as a sketch</div>
        </div>
      </div>
    ),
    size
  );
}
