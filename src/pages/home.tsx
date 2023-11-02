import Contact from "@/components/Contact"
import Education from "@/components/Education"
import Experiences from "@/components/Experiences"
import Header from "@/components/Header"
import Introduction from "@/components/Introduction"
import Skills from "@/components/Skills"
import ReactFullpage from "@fullpage/react-fullpage"
import { Container } from "@mui/material"
import { useEffect, useState } from "react"

const transformTimeout = 2000

const Home = () => {
  const pages = [
    { link: "#introduction", title: "Who am I?" },
    { link: "#skills", title: "Skills" },
    { link: "#education", title: "Education & Certifications" },
    { link: "#experiences", title: "Experiences" },
    { link: "#contact", title: "Contact" },
  ]

  const [callback, setCallback] = useState({
    moveTo: (link: string, index: number) => {},
    isUpdated: false,
  })

  const [currentAnchor, setCurrentAnchor] = useState<string>("#introduction")

  return (
    <>
      <Header
        onPageClick={(link, index) => callback?.moveTo(link, index)}
        pages={pages}
      />
      <Container maxWidth="xl">
        <ReactFullpage
          credits={{}}
          navigation
          menu="#header"
          anchors={pages.map((page) => page.link)}
          onLeave={(_, destination, _direction, _trigger) =>
            setCurrentAnchor(destination?.anchor + "")
          }
          scrollingSpeed={1000} /* Options here */
          render={({ fullpageApi }) => {
            !callback.isUpdated &&
              setCallback({ ...fullpageApi, isUpdated: true })
            return (
              <ReactFullpage.Wrapper>
                <Introduction
                  isCurrent={currentAnchor === "#introduction"}
                  timeout={transformTimeout}
                />
                <Skills
                  isCurrent={currentAnchor === "#skills"}
                  timeout={transformTimeout}
                />
                <Education
                  isCurrent={currentAnchor === "#education"}
                  timeout={transformTimeout}
                />
                <Experiences />
                <Contact />
              </ReactFullpage.Wrapper>
            )
          }}
        />
      </Container>
    </>
  )
}

export default Home
