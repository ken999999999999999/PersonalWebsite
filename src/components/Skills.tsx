import { Grid, Typography } from "@mui/material"
import Section from "./Section"
import Lottie from "lottie-react"
import Coding from "@/assets/Coding.json"
import Image from "next/image"

interface ISkills {}

const imgSize = { width: 80, height: 80 }

const Skills = ({}: ISkills): JSX.Element => {
  return (
    <Section>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <Lottie animationData={Coding} />
        </Grid>
        <Grid item sm={6} xs={12} pt={5}>
          <Typography variant="h2" mb={5} gutterBottom>
            My Skills
          </Typography>
          <p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                {...imgSize}
                alt="JavaScript"
              />
            </a>
            <a href="https://www.python.org/" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
                {...imgSize}
                alt="Python"
              />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                {...imgSize}
                alt="TypeScript"
              />
            </a>
            <a
              href="https://docs.microsoft.com/en-us/dotnet/csharp/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg"
                {...imgSize}
                alt="C#"
              />
            </a>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg"
                {...imgSize}
                alt="Git"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                {...imgSize}
                alt="HTML5"
              />
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                {...imgSize}
                alt="React"
              />
            </a>
            <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
                {...imgSize}
                alt="NextJs"
              />
            </a>
            <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
                {...imgSize}
                alt="Vue"
              />
            </a>
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gatsby-colored.svg"
                {...imgSize}
                alt="Gatsby"
              />
            </a>
            <a href="https://jquery.com/" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg"
                {...imgSize}
                alt="JQuery"
              />
            </a>
            <a
              href="https://www.w3.org/TR/CSS/#css"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                {...imgSize}
                alt="CSS3"
              />
            </a>
            <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
                {...imgSize}
                alt="Sass"
              />
            </a>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                {...imgSize}
                alt="Bootstrap"
              />
            </a>
            <a href="https://mui.com/" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg"
                {...imgSize}
                alt="Material UI"
              />
            </a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
                {...imgSize}
                alt="NodeJS"
              />
            </a>
            <a href="https://docs.nestjs.com/" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg"
                {...imgSize}
                alt="NestJS"
              />
            </a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
                {...imgSize}
                alt="MongoDB"
              />
            </a>
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
                {...imgSize}
                alt="MySQL"
              />
            </a>
            <a
              href="https://dotnet.microsoft.com/en-us/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dot-net-colored.svg"
                {...imgSize}
                alt=".NET"
              />
            </a>
          </p>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Skills
