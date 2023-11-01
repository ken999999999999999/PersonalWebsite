import { ReactNode } from "react"
interface ISection {
  children: ReactNode
  isLastSection?: boolean
}

const Section = ({ children }: ISection): JSX.Element => {
  return <div className="section">{children}</div>
}

export default Section
