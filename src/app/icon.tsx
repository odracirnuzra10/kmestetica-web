import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1D1A17",
          color: "#FFFFFF",
          fontSize: 15,
          fontFamily: "Georgia, 'Times New Roman', serif",
          letterSpacing: "0.04em",
          fontWeight: 400,
        }}
      >
        KM
      </div>
    ),
    { ...size },
  );
}
