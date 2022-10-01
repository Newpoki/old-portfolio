import { createTheme, darken, tabClasses, TabsProps, typographyClasses } from "@mui/material";
import { ThemeCustomColors, ThemeCustomFonts } from "./theme-colors-types";

const customColors: ThemeCustomColors = {
  highEmphasis: "#ffffff",
  mediumEmphasis: "#828282",
  lowEmphasis: "#4b4c53",
  primary: "#FDC435",
  background: "#25282B",
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
const baseTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: customColors.background,
      paper: "#2e3039",
    },

    custom: customColors,

    primary: {
      main: customColors.primary,
    },

    secondary: {
      main: customColors.white,
    },
  },
});

export const darkTheme = createTheme(baseTheme, {
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
      lineHeight: "120%",

      [baseTheme.breakpoints.up("sm")]: {
        fontSize: 44,
      },

      [baseTheme.breakpoints.up("md")]: {
        fontSize: 75,
      },

      [baseTheme.breakpoints.up("lg")]: {
        fontSize: 95,
      },

      [baseTheme.breakpoints.up("xl")]: {
        fontSize: 120,
      },
    },

    h2: {
      color: customColors.primary,
      fontFamily: customFonts.playFair,
      fontSize: 48,
      lineHeight: "120%",
      fontWeight: 700,
    },

    h3: {
      color: customColors.highEmphasis,
      fontFamily: customFonts.playFair,
      fontSize: 28,
      lineHeight: "150%",
      fontWeight: 700,

      [baseTheme.breakpoints.up("sm")]: {
        fontSize: 38,
      },

      [baseTheme.breakpoints.up("md")]: {
        fontSize: 48,
      },

      [baseTheme.breakpoints.up("lg")]: {
        fontSize: 58,
      },
    },

    h4: {
      color: customColors.highEmphasis,
      fontFamily: customFonts.playFair,
      fontSize: 20,
      lineHeight: "150%",
      fontWeight: 700,

      [baseTheme.breakpoints.up("sm")]: {
        fontSize: 25,
      },

      [baseTheme.breakpoints.up("md")]: {
        fontSize: 35,
      },

      [baseTheme.breakpoints.up("lg")]: {
        fontSize: 35,
      },
    },

    body1: {
      color: customColors.mediumEmphasis,
      fontFamily: customFonts.nunito,
      fontSize: 18,
      lineHeight: "150%",

      [baseTheme.breakpoints.up("sm")]: {
        fontSize: 21,
      },

      [baseTheme.breakpoints.up("md")]: {
        fontSize: 24,
      },

      [baseTheme.breakpoints.up("xl")]: {
        fontSize: 34,
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
      styleOverrides: {
        containedPrimary: {
          "&:hover": {
            backgroundColor: darken(baseTheme.palette.primary.main, 0.1),
          },
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: `${baseTheme.transitions.duration.short}ms background-color`,
          backgroundColor: customColors.background,
          position: "relative",
          margin: "0 auto",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: baseTheme.palette.custom.background,
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          [`&.${typographyClasses.root}`]: {
            color: baseTheme.palette.primary.main,
            fontWeight: 600,
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          paddingBottom: 0,
          paddingTop: 0,

          [`&.${tabClasses.selected}`]: {
            color: customColors.mediumEmphasis,
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        indicator: ({ ownerState }: { ownerState: TabsProps }) => ({
          backgroundColor:
            ownerState.indicatorColor === "primary"
              ? customColors.primary
              : customColors.mediumEmphasis,
        }),
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
