import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapper = style({
  width: "100%",
  height: "calc(100vh - 80px)",
  display: "flex",
  alignItems: "center",
});

export const container = style({
  margin: "0 auto",
  width: "70vw",
  minWidth: "800px",
  border: "1px solid #93D092",
  borderRadius: 20,
  height: "90%",
  overflow: "auto",
  backgroundColor: "#F6FBF4",
});

export const header = style({
  backgroundColor: "#fff",
});

export const content = style({
  padding: 15,
  display: "flex",
  height: "80%",
  gap: 30,
});

export const questionContainer = style({
  backgroundColor: "#fff",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  borderRadius: 10,
  padding: 18,
});

export const questionContent = style({
  display: "flex",
  flexDirection: "column",
  gap: 20,
});

export const questionIndex = style({
  backgroundColor: "#EFEFEF",
  boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
  borderRadius: 5,
  width: "fit-content",
  padding: "4px 8px",
});

export const question = style({
  marginLeft: 10,
  fontSize: 18,
});

export const answerInput = style({
  backgroundColor: "#E4F2EC77",
  padding: "15px 20px",
  borderRadius: 10,
  marginLeft: 10,
  fontSize: 20,
  textAlign: "center",
});

export const buttonContainer = style({
  display: "flex",
  gap: 30,
  justifyContent: "center",
});

export const button = recipe({
  base: {
    padding: "15px 30px",
    backgroundColor: "#60D179",
    borderRadius: 10,
    color: "#fff",
    fontWeight: "bold",
  },
  variants: {},
});

export const aside = style({
  width: 150,
  display: "flex",
  flexDirection: "column",
  padding: "10px 0",
  justifyContent: "space-between",
});

export const questionIndexList = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: 10,
});

export const questionIndexButton = recipe({
  base: {
    fontSize: 16,
  },
  variants: {
    isActive: {
      true: {
        color: "#34B285",
      },
    },
  },
});

export const scoreModal = style({
  height: 300,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  gap: 30,
  color: "#222",
});

globalStyle(`${scoreModal} h2`, {
  marginBottom: 10,
});
