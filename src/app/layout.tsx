import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { roboto } from "@/theme";
import theme from "@/theme";
import { Metadata } from "next";
import CssBaseline from "@mui/material/CssBaseline";

export const metadata: Metadata = {
  title: "MyWordle",
  description: "My custom made Wordle game",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
