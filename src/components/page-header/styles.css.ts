import { globalStyle, style } from "@vanilla-extract/css";

export const header = style({
  padding: 40,
  backgroundColor: "#F6FBF4",
});

export const headerContent = style({
  minWidth: 1100,
  width: "60vw",
  margin: "0 auto",
});

globalStyle(`${header} p`, {
  marginTop: 10,
  fontSize: 18,
  color: "#5C5C5C",
});
