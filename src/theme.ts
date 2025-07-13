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

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-Keyboard": {
            minWidth: "0",
            width: "3rem",
            height: "3rem",
            color: "#fff",
            borderColor: "#8b8b8b",
            fontSize: "1.35rem",
          },
        },
      },
    },
  },
});

export default theme;
