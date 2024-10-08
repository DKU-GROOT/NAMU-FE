import { globalStyle, style } from "@vanilla-extract/css";

import TreeImage from "../../assets/images/Tree.png";

export const styles = {
  main: style({
    display: "flex",
    minWidth: 1100,
    margin: "40px auto",
    width: "60vw",
    flex: "1 auto",
    gap: 120,
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
    border: 0,
  }),

  treeGrowthButtonIcon: style({
    width: 25,
    height: 25,
    marginRight: 10,
  }),
  treeGrowthButtonPoint: style({
    color: "#FF6B00",
  }),

  listSection: style({
    width: "100%",
  }),

  planSection: style({}),

  sectionHeader: style({
    display: "flex",
    justifyContent: "space-between",
  }),

  buttonContainer: style({
    display: "flex",
    gap: 5,
  }),

  planList: style({
    marginTop: 15,
    display: "flex",
    padding: "25px",
    border: "1px solid #93D092",
    borderRadius: 12,
    flexDirection: "column",
  }),

  planInputSection: style({
    display: "flex",
    gap: 6,
    marginTop: 20,
  }),

  planInput: style({
    flex: 1,
    backgroundColor: "#F5F5F5",
    borderRadius: "40px 0 0 40px",
    padding: "10px 20px",
    boxSizing: "border-box",
    height: 40,
    fontSize: 15,
  }),

  planButton: style({
    backgroundColor: "#94D376",
    height: 40,
    padding: "11px 0",
    color: "#fff",
    boxSizing: "border-box",
    borderRadius: "0 40px 40px 0",
    width: 40,
    paddingRight: 5,
  }),

  radioButton: style({
    selectors: {
      "&:hover": {
        cursor: "pointer",
      },
      "&:has(input:checked)": {
        color: "#3AB45C",
      },
    },
  }),

  studyListItem: style({
    border: "1px solid #93D092",
    borderRadius: 12,
    display: "flex",
    padding: 12,
    alignItems: "center",
    gap: 16,
  }),

  studyListThumbnail: style({
    width: 100,
    height: 100,
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
  }),

  studyListItemInfo: style({
    display: "flex",
    gap: 8,
    flexDirection: "column",
  }),
};

globalStyle(`${styles.treeGrowthButton} span`, {
  lineHeight: "25px",
  display: "flex",
  alignItems: "center",
});

globalStyle(`${styles.sectionHeader} button`, {
  backgroundColor: "#E3EDE2",
  padding: "0 9px",
  borderRadius: 5,
  color: "#3B4C45",
  fontSize: 12,
});
