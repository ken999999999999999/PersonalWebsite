export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const pageView = (title) => {
  window?.gtag("event", "page_view", {
    page_title: title,
  })
}

export const viewProject = (type, title) => {
  window?.gtag("event", "select_content", {
    content_type: type,
    content_id: title,
  })
}
