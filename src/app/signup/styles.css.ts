import { style } from "@vanilla-extract/css";

export const styles = {
  container: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "120px",
  }),

  singupBox: style({
    borderRadius: "10px",
    padding: "3rem",
    backgroundColor: "#fafafa",
    width: "400px",
    textAlign: "center",
  }),

  hStyle: style({
    color: "#000",
    fontSize: "20px",
    marginBottom: "5px",
    fontWeight: "bold",
  }),

  inputGroup: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    marginBottom: "10px",
    height: "100%",
  }),

  inputStyle: style({
    width: "100%",
    height: "35px",
    margin: "3px 0",
    padding: "5px",
    color: "#000",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "12px",
  }),

  buttonStyle: style({
    width: "100%",
    height: "45px",
    padding: "10px",
    backgroundColor: "#7CC08F",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "10px 0",
    fontSize: "16px",
    selectors: {
      "&:disabled": {
        backgroundColor: "#ccc",
        cursor: "not-allowed",
      },
    },
  }),

  description: style({
    color: "#000000",
    fontSize: "10px",
  }),

  divider: style({
    width: "100%",
    height: "1px",
    backgroundColor: "#ccc",
    margin: "20px 0",
  }),

  emailWrapper: style({
    display: "flex",
    alignItems: "center",
  }),
  sendButton: style({
    marginLeft: "8px",
    padding: "8px 12px",
    backgroundColor: "#7CC08F",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
    height: "35px",
    width: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
};
