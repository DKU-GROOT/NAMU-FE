import { globalStyle, style } from "@vanilla-extract/css";

import TreeImage from "../../assets/images/Tree.png";

export const styles = {
  header: style({
    padding: 40,
    backgroundColor: "#F6FBF4",
  }),

  headerContent: style({
    minWidth: 1100,
    width: "60vw",
    margin: "0 auto",
  }),

  main: style({
    display: "flex",
    minWidth: 1100,
    margin: "40px auto",
    width: "60vw",
    flex: "1 auto",
    gap: 20,
  }),

  treeSection: style({
    display: "flex",
    width: 500,
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
  }),

  treeWrapper: style({
    width: 400,
    height: 400,
    borderRadius: 20,
    backgroundImage: `url(${TreeImage.src})`,
  }),

  treeGrowthButton: style({
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
  }),

  treeGrowthButtonIcon: style({
    width: 25,
    height: 25,
    marginRight: 10,
  }),
  treeGrowthButtonPoint: style({
    color: "#FF6B00",
  }),

  listSection: style({}),

  planSection: style({}),

  sectionHeader: style({}),
};

globalStyle(`${styles.header} p`, {
  marginTop: 10,
  fontSize: 18,
  color: "#5C5C5C",
});

globalStyle(`${styles.treeGrowthButton} span`, {
  lineHeight: "25px",
  display: "flex",
  alignItems: "center",
});
