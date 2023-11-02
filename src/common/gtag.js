export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const pageView = (url, title) => {
  window?.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title,
  })
}
