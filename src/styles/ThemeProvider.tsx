import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles"
import { ReactNode } from "react"
import theme from "./theme"

const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <MUIThemeProvider theme={theme}>{children} </MUIThemeProvider>
)

export default ThemeProvider
