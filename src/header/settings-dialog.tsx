import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useAtom } from "jotai";
import { useCallback } from "react";
import { DarkMode as DarkModeIcon, Flare as FlareIcon } from "@mui/icons-material";
import { settingsAtom } from "@/settings/settings-atom";
import { SettingsLanguageCode, SettingsThemeMode } from "@/settings/settings-types";
import { LANGUAGES, LANGUAGE_LS_KEY, THEME_MODE_LS_KEY } from "@/settings/settings-constants";

export const SettingsDialog = () => {
  const [{ isOpen, themeMode, language }, setSettings] = useAtom(settingsAtom);

  const handleCloseSettings = useCallback(() => {
    setSettings((value) => ({ ...value, isOpen: false }));
  }, [setSettings]);

  const handleChangeThemeMode = useCallback(
    (event: React.MouseEvent<HTMLElement>, newThemeMode: SettingsThemeMode) => {
      setSettings((value) => ({ ...value, themeMode: newThemeMode }));

      localStorage.setItem(THEME_MODE_LS_KEY, newThemeMode);
    },
    [setSettings]
  );

  const handleChangeLanguage = useCallback(
    (event: React.MouseEvent<HTMLElement>, newLanguageCode: SettingsLanguageCode) => {
      const newLanguage = LANGUAGES[newLanguageCode];

      setSettings((value) => ({ ...value, language: newLanguage }));

      localStorage.setItem(LANGUAGE_LS_KEY, newLanguage.code);
    },
    [setSettings]
  );

  return (
    <Dialog open={isOpen} onClose={handleCloseSettings} maxWidth="sm" fullWidth>
      <DialogTitle variant="h4">Settings</DialogTitle>
      <DialogContent dividers>
        <Typography variant="h6" mb={2}>
          Theme mode
        </Typography>

        <ToggleButtonGroup
          color="primary"
          value={themeMode}
          exclusive
          onChange={handleChangeThemeMode}
          sx={{ mb: 4 }}
        >
          <ToggleButton value="light">
            <FlareIcon sx={{ mr: 1 }} />
            Light
          </ToggleButton>

          <ToggleButton value="dark">
            <DarkModeIcon sx={{ mr: 1 }} />
            Dark
          </ToggleButton>
        </ToggleButtonGroup>

        <Typography variant="h6" mb={2}>
          Language
        </Typography>

        <ToggleButtonGroup
          color="primary"
          value={language?.code}
          exclusive
          onChange={handleChangeLanguage}
          sx={{ mb: 4 }}
        >
          <ToggleButton
            value={LANGUAGES.fr.code}
            sx={{ alignItems: "center", gap: 1, lineHeight: "16px" }}
          >
            <img src="https://countryflagsapi.com/svg/fr" alt="French flag" width={24} />
            <span>French</span>
          </ToggleButton>

          <ToggleButton
            value={LANGUAGES.en.code}
            sx={{ alignItems: "center", gap: 1, lineHeight: "16px" }}
          >
            <img src="https://countryflagsapi.com/svg/gb" alt="British flag" width={24} />
            <span>English</span>
          </ToggleButton>
        </ToggleButtonGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseSettings} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
