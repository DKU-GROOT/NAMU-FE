import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  borderBottom: "1px solid #93D092",
  display: "flex",
  padding: "12px 30px 12px 12px",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#fff",
});

export const studySection = style({
  display: "flex",
  alignItems: "center",
  gap: 16,
});

export const thumbnail = style({
  width: 80,
  height: 80,
  backgroundColor: "#F3F3F3",
  borderRadius: 10,
});

export const infoContainer = style({
  display: "flex",
  gap: 10,
  flexDirection: "column",
});

export const title = style({
  fontSize: 18,
});
export const date = style({
  color: "#838383",
  fontSize: 15,
});
export const info = style({
  backgroundColor: "#F3F3F3",
  width: 120,
  justifyContent: "space-around",
  padding: "2px 5px",
  borderRadius: 20,
  display: "flex",
  color: "#5F5F5F",
  fontSize: 14,
  alignItems: "center",
});

globalStyle(`${info} span`, {
  display: "flex",
  alignItems: "center",
  gap: 6,
});

export const buttonContainer = style({
  display: "flex",
  gap: 10,
});
