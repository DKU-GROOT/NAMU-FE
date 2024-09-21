import { style } from "@vanilla-extract/css";

export const header = style({
  position: "sticky",
  left: 0,
  top: 0,
  width: "100%",
  height: "80px",
  backgroundColor: "#ffffff"
});

export const contents = style({
  display: "flex",
  width: "96%",
  maxWidth: "1100px",
  height: "100%",
  margin: "0 auto",
  alignItems: "center",
  justifyContent: "space-between"
});

export const navigation = style({
  display: "flex",
  listStyle: "none",
});

export const listItem = style({
  marginLeft: "30px",
  color: "black"
});
