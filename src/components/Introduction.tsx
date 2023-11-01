import { Fade, Grid, IconButton, Typography } from "@mui/material"
import Section from "./Section"
import Lottie from "lottie-react"
import Wavehand from "@/assets/Wavehand.json"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"

interface IIntroduction {}

const Introduction = ({}: IIntroduction): JSX.Element => {
  return (
    <Section>
      <Fade in timeout={1000}>
        <Grid container>
          <Grid item sm={6} xs={12} pt={5}>
            <Typography
              variant="h2"
              mb={5}
              gutterBottom
              color="primary.main"
              fontWeight="bold"
            >
              Hi all, I am Ken
            </Typography>
            <Typography
              variant="h4"
              paragraph
              style={{ fontWeight: "lighter" }}
            >
              With over 3 years of hands-on experience in ERP system
              development, I possess a strong understanding of both frontend and
              backend technologies, as well as their capabilities and
              limitations in addressing specific business needs.
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
          <Grid item sm={6} xs={12}>
            <Lottie animationData={Wavehand} />
          </Grid>
        </Grid>
      </Fade>
    </Section>
  )
}

export default Introduction
