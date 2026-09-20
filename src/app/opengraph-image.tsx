import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} · ${profile.role}`;
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
          justifyContent: "space-between",
          padding: 72,
          background: "#0f0f0d",
          color: "#ecebe3",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#98968a" }}>
          <div style={{ width: 16, height: 16, borderRadius: 16, background: "#ff6b2c" }} />
          {profile.role.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, lineHeight: 1, letterSpacing: -4 }}>{profile.name}</div>
          <div style={{ marginTop: 32, fontSize: 32, lineHeight: 1.35, color: "#98968a", maxWidth: 980 }}>
            {profile.tagline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
