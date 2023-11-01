import Contact from "@/components/Contact"
import Education from "@/components/Education"
import Experiences from "@/components/Experiences"
import Header from "@/components/Header"
import Introduction from "@/components/Introduction"
import Skills from "@/components/Skills"
import ReactFullpage from "@fullpage/react-fullpage"
import { Container } from "@mui/material"
import { useState } from "react"

const Home = () => {
  const pages = [
    { link: "#introduction", title: "Who am I?" },
    { link: "#skills", title: "Skills" },
    { link: "#education", title: "Education" },
    { link: "#experiences", title: "Experiences" },
    { link: "#contact", title: "Contact" },
  ]

  const [callback, setCallback] = useState({
    moveTo: (link: string, index: number) => {},
  })

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
          anchors={pages.map((page) => page.link)}
          scrollingSpeed={1000} /* Options here */
          render={({ fullpageApi }) => {
            setCallback(fullpageApi)
            return (
              <ReactFullpage.Wrapper>
                <Introduction />
                <Skills />
                <Education />
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
