import { CssBaseline, ThemeProvider } from "@mui/material";
import { useAtom } from "jotai";
import { ReactNode, useEffect, useMemo } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { settingsAtom } from "./settings/settings-atom";
import { LANGUAGES, LANGUAGE_LS_KEY, THEME_MODE_LS_KEY } from "./settings/settings-constants";
import { darkTheme } from "./theme/dark-theme";
import { theme } from "./theme/theme";

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  const [{ themeMode, language }, setSettings] = useAtom(settingsAtom);

  const usedTheme = useMemo(() => {
    return themeMode === "dark" ? darkTheme : theme;
  }, [themeMode]);

  // Set initial themeMode
  useEffect(() => {
    if (themeMode === null) {
      const themeModeFromLS = localStorage.getItem(THEME_MODE_LS_KEY);

      if (themeModeFromLS === "dark" || themeModeFromLS === "light") {
        setSettings((value) => ({ ...value, themeMode: themeModeFromLS }));

        return;
      }

      const prefersDarkTheme = window?.matchMedia("(prefers-color-scheme: dark)")?.matches ?? false;

      setSettings((value) => ({ ...value, themeMode: prefersDarkTheme ? "dark" : "light" }));
    }
  }, [setSettings, themeMode]);

  useEffect(() => {
    if (language === null) {
      const languageCodeFromLS = localStorage.getItem(LANGUAGE_LS_KEY);

      if (languageCodeFromLS === LANGUAGES.fr.code || languageCodeFromLS === LANGUAGES.en.code) {
        const languageFromLS = LANGUAGES[languageCodeFromLS];

        setSettings((value) => ({ ...value, language: languageFromLS }));

        return;
      }

      if (/^fr\b/.test(navigator.language)) {
        setSettings((value) => ({ ...value, language: LANGUAGES.fr }));
      }

      setSettings((value) => ({ ...value, language: LANGUAGES.en }));
    }
  }, [language, setSettings]);

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
