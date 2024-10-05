import { style } from "@vanilla-extract/css";

export const styles = {
  container: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "120px",
  }),

  headstyle: style({
    color: "#000000",
    fontSize: "36px",
  }),

  textstyle: style({
    color: "#000000",
    fontSize: "24px",
  }),

  menunbox: style({
    width: "944px",
    height: "609px",
    backgroundColor: "#FAFAFA",
    borderRadius: "10px",
    padding: "3rem",
    textAlign: "center",
  }),

  alarmbox: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "857px",
    height: "79px",
    backgroundColor: "#ffffff",
    padding: "0 1rem",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
  }),

  label: style({
    position: "relative",
    display: "inline-block",
    width: "95px",
    height: "42px",
  }),

  toggle_slide: style({
    display: "none",
  }),

  toggle: style({
    position: "absolute",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    backgroundColor: "#ccc",
    transition: ".4s",
    borderRadius: "34px",
    selectors: {
      "input:checked + &": {
        backgroundColor: "#00498c",
      },
      "input:focus + &": {
        boxShadow: "0 0 1px #00498c",
      },
      "&:before": {
        content: '""',
        position: "absolute",
        width: "31px",
        height: "31px",
        left: "5px",
        bottom: "5px",
        backgroundColor: "#fff",
        transition: ".3s",
        borderRadius: "50%",
      },
      "input:checked + &:before": {
        transform: "translateX(50px)",
      },
    },
  }),

  inquirybox: style({
    marginTop: "23px",
    alignItems: "center",
    width: "857px",
    height: "188px",
    backgroundColor: "#ffffff",
    padding: "0 1rem",
    textAlign: "left",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
  }),

  inquiryitem: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 30px 0px 50px",
    marginTop: "10px",
  }),

  arrow: style({
    fontSize: "20px",
    color: "#000000",
    textDecoration: "none",
  }),

  actionButtons: style({
    display: "flex",
    justifyContent: "space-between",
    marginTop: "200px",
    padding: "0 20px",
  }),

  deleteButton: style({
    backgroundColor: "#D66868",
    color: "#FFFFFF",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    width: "490px",
    height: "40px",
    margin: "10px",
  }),

  logoutButton: style({
    backgroundColor: "#7CC08F",
    color: "#FFFFFF",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    width: "490px",
    height: "40px",
    margin: "10px",
  }),

  floatingButton: style({
    position: "fixed",
    display: "inline-block",
    right: "150px",
    bottom: "200px",
    backgroundColor: "#C1F2A2",
    color: "#FFFFFF",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "none",
    fontSize: "30px",
    cursor: "pointer",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
  }),
};
