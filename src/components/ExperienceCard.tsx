import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Stack,
  Typography,
} from "@mui/material"
import { useState } from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

interface ICardCollapse {
  period: string
  company: string
  jobTitle: string
  descriptions: string[]
}

const ExperienceCard = ({
  period,
  jobTitle,
  company,
  descriptions,
}: ICardCollapse) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Card>
      <CardHeader
        action={
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography mr={1} variant="subtitle1">
              {period}
            </Typography>
            <IconButton
              onClick={() => setIsOpen((prev) => !prev)}
              style={{ transform: !isOpen ? "rotate(0deg)" : "rotate(180deg)" }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Stack>
        }
        title={
          <Typography variant="subtitle1" fontWeight="bold">
            {jobTitle}
          </Typography>
        }
        subheader={company}
      />
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <CardContent>
          {descriptions.map((description) => (
            <Typography key={description} variant="body2" mb="5px">
              {description}
            </Typography>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default ExperienceCard
