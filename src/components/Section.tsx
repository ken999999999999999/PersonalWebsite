import { ReactNode } from "react"

export interface ICommonSection {
  isCurrent: boolean
  timeout: number
}
interface ISection {
  children: ReactNode
}

const Section = ({ children }: ISection): JSX.Element => {
  return <div className="section">{children}</div>
}

export default Section
