import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  IconButton,
  Slide,
  Typography,
} from "@mui/material"
import Section, { ICommonSection } from "./Section"
import Title from "./Title"
import Image from "next/image"
import facebookCloneImg from "@/assets/facebook-clone.png"
import personalWebsiteImg from "@/assets/personal-website.png"
import GitHubIcon from "@mui/icons-material/GitHub"
import LanguageIcon from "@mui/icons-material/Language"
import kanbanBoardReactImg from "@/assets/Kanban-board-react.png"
import vueMapImg from "@/assets/vue-map.png"

const projects = [
  {
    title: "Facebook Clone",
    descriptions: "Connect with friends and the world around you on Facebook.",
    githubUrl: "https://github.com/ken999999999999999/facebook-clone",
    website: "https://facebook-clone-8a81c.web.app/",
    image: facebookCloneImg,
    tags: [
      "Nextjs",
      "Fastapi",
      "React",
      "Python",
      "Docker",
      "Typescript",
      "Mongodb",
      "Websocket",
      "Devcontainer",
      "Mui",
      "Firebase",
    ],
  },
  {
    title: "Personal Website",
    descriptions:
      "A personal resume website template built with React.js, Typescript, Next.js, and Mui",
    githubUrl: "https://github.com/ken999999999999999/PersonalWebsite",
    website: "https://www.ken-lai.fun/",
    image: personalWebsiteImg,
    tags: ["Nextjs", "React", "Typescript", "GA4", "MUI"],
  },
  {
    title: "ContractdocIO",
    descriptions:
      "Contract.IO provides a platform to help people create, customize and manage their contracts.",
    githubUrl: "https://github.com/ken999999999999999/ContractdocIO",
    website: "",
    image: facebookCloneImg,
    tags: [
      "React",
      "ASP.NET Core",
      "Clean-architecture",
      "Identity Server 4",
      "MUI",
    ],
  },
  {
    title: "Kanban-Board-ReactJS",
    descriptions: "A Kanban Board built with React.js, Typescript and MUI",
    githubUrl: "https://github.com/ken999999999999999/Kanban-Board-ReactJS",
    website: "https://ken999999999999999.github.io/Kanban-Board-ReactJS/",
    image: kanbanBoardReactImg,
    tags: ["React", "Typescript", "MUI"],
  },
  {
    title: "my-vue-map",
    descriptions: "A map built with Vue.js, Javascript and Naive-ui",
    githubUrl: "https://github.com/ken999999999999999/my-vue-map",
    website: "https://ken999999999999999.github.io/my-vue-map/",
    image: vueMapImg,
    tags: ["Vue", "Javascript", "Naive-ui"],
  },
]

const Projects = ({ isCurrent, timeout }: ICommonSection): JSX.Element => {
  return (
    <Section>
      <Title textAlign="center">Projects</Title>
      <Grid container spacing={2} style={{ marginBottom: "100px" }}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={project.title}>
            <Slide
              direction="right"
              in={isCurrent}
              timeout={timeout}
              style={{ transitionDelay: isCurrent ? index * 0.5 + "s" : "0s" }}
            >
              <Card>
                <CardMedia>
                  <Image
                    width={380}
                    height={220}
                    src={project.image}
                    alt={project.title}
                    layout="responsive"
                    loading="lazy"
                  />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.descriptions}
                  </Typography>
                  <Divider style={{ margin: "5px 0px" }} />
                  {project.tags.map((tag) => (
                    <Chip
                      size="small"
                      style={{ marginRight: "5px", marginBottom: "5px" }}
                      key={project.title + tag}
                      variant="outlined"
                      label={tag}
                    />
                  ))}
                </CardContent>
                <CardActions>
                  <IconButton href={project.githubUrl}>
                    <GitHubIcon />
                  </IconButton>
                  {project.website && (
                    <IconButton href={project.website}>
                      <LanguageIcon />
                    </IconButton>
                  )}
                </CardActions>
              </Card>
            </Slide>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}

export default Projects
