import { atom } from "jotai";
import { Settings } from "./settings-types";

const initialValue = {
  isOpen: false,
  themeMode: null,
  language: null,
};

export const settingsAtom = atom<Settings>(initialValue);
