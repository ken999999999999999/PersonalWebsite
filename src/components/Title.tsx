import { Typography } from "@mui/material"
import { ReactNode } from "react"

interface ITitle {
  children: ReactNode
}

const Title = ({ children }: ITitle) => (
  <Typography
    variant="h2"
    mb={5}
    gutterBottom
    color="primary.main"
    fontWeight="bold"
  >
    {children}
  </Typography>
)

export default Title
