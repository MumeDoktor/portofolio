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
          background: "#07090a",
          color: "#d7e3dd",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#4dff9a" }}>$ whoami</div>
          <div style={{ marginTop: 24, fontSize: 92, fontWeight: 700, lineHeight: 1 }}>{profile.name}</div>
          <div style={{ marginTop: 36, fontSize: 38, lineHeight: 1.35, maxWidth: 1000 }}>{profile.role}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#4dff9a" }}>{profile.location}</div>
      </div>
    ),
    size,
  );
}
