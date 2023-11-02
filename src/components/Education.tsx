import {
  Card,
  CardHeader,
  Grow,
  Divider,
  Fade,
  Grid,
  Typography,
  CardContent,
} from "@mui/material"
import Section, { ICommonSection } from "./Section"
import Title from "./Title"
import Lottie from "lottie-react"
import EducationImg from "@/assets/Education.json"
import PolyLogo from "@/assets/PolyU.png"
import Image from "next/image"
import AWS from "@/assets/AWS.png"

const Education = ({ isCurrent, timeout }: ICommonSection): JSX.Element => {
  return (
    <Section>
      <Fade in={isCurrent} timeout={timeout}>
        <Grid container spacing={5}>
          <Grid item sm={6} xs={12}>
            <Title>Education & Certifications</Title>
            <Grow
              in={isCurrent}
              timeout={timeout}
              style={{ transitionDelay: "100ms" }}
            >
              <Card>
                <CardHeader
                  avatar={
                    <Image width={50} height={50} src={PolyLogo} alt="PolyU" />
                  }
                  action={
                    <Typography mr={1} variant="subtitle1">
                      2016 - 2020
                    </Typography>
                  }
                  title={
                    <Typography variant="subtitle1" fontWeight="bold">
                      BSC (hons) in Computing
                    </Typography>
                  }
                  subheader="The Hong Kong Polytechnic University"
                />
              </Card>
            </Grow>

            <Divider style={{ margin: "20px 0px" }} />
            <Grow
              in={isCurrent}
              timeout={timeout}
              style={{ transitionDelay: "100ms" }}
            >
              <Card>
                <CardHeader
                  avatar={<Image width={50} height={50} src={AWS} alt="AWS" />}
                  action={
                    <Typography mr={1} variant="subtitle1">
                      Valid Until Dec 2025
                    </Typography>
                  }
                  title={
                    <Typography variant="subtitle1" fontWeight="bold">
                      AWS Certified Solutions Architect - Associate
                    </Typography>
                  }
                  subheader="Amazon Web Services (AWS)"
                />
              </Card>
            </Grow>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Lottie animationData={EducationImg} />
          </Grid>
        </Grid>
      </Fade>
    </Section>
  )
}

export default Education
