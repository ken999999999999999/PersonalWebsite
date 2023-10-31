import Slide from "@mui/material/Slide"
import { ReactNode } from "react"
interface ISection {
  children: ReactNode
  isLastSection?: boolean
}

const Section = ({
  children,
  isLastSection = false,
}: ISection): JSX.Element => {
  return <div className="section">{children}</div>
}

export default Section
