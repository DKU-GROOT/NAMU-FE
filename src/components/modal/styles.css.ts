import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "100%",
  height: "100dvh",
  position: "absolute",
  backgroundColor: "rgba(0,0,0,0.2)",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
});

export const container = style({
  maxWidth: 700,
  width: "90vw",
  maxHeight: 500,
  backgroundColor: "white",
  borderRadius: 10,
  overflow: "hidden",
  padding: "10px 30px",
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export const content = style({
  overflow: "auto",
  flex: 1,
});

export const crossButton = style({
  display: "flex",
  justifyContent: "end",
  fontSize: 30,
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
});

export const title = style({
  fontWeight: "bold",
  fontSize: 20,
});
