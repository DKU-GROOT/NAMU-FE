import { style } from "@vanilla-extract/css";

export const planSection = style({});

export const radioButton = style({
  selectors: {
    "&:hover": {
      cursor: "pointer",
    },
    "&:has(input:checked)": {
      color: "#3AB45C",
    },
  },
});

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
  gap: 8,
  flexDirection: "column",
});
