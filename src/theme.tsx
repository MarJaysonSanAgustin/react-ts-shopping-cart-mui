import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#41C55E",
    },
    secondary: {
      main: "#F2F2F2",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
