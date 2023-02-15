import { createTheme } from "@mui/material/styles";
import { darkScrollbar } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#e5f2e3",
      cardColor: "wheat",
      shadowColor: "#f3beb3",
      inverse: "#1AAA8D",
      inputBackground: "#f1faf7",
      border: "#c0ceca",
      backgroundLightGreen: "#f1faf7",
      textBlack: "#0a0b0b",
      textBrow: "#371717",
      disabled: "#D1D1D1",
    },
    secondary: {
      main: "#30b78d",
    },
    commonColors: {
      grey: "#949494",
    },
  },
  fontFamily: ["Mulish"].join(","),
  typography: {
    fontFamily: "Mulish",
    body2: {
      fontFamily: "Mulish",
      fontSize: "14px",
    },
    subtitle1: {
      fontFamily: "Mulish",
      fontSize: "18px",
      fontWeight: 500,
    },
    h1: {
      fontFamily: "Mulish",
      fontSize: "48px",
      fontWeight: 800,
    },
    h2: {
      fontFamily: "Mulish",
      fontSize: "48px",
      fontWeight: 800,
    },

    h3: {
      fontFamily: "Mulish",
      fontSize: "24px",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Mulish",
    },
    caption: {
      fontFamily: "Mulish",
      fontSize: "14px",
      fontWeight: 700,
    },
  },
  button: {
    fontFamily: "Mulish",
    fontSize: "16px",
    fontWeight: 400,
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 480,
      sm: 768,
      md: 920,
      lg: 1200,
      xl: 1800,
    },
  },
  overrides: {
    charts: {
      doughnut: {
        cell1: "#F4B15D",
        cell2: "#395CCA",
        cell3: "#52A2A5",
        cell4: "#B4BDC2",
        cell5: "#8BB439",
        cell6: "#CA39B3",
        cell7: "#dbc362",
        cell8: "#a5b14d",
        cell9: "#b6e566",
        cell10: "#8f25f0",
        cell11: "#b452b0",
        cell12: "#36f946",
        cell13: "#81de6f",
        cell14: "#2eb425",
        cell15: "#f80b15",
        cell16: "#94e924",
        cell17: "#791be7",
        cell18: "#cde6a0",
        cell19: "#d26948",
        cell20: "#1e6550",
        cell21: "#6ec351",
        cell22: "#3e827d",
        cell23: "#613dc0",
        cell24: "#ca1ad0",
      },
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          background: theme.palette.primary.main,
        },
      },
    },
    MuiToolbar: {
      regular: {
        backgroundColor: "#ffff00",
        color: "#000000",
        height: "32px",
        minHeight: "32px",
        "@media (min-width: 600px)": {
          minHeight: "48px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: theme.palette.secondary.main,
          border: 0,
          color: "white",
          padding: "0 30px",
          textTransform: "inherit",
          fontSize: theme.typography.button.fontSize,
          maxWidth: "280px",
          display: "flex",
          justifyContent: "center",
          borderRadius: "30px",
          fontWeight: theme.typography.button.fontWeight,
          fontFamily: theme.typography.button.fontFamily,
          "&:hover": {
            background: "#FFFFFF",
            backgroundColor: "FFFFFF",
            border: `1px solid ${theme.palette.secondary.main}`,
            color: theme.palette.secondary.main,
          },
          "&:active": {
            backgroundColor: "#08795A",
            color: "white",
          },
          "&:disabled": {
            color: "inherit",
            '&[type="submit"]': {
              background: theme.palette.primary.disabled,
              color: theme.palette.primary.inverse,
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          ...darkScrollbar(
            true
              ? {
                  track: theme.palette.primary.cardColor,
                  thumb: theme.palette.primary.main,
                  active: theme.palette.primary.main,
                }
              : undefined
          ),
          //scrollbarWidth for Firefox
          scrollbarWidth: "thin",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&$focused .MuiIconButton": {
            borderColor: theme.palette.primary.inverse,
            backgroundColor: "white",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: "Mulish",
          color: theme.palette.primary.inverse,
          caretColor: theme.palette.primary.inverse,
          maxHeight: 52,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: "none",
          borderRadius: 5,
          width: "100%",
          "& .MuiOutlinedInput-root": {
            background: theme.palette.primary.backgroundLightGreen,
            "&:hover fieldset": {
              borderColor: theme.palette.primary.main,
            },
          },
          "&:hover": {
            borderColor: "transparent",
          },

          "&:focus": {
            borderColor: theme.palette.primary.main,
          },
        },
      },
    },
    MuiPaginationItem: {
      root: {
        margin: "0 -1px",
        fontSize: "1.4rem",
        minWidth: "34px",
        borderRadius: 0,
        "@media (max-width: 767px)": {
          fontSize: "1rem",
        },
      },
      page: {
        "&:hover": {},
        "&$selected": {},
        "@media (max-width: 767px)": {
          height: "32px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#949494",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Mulish",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
