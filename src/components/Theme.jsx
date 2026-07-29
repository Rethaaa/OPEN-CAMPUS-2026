import { createTheme } from "@mui/material/styles";
import '/src/index.css'
import Konthen from '/public/fonts/Konthen.otf';
import Mouldy_Cheese from '/public/fonts/Mouldy Cheese.ttf';
import BG from '/public/assets/bg.PNG';

const theme = createTheme({
  typography: {
    fontFamily: 'Mouldy Cheese, Konthen, sans-serif',
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Konthen';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Konthen'), local('Konthen-Regular'), url(${Konthen}) format('opentype');
          // unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        @font-face {
          font-family: 'Mouldy Cheese';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Mouldy Cheese'), local('Mouldy Cheese-Regular'), url(${Mouldy_Cheese}) format('truetype');
          // unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        body {
          background-image: linear-gradient( #ffffff77, #ffffff77), url(${BG});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          // background-attachment: fixed;
        }
      `,
    },
  },
  palette: {
    primary: {
      main: "#618b25",
    },
    secondary: {
      main: "#ee670d",
    },
    tertiary: {
      main: "#d10d0d",
    },
    quaternary: {
      main: "#612d16",
    },
    side: {
      main: "#ffe7c4",
      dark: "#adedff",
      light: "#d6f6ff",
      white: "#f5f5f5",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

export default theme;