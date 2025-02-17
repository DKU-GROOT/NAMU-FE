import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    padding: "16px 0",
    color: "#fff",
    borderRadius: 10,
  },
  variants: {
    theme: {
      primary: { backgroundColor: "#86DA7F" },
      secondary: { backgroundColor: "#FFCE6E" },
    },
    size: {
      full: { width: "100%" },
      fit: { width: "fit" },
    },
  },
  defaultVariants: {
    theme: "primary",
    size: "full",
  },
});
