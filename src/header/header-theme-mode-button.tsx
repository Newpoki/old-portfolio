import { themeModeAtom } from "@/atoms/theme-mode";
import { IconButton, Tooltip } from "@mui/material";
import { useAtom } from "jotai";
import { useCallback } from "react";
import { DarkMode as DarkModeIcon, Flare as FlareIcon } from "@mui/icons-material";
import { THEME_MODE_LS_KEY } from "@/app/app-constants";
export const HeaderThemeModeButton = () => {
  const [themeMode, setThemeMode] = useAtom(themeModeAtom);

  const handleToggleDarkMode = useCallback(() => {
    const newThemeMode = themeMode === "dark" ? "light" : "dark";

    setThemeMode(newThemeMode);
    localStorage.setItem(THEME_MODE_LS_KEY, newThemeMode);
  }, [setThemeMode, themeMode]);

  return (
    <Tooltip title={themeMode === "dark" ? "Turn on the light" : "Turn off the light"}>
      <IconButton onClick={handleToggleDarkMode} sx={{ color: "custom.mediumEmphasis" }}>
        {themeMode === "dark" ? <FlareIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
};
