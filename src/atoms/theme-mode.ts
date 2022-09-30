import { atom } from "jotai";

type ThemeMode = "dark" | "light";

export const themeModeAtom = atom<ThemeMode | null>(null);
