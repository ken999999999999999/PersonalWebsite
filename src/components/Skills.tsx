import {
  Fade,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slide,
  Typography,
} from "@mui/material"

import Lottie from "lottie-react"
import Coding from "@/assets/Coding.json"
import Star from "@/assets/Star.json"
import Image from "next/image"
import Title from "./Title"
import Section, { ICommonSection } from "./Section"

const imgProp = { width: 50, height: 50, style: { marginRight: 5 } }

const skillIcons = [
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
    alt: "JavaScript",
  },
  {
    href: "https://www.python.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
    alt: "Python",
  },
  {
    href: "https://www.typescriptlang.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
    alt: "TypeScript",
  },
  {
    href: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg",
    alt: "C#",
  },
  {
    href: "https://git-scm.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
    alt: "Git",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
    alt: "HTML5",
  },
  {
    href: "https://reactjs.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
    alt: "React",
  },
  {
    href: "https://nextjs.org/docs",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg",
    alt: "NextJs",
  },
  {
    href: "https://www.gatsbyjs.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gatsby-colored.svg",
    alt: "Gatsby",
  },
  {
    href: "https://jquery.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg",
    alt: "JQuery",
  },
  {
    href: "https://www.w3.org/TR/CSS/#css",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
    alt: "CSS3",
  },
  {
    href: "https://getbootstrap.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg",
    alt: "Bootstrap",
  },
  {
    href: "https://mui.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg",
    alt: "Material UI",
  },
  {
    href: "https://nodejs.org/en/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
    alt: "NodeJS",
  },
  {
    href: "https://docs.nestjs.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg",
    alt: "NestJS",
  },
  {
    href: "https://www.mongodb.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
    alt: "MongoDB",
  },
  {
    href: "https://www.mysql.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg",
    alt: "MySQL",
  },
  {
    href: "https://dotnet.microsoft.com/en-us/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dot-net-colored.svg",
    alt: ".NET",
  },
]

const skillSummaries = [
  "Building responsive website front end using React, NextJS and MUI",
  "Creating application backend in C#, .Net Core, Python and NodeJS",
  "Experience working on multiple cloud platforms (Azure, GCP and AWS)",
]

const Skills = ({ isCurrent, timeout }: ICommonSection): JSX.Element => {
  return (
    <Section>
      <Fade in={isCurrent} timeout={timeout}>
        <Grid
          container
          columnSpacing={5}
          direction={{ md: "row", xs: "column-reverse" }}
        >
          <Slide direction="right" in={isCurrent} timeout={timeout}>
            <Grid item md={6} xs={12}>
              <Lottie animationData={Coding} />
            </Grid>
          </Slide>
          <Grid item md={6} xs={12} pt={5}>
            <Title>My Skills</Title>
            {skillIcons.map((skillIcon) => (
              <a
                href={skillIcon.href}
                target="_blank"
                rel="noreferrer"
                key={skillIcon.alt}
              >
                <Image src={skillIcon.src} {...imgProp} alt={skillIcon.alt} />
              </a>
            ))}
            <List>
              {skillSummaries.map((skillSummary, index) => (
                <Slide
                  direction={"left"}
                  key={skillSummary}
                  in={isCurrent}
                  timeout={timeout}
                  style={{ transitionDelay: index * 0.5 + "s" }}
                >
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <Lottie
                        animationData={Star}
                        style={{ width: "70px", height: "70px" }}
                      />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body1"> {skillSummary}</Typography>
                    </ListItemText>
                  </ListItem>
                </Slide>
              ))}
            </List>
          </Grid>
        </Grid>
      </Fade>
    </Section>
  )
}

export default Skills
