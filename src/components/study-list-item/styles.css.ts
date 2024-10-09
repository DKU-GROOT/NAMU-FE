import { globalStyle, style } from "@vanilla-extract/css";

export const studyListItem = style({
  border: "1px solid #93D092",
  borderRadius: 12,
  display: "flex",
  padding: 12,
  alignItems: "center",
  gap: 16,
});

export const studyListThumbnail = style({
  width: 100,
  height: 100,
  backgroundColor: "#F3F3F3",
  borderRadius: 10,
});

export const studyListItemInfo = style({
  display: "flex",
  gap: 5,
  flexDirection: "column",
});

export const title = style({
  fontWeight: "bold",
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
