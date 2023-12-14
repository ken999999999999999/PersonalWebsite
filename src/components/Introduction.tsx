import { Fade, Grid, IconButton, Typography } from "@mui/material"
import Lottie from "lottie-react"
import Wavehand from "@/assets/Wavehand.json"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import Title from "./Title"
import Section, { ICommonSection } from "./Section"

const Introduction = ({ isCurrent, timeout }: ICommonSection): JSX.Element => {
  return (
    <Section>
      <Fade in={isCurrent} timeout={timeout}>
        <Grid container columnSpacing={5}>
          <Grid item md={6} xs={12} pt={5}>
            <Title>Hi all, I&apos;m Ken</Title>
            <Typography
              variant="h4"
              paragraph
              style={{ fontWeight: "lighter" }}
            >
              Software Engineer with over 3 years of experience working across
              the full-stack of software development. I possess a strong
              understanding of both front-end (React.js, TypeScript, JavaScript)
              and back-end (C#, Python, .Net Core, FastAPI) technologies, as
              well as their capabilities and limitations in addressing specific
              business needs.
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
          <Grid item md={6} xs={12}>
            <Lottie animationData={Wavehand} />
          </Grid>
        </Grid>
      </Fade>
    </Section>
  )
}

export default Introduction
