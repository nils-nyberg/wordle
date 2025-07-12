"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {
    background: {
      default: "#2b2b2b",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
