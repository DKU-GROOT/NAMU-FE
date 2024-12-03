import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "100%",
  height: "calc(100vh - 80px)",
  display: "flex",
  alignItems: "center",
});

export const container = style({
  margin: "0 auto",
  width: "70vw",
  minWidth: "800px",
  border: "1px solid #93D092",
  borderRadius: 20,
  height: "90%",
  backgroundColor: "#F6FBF4",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
});

export const header = style({});
