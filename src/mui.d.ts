import { ThemeCustomColors } from "./theme/theme-colors-types";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    custom: ThemeCustomColors;
  }

  interface Palette {
    custom: ThemeCustomColors;
  }

  interface TypographyVariantsOptions {
    custom: ThemeCustomFonts;
  }

  interface TypographyVariants {
    custom: ThemeCustomFonts;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    custom: ThemeCustomFonts;
  }
}
