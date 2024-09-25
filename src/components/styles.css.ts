import { style } from "@vanilla-extract/css";

export const styles = {
  header: style({
    position: "sticky",
    left: 0,
    top: 0,
    width: "100%",
    height: "80px",
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
    paddingRight: "30px",
  }),

  contents: style({
    display: "flex",
    width: "96%",
    maxWidth: "1100px",
    height: "100%",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "space-between",
  }),

  navigation: style({
    display: "flex",
    listStyle: "none",
  }),

  listItem: style({
    marginLeft: "30px",
    color: "black",
  }),
};
