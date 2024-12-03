import { style } from "@vanilla-extract/css";

export const date = style({
  marginTop: 20,
  marginBottom: -5,
  fontWeight: "bold",
});

export const container = style({
  marginTop: 15,
  display: "flex",
  padding: "25px",
  border: "1px solid #93D092",
  borderRadius: 12,
  flexDirection: "column",
});

export const planList = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export const planInputSection = style({
  display: "flex",
  gap: 6,
  marginTop: 20,
});

export const planInput = style({
  flex: 1,
  backgroundColor: "#F5F5F5",
  borderRadius: "40px 0 0 40px",
  padding: "10px 20px",
  boxSizing: "border-box",
  height: 40,
  fontSize: 15,
});

export const planButton = style({
  backgroundColor: "#94D376",
  height: 40,
  padding: "11px 0",
  color: "#fff",
  boxSizing: "border-box",
  borderRadius: "0 40px 40px 0",
  width: 60,
  paddingRight: 5,
});
