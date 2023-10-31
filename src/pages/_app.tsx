import ThemeProvider from "@/styles/ThemeProvider"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { CssBaseline } from "@mui/material"

const pages = [
  { link: "#introduction", title: "Who am I?" },
  { link: "#skills", title: "Skills" },
]

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
