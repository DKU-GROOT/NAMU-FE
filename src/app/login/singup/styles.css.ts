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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    height: "100%",
  }),

  inputStyle: style({
    width: "100%",
    height: "35px",
    margin: "3px",
    padding: "5px",
    color: "#000",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "12px",
  }),

  buttonStyle: style({
    width: "305px",
    height: "45px",
    padding: "10px",
    backgroundColor: "#7CC08F",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "10px 0",
    fontSize: "16px",
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
};
