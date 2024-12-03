import { globalStyle, style } from "@vanilla-extract/css";

import TreeImage from "@/assets/images/Tree.png";

export const treeSection = style({
  display: "flex",
  width: 500,
  flexDirection: "column",
  alignItems: "center",
  gap: 15,
});

export const treeWrapper = style({
  width: 400,
  height: 400,
  borderRadius: 20,
  backgroundImage: `url(${TreeImage.src})`,
});

export const treeGrowthButton = style({
  width: 400,
  borderRadius: 20,
  fontSize: 18,
  fontWeight: 500,
  color: "#333",
  backgroundColor: "#FFF8BC",
  padding: "10px 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  lineHeight: "25px",
  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
  border: 0,
});

export const treeGrowthButtonIcon = style({
  width: 25,
  height: 25,
  marginRight: 10,
});
export const treeGrowthButtonPoint = style({
  color: "#FF6B00",
});

globalStyle(`${treeGrowthButton} span`, {
  lineHeight: "25px",
  display: "flex",
  alignItems: "center",
});
