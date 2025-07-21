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
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-h1": {
            marginTop: "1rem",
            fontSize: "2rem",
            fontWeight: "400",
            textAlign: "center",
            textDecoration: "underline",
          },
          "&.MuiTypography-body1": {
            marginLeft: "2rem",
            marginTop: "2rem",
          },
        },
      },
    },

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

    MuiSlider: {
      styleOverrides: {
        root: {
          width: "15rem",
          margin: "0 auto",
          display: "block",
        },
      },
    },
  },
});

export default theme;
