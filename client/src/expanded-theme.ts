import { PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface DefaultTheme {
    palette: PaletteOptions;
  }
}
declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    main: string;
  }

  interface Palette {
    neutral: Palette["primary"];
    tertiary: PaletteColor;
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
    tertiary: Palette["primary"];
  }
}
