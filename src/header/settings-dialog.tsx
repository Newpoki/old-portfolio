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
import { useTranslation } from "react-i18next";

export const SettingsDialog = () => {
  const [{ isOpen, themeMode, language }, setSettings] = useAtom(settingsAtom);
  const { t, i18n } = useTranslation("settings");

  const handleCloseSettings = useCallback(() => {
    setSettings((value) => ({ ...value, isOpen: false }));
  }, [setSettings]);

  const handleChangeThemeMode = useCallback(
    (event: React.MouseEvent<HTMLElement>, newThemeMode: SettingsThemeMode) => {
      // We don't want user to unselect current theme mode by clicking on the same that is already selected
      if (newThemeMode === null) {
        return;
      }

      setSettings((value) => ({ ...value, themeMode: newThemeMode }));

      localStorage.setItem(THEME_MODE_LS_KEY, newThemeMode);
    },
    [setSettings]
  );

  const handleChangeLanguage = useCallback(
    (event: React.MouseEvent<HTMLElement>, newLanguageCode: SettingsLanguageCode) => {
      // We don't want user to unselect current language by clicking on the same that is already selected
      if (newLanguageCode === null) {
        return;
      }

      const newLanguage = LANGUAGES[newLanguageCode];

      setSettings((value) => ({ ...value, language: newLanguage }));

      i18n.changeLanguage(newLanguage.code);

      localStorage.setItem(LANGUAGE_LS_KEY, newLanguage.code);
    },
    [i18n, setSettings]
  );

  return (
    <Dialog open={isOpen} onClose={handleCloseSettings} maxWidth="sm" fullWidth>
      <DialogTitle variant="h4">{t("settings:dialog.title")}</DialogTitle>
      <DialogContent dividers>
        <Typography variant="h6" mb={2}>
          {t("settings:dialog.theme.title")}
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
            {t("settings:dialog.theme.light")}
          </ToggleButton>

          <ToggleButton value="dark">
            <DarkModeIcon sx={{ mr: 1 }} />
            {t("settings:dialog.theme.dark")}
          </ToggleButton>
        </ToggleButtonGroup>

        <Typography variant="h6" mb={2}>
          {t("settings:dialog.language.title")}
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
            <span>{t("settings:dialog.language.french")}</span>
          </ToggleButton>

          <ToggleButton
            value={LANGUAGES.en.code}
            sx={{ alignItems: "center", gap: 1, lineHeight: "16px" }}
          >
            <img src="https://countryflagsapi.com/svg/gb" alt="British flag" width={24} />
            <span>{t("settings:dialog.language.english")}</span>
          </ToggleButton>
        </ToggleButtonGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseSettings} variant="contained">
          <span>{t("settings:dialog.close")}</span>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
