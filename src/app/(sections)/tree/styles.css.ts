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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

globalStyle(`${treeWrapper} img`, {
  width: "100%",
  height: "auto",
  // marginTop: 100,
});

export const infoTagContainer = style({
  display: "flex",
  width: "100%",
  gap: 10,
  justifyContent: "space-around",
  zIndex: 10,
});

export const infoTag = style({
  borderRadius: 20,
  fontSize: 15,
  fontWeight: 500,
  color: "#545454",
  backgroundColor: "#FFF8BC",
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  lineHeight: "25px",
  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
  border: 0,
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

export const shopItemList = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  marginTop: "10px",
});

export const shopItemWrapper = style({
  backgroundColor: "#F7F7F7",
  display: "flex",
  justifyContent: "space-between",
  padding: "11px 13px",
  alignItems: "center",
  borderRadius: "20px",
  gap: "24px",
});

export const shopItemImageWrapper = style({
  backgroundColor: "white",
  padding: "15px",
  borderRadius: "20px",
});

export const shopItemImage = style({
  width: "75px",
  height: "75px",
  backgroundSize: "cover",
});

export const shopItemInfo = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flex: 1,
  gap: "4px",
});

export const shopItemPoint = style({
  color: "#28B02E",
});
