export type SettingsThemeMode = "dark" | "light";

export type SettingsLanguageCode = "fr" | "en";

export type SettingsLanguageFlag = "fr" | "gb";

export type SettingsLanguage = {
  code: SettingsLanguageCode;
  flag: SettingsLanguageFlag;
};

export type Settings = {
  isOpen: boolean;
  themeMode: SettingsThemeMode | null;
  language: SettingsLanguage | null;
};
