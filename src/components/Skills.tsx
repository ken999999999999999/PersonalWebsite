import { Grid } from "@mui/material"
import Section from "./Section"
import Lottie from "lottie-react"
import Coding from "@/assets/Coding.json"

interface ISkills {}

const Skills = ({}: ISkills): JSX.Element => {
  return (
    <Section>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <Lottie animationData={Coding} />
        </Grid>
        <Grid item sm={6} xs={12} pt={5}></Grid>
      </Grid>
    </Section>
  )
}

export default Skills
