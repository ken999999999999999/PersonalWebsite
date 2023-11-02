import ThemeProvider from "@/styles/ThemeProvider"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { CssBaseline } from "@mui/material"
import Script from "next/script"
import { GA_MEASUREMENT_ID } from "@/common/gtag"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <ThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
