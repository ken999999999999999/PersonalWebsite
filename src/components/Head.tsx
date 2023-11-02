import NextHead from "next/head"
import favicon from "@/assets/favicon.ico"

interface IHead {
  title: string
}

const Head = ({ title }: IHead) => {
  return (
    <NextHead>
      <title>{title}</title>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        sizes="16x16"
        href={favicon.src}
      />
    </NextHead>
  )
}

export default Head
