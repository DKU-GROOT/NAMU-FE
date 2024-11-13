import { style } from "@vanilla-extract/css";

export const styles = {
  chatheader: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderRadius: "15px",
    backgroundColor: "white",
    border: "1px solid #93D092",
    height: "110px",
  }),

  subjecticon: style({
    width: "50px",
    height: "50px",
    marginRight: "10px",
  }),

  messageInputWrapper: style({
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    width: "100%",
    height: "70px",
  }),

  subjectinfo: style({
    flexGrow: "1",
  }),
  h2style: style({
    color: "black",
  }),

  subjectmeta: style({
    display: "flex",
    gap: "10px",
    marginTop: "5px",
    width: "94px",
    height: "20px",
    backgroundColor: "#F3F3F3",
    borderRadius: "20px",
    fontSize: "11px",
    color: "#5F5F5F",
    alignItems: "center",
  }),

  span: style({
    fontSize: "14px",
    color: "#555",
  }),

  endstudybtn: style({
    backgroundColor: "#60D179",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    width: "157px",
    height: "52px",
    fontSize: "20px",
  }),

  chatarea: style({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "15px 20px",
    borderRadius: "10px",
    width: "100%",
    flex: 1,
    overflowY: "auto",
    backgroundColor: "#F6FBF4",
  }),

  usermessage: style({
    alignSelf: "flex-end",
    gap: "10px",
    backgroundColor: "#E5EDE2",
    padding: "10px 15px",
    borderRadius: "10px",
    maxWidth: "773px",
    color: "black",
  }),

  botmessage: style({
    alignSelf: "flex-start",
    gap: "10px",
    backgroundColor: "#E5EDE2",
    padding: "10px 15px",
    borderRadius: "10px",
    maxWidth: "773px",
    color: "black",
  }),

  messagecontent: style({
    padding: "10px 15px",
    borderRadius: "10px",
  }),

  messageinputarea: style({
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    marginTop: "10px",
    width: "100%",
    height: "70px",
    marginBottom: 10,
  }),

  messageinput: style({
    flexGrow: "1",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "20px 0 0 20px",
    marginRight: "10px",
    width: "740px",
    height: "70px",
    backgroundColor: "white",
    borderStyle: "none",
    color: "black",
    fontSize: "16px",
  }),

  loadingmessage: style({
    textAlign: "center",
    marginTop: "10px",
    color: "black",
  }),

  sendmessagebtn: style({
    backgroundColor: "#94D376",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "0 20px 20px 0",
    cursor: "pointer",
    width: "105px",
    height: "70px",
  }),

  container: style({
    maxWidth: "856.67px",
    maxHeight: "878px",
    margin: "60px auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    backgroundColor: "#F6FBF4",
    padding: "0px",
    borderRadius: "15px",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
    border: "1px solid #93D092",
  }),

  summaryArea: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
    padding: "15px 20px",
    borderRadius: "10px",
    height: "400px",
    overflowY: "auto",
    backgroundColor: "#F6FBF4",
  }),
};
