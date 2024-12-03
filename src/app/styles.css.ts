import { globalStyle, style } from "@vanilla-extract/css";

export const styles = {
  main: style({
    display: "flex",
    minWidth: 1100,
    margin: "40px auto",
    width: "60vw",
    flex: "1 auto",
    gap: 120,
  }),

  listSection: style({
    width: "100%",
  }),

  sectionHeader: style({
    display: "flex",
    justifyContent: "space-between",
  }),

  buttonContainer: style({
    display: "flex",
    gap: 5,
  }),
};

globalStyle(`${styles.sectionHeader} button`, {
  backgroundColor: "#E3EDE2",
  padding: "0 9px",
  borderRadius: 5,
  color: "#3B4C45",
  fontSize: 12,
});
