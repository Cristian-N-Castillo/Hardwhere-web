import { ImageResponse } from "next/og";

export const alt = "HardWhere: software, cloud y ciberseguridad en Chile";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: 72,
          background: "#f2ede3",
          color: "#111110",
          fontFamily: "serif",
          border: "2px solid #111110",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "monospace", fontSize: 20, letterSpacing: 3 }}>
          <span>HARDWHERE</span>
          <span>SOFTWARE · CLOUD · CIBERSEGURIDAD</span>
        </div>
        <div style={{ display: "flex", fontSize: 80, lineHeight: 1.02, letterSpacing: -2, maxWidth: 1020 }}>
          Construimos el software que tu organización necesita, y lo dejamos listo para la Ley 21.719.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "monospace", fontSize: 20, letterSpacing: 3 }}>
          <span>HECHO EN CHILE</span>
          <span>CUMPLIMIENTO CON EVIDENCIA</span>
        </div>
      </div>
    ),
    size,
  );
}
