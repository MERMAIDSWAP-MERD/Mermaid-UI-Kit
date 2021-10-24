import { Colors } from "./types";

export const baseColors = {
  failure: "#e992db",
  primary: "#A0A0A0", // "#e992db"
  primaryBright: "#e992db",
  primaryDark: "#e992db",
  secondary: "#22265d",
  success: "#5F9EA0", //  "#e992db",
  warning: "#e992db",
};

export const brandColors = {
  binance: "#FABE41",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#fff",
  backgroundDisabled: "#ffffff",
  contrast: "#f9c5f1",
  invertedContrast: "#f9c5f1",
  input: "#22265d",
  tertiary: "#22265d",
  text: "#22265d",
  textDisabled: "#c0c0c0",
  textSubtle: "#22265d",
  borderColor: "#22265d",
  card: "#F8F8F8",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
