import { createTheme } from "@mui/material/styles";
// import red from "@mui/material/colors/red";
import grey from "@mui/material/colors/grey";

let theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      contrastText: "#fff",
    },
    secondary: {
      main: grey[50],
      contrastText: grey[900],
    },
    ["software-engineer"]: {
      main: "hsl(60deg, 100%, 50%)",
      contrastText: grey[900],
    },
    ["web-developer"]: {
      main: "hsl(207deg 90% 54%)",
      contrastText: grey[50],
    },
    javascript: {
      main: "hsl(300deg 100% 50%)",
      contrastText: grey[50],
    },
    devops: {
      main: "hsl(266deg 73% 66%)",
      contrastText: grey[50],
    },
  },
  typography: {
    // Tell MUI what's the font-size on the html element is.
    // htmlFontSize: 10,
    // h1: {
    //   fontSize: "5rem",
    // },
  },
  // spacing: {},
  // breakpoints: {},
  // zIndex: {},
  // transitions: {},
  // components: {},
});

export default theme;