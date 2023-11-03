import { Fade, Grid, IconButton, Typography } from "@mui/material"
import Section, { ICommonSection } from "./Section"
import Title from "./Title"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import Lottie from "lottie-react"
import Email from "@/assets/Email.json"

const Contact = ({ isCurrent, timeout }: ICommonSection): JSX.Element => {
  return (
    <Section>
      <Fade in={isCurrent} timeout={timeout}>
        <Grid
          container
          spacing={5}
          direction={{ md: "row", xs: "column-reverse" }}
        >
          <Grid item md={6} xs={12}>
            <Lottie animationData={Email} />
          </Grid>
          <Grid item md={6} xs={12} pt={5}>
            <Title>Contact Me</Title>
            <Typography
              variant="h4"
              paragraph
              style={{ fontWeight: "lighter" }}
            >
              I am available on almost every social media. You can message me, I
              will reply within 24 hours. I can help you with React, .Net Core,
              Cloud and Opensource Development.
            </Typography>
            <IconButton
              color="primary"
              href="https://github.com/ken999999999999999"
            >
              <GitHubIcon style={{ fontSize: "50px" }} />
            </IconButton>
            <IconButton
              color="primary"
              href="https://www.linkedin.com/in/wingchunlai"
              size="large"
            >
              <LinkedInIcon style={{ fontSize: "50px" }} />
            </IconButton>
            <IconButton
              color="primary"
              size="large"
              href="mailto:kenlai201@hotmail.com"
            >
              <EmailIcon style={{ fontSize: "50px" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Fade>
    </Section>
  )
}
export default Contact
