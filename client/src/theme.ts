import { createTheme } from "@mui/material/styles";

export const tokens = {
  onPrimary: "#FFFFFF",
  primaryContainer: "#EADDFF",
  onPrimaryContainer: "#21005D",
  primaryFixed: "#EADDFF",
  onPrimaryFixed: "#21005D",
  primaryFixedDim: "#D0BCFF",
  onPrimaryFixedVariant: "#4F378B",
  onSecondary: "#FFFFFF",
  secondaryContainer: "#E8DEF8",
  onSecondaryContainer: "#1D192B",
  secondaryFixed: "#E8DEF8",
  onSecondaryFixed: "#1D192B",
  secondaryFixedDim: "#CCC2DC",
  onSecondaryFixedVariant: "#4A4458",
  onTertiary: "#FFFFFF",
  tertiaryContainer: "#FFD8E4",
  onTertiaryContainer: "#31111D",
  tertiaryFixed: "#FFD8E4",
  onTertiaryFixed: "#31111D",
  tertiaryFixedDim: "#EFB8C8",
  onTertiaryFixedVariant: "#633B48",
  error: "#B3261E",
  onError: "#FFFFFF",
  errorContainer: "#F9DEDC",
  onErrorContainer: "#410E0B",
  outline: "#79747E",
  background: "#FEF7FF",
  onBackground: "#1D1B20",
  surface: "#FEF7FF",
  onSurface: "#1D1B20",
  surfaceVariant: "#E7E0EC",
  onSurfaceVariant: "#49454F",
  inverseSurface: "#322F35",
  inverseOnSurface: "#F5EFF7",
  inversePrimary: "#D0BCFF",
  shadow: "#000000",
  surfaceTint: "#6750A4",
  outlineVariant: "#CAC4D0",
  scrim: "#000000",
  surfaceContainerHighest: "#E6E0E9",
  surfaceContainerHigh: "#ECE6F0",
  surfaceContainer: "#F3EDF7",
  surfaceContainerLow: "#F7F2FA",
  surfaceContainerLowest: "#FFFFFF",
  surfaceBright: "#FEF7FF",
  surfaceDim: "#DED8E1",
  grey: {
    10: "#e6e6e6",
    20: "#cccccc",
    30: "#b3b3b3",
    40: "#999999",
    50: "#808080",
    60: "#666666",
    70: "#4d4d4d",
    80: "#333333",
    90: "#1a1a1a",
  },
  primary: {
    0: "#000000",
    10: "#21005D",
    20: "#381E72",
    30: "#4F378B",
    40: "#6750A4",
    50: "#7F67BE",
    60: "#9A82DB",
    70: "#B69DF8",
    80: "#D0BCFF",
    90: "#EADDFF",
    95: "#F6EDFF",
    99: "#FFFBFE",
    100: "#FFFFFF",
  },
  secondary: {
    0: "#000000",
    10: "#1D192B",
    20: "#332D41",
    30: "#4A4458",
    40: "#625B71",
    50: "#7A7289",
    60: "#958DA5",
    70: "#B0A7C0",
    80: "#CCC2DC",
    90: "#E8DEF8",
    95: "#F6EDFF",
    99: "#FFFBFE",
    100: "#FFFFFF",
  },
  tertiary: {
    0: "#000000",
    10: "#31111D",
    20: "#492532",
    30: "#633B48",
    40: "#7D5260",
    50: "#986977",
    60: "#B58392",
    70: "#D29DAC",
    80: "#EFB8C8",
    90: "#FFD8E4",
    95: "#FFECF1",
    99: "#FFFBFA",
    100: "#FFFFFF",
  },
  neutral: {
    0: "#000000",
    4: "#0F0D13",
    6: "#141218",
    10: "#1D1B20",
    12: "#211F26",
    17: "#2B2930",
    20: "#322F35",
    22: "#36343B",
    24: "#3B383E",
    30: "#48464C",
    40: "#605D64",
    50: "#79767D",
    60: "#938F96",
    70: "#AEA9B1",
    80: "#CAC5CD",
    87: "#DED8E1",
    90: "#E6E0E9",
    92: "#ECE6F0",
    94: "#F3EDF7",
    95: "#F5EFF7",
    96: "#F7F2FA",
    98: "#FEF7FF",
    99: "#FFFBFF",
    100: "#FFFFFF",
  },
  neutralVariant: {
    0: "#000000",
    10: "#1D1A22",
    20: "#322F37",
    30: "#49454F",
    40: "#605D66",
    50: "#79747E",
    60: "#938F99",
    70: "#AEA9B4",
    80: "#CAC4D0",
    90: "#E7E0EC",
    95: "#F5EEFA",
    99: "#FFFBFE",
    100: "#FFFFFF",
  },
};
// mui theme settings
export const theme = createTheme({
  palette: {
    primary: {
      main: "#6750A4",
    },
    secondary: {
      main: "#625B71",
    },
    tertiary: {
      main: "#7D5260",
      light: "",
      dark: "",
      contrastText: "",
    },
    neutral: {
      main: "938F96",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Fauna one", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  },
});