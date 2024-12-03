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

export const studyListContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 15,
});
