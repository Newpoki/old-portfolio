import { CssBaseline, ThemeProvider } from "@mui/material";
import { useAtom } from "jotai";
import { ReactNode, useEffect, useMemo } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { THEME_MODE_LS_KEY } from "./app/app-constants";
import { themeModeAtom } from "./atoms/theme-mode";
import { darkTheme } from "./theme/dark-theme";
import { theme } from "./theme/theme";

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  const [themeMode, setThemeMode] = useAtom(themeModeAtom);

  const usedTheme = useMemo(() => {
    return themeMode === "dark" ? darkTheme : theme;
  }, [themeMode]);

  // Set initial themeMode
  useEffect(() => {
    if (themeMode === null) {
      const themeModeFromLS = localStorage.getItem(THEME_MODE_LS_KEY);

      console.log({ themeModeFromLS });

      if (themeModeFromLS === "dark" || themeModeFromLS === "light") {
        setThemeMode(themeModeFromLS);

        return;
      }

      const prefersDarkTheme = window?.matchMedia("(prefers-color-scheme: dark)")?.matches ?? false;

      setThemeMode(prefersDarkTheme ? "dark" : "light");
    }
  }, [setThemeMode, themeMode]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider theme={usedTheme}>
          <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};
