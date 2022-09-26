import { createTheme, tabClasses } from "@mui/material";
import { ThemeCustomColors, ThemeCustomFonts } from "./theme-colors-types";

const customColors: ThemeCustomColors = {
  highEmphasis: "#25282B",
  mediumEmphasis: "#828282",
  lowEmphasis: "#9A9FA8",
  primary: "#FDC435",
  background: "#F9FAFF",
  white: "#FFFFFF",
} as const;

const customFonts: ThemeCustomFonts = {
  comfortaa: "Comfortaa",
  nunito: "Nunito",
  playFair: "Playfair Display",
  roboto: "Roboto",
} as const;

/**
 * Creating a classic theme first, so that we can access such values as breakpoints
 */
const baseTheme = createTheme();

export const theme = createTheme(baseTheme, {
  palette: {
    background: {
      default: customColors.background,
      paper: customColors.white,
    },

    custom: customColors,

    primary: {
      main: customColors.primary,
    },
  },
  typography: {
    custom: customFonts,

    fontFamily: customFonts.roboto,

    button: {
      textTransform: "none",
    },

    h1: {
      color: customColors.highEmphasis,
      fontFamily: customFonts.playFair,
      fontWeight: 700,
      fontSize: 34,

      [baseTheme.breakpoints.up("sm")]: {
        fontSize: 44,
        lineHeight: "120%",
      },

      [baseTheme.breakpoints.up("md")]: {
        fontSize: 64,
        lineHeight: "120%",
      },
    },

    h2: {
      color: customColors.primary,
      fontFamily: customFonts.playFair,
      fontSize: 48,
      lineHeight: "120%",
      fontWeight: 700,
    },

    body1: {
      color: customColors.mediumEmphasis,
      fontFamily: customFonts.nunito,
      fontSize: 18,

      [baseTheme.breakpoints.up("sm")]: {
        fontSize: 21,
        lineHeight: "150%",
      },

      [baseTheme.breakpoints.up("md")]: {
        fontSize: 24,
        lineHeight: "150%",
      },
    },

    body2: {
      color: customColors.mediumEmphasis,
      fontFamily: customFonts.nunito,
      fontSize: 18,
      lineHeight: "150%",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: customColors.background,
          position: "relative",
          margin: "0 auto",
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          paddingBottom: 0,
          paddingTop: 0,

          [`&.${tabClasses.selected}`]: {
            color: customColors.highEmphasis,
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: customColors.highEmphasis,
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          // The default value in MUI. We must set it because it inherit from body1 typography variant
          lineHeight: 1.5,
        },
      },
    },
  },
});