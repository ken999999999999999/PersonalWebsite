import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    background: {
      default: "#eff2f5",
    },
  },
  typography: {
    fontFamily: [
      "BlinkMacSystemFont",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Helvetic",
      "Arial",
      "sans-serif",
    ].join(","),
  },
})

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down("md")]: {
    fontSize: "5rem",
  },
}

theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
  },
}

theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}

theme.typography.h4 = {
  ...theme.typography.h4,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
}

export default theme
