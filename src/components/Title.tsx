import { Typography, TypographyProps } from "@mui/material"
import { ReactNode } from "react"

const Title = ({ children, ...rest }: TypographyProps) => (
  <Typography
    variant="h2"
    mb={5}
    gutterBottom
    color="primary.main"
    fontWeight="bold"
    {...rest}
  >
    {children}
  </Typography>
)

export default Title
