import { CssBaseline, ThemeProvider } from "@mui/material";
import themes from "./themes/themes";
import { AppRouter } from "./router/AppRouter";
import { useAppSelector } from "./store/hooks";

export function Root() {
  const currentTheme = useAppSelector((state) =>
    state.theme === "light" ? themes.light : themes.dark
  );

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}
