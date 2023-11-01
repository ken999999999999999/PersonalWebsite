import { createTheme } from "@mui/material/styles"

export default createTheme({
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
