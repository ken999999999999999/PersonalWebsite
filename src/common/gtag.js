export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const pageView = (url, title) => {
  window?.gtag("event", "page_view", {
    page_location: url,
    page_title: title,
    user_agent: window?.navigator?.userAgent ?? "",
  })
}
