import Contact from "@/components/Contact"
import Education from "@/components/Education"
import Experiences from "@/components/Experiences"
import Header from "@/components/Header"
import Introduction from "@/components/Introduction"
import Skills from "@/components/Skills"
import ReactFullpage from "@fullpage/react-fullpage"
import { Container } from "@mui/material"
import { useCallback, useState } from "react"
import { pageView } from "@/common/gtag"
import Head from "@/components/Head"

interface IPage {
  link: string
  title: string
}

const transformTimeout = 2000

const pages: IPage[] = [
  { link: "#introduction", title: "Who am I?" },
  { link: "#skills", title: "Skills" },
  { link: "#education", title: "Education & Certifications" },
  { link: "#experiences", title: "Experiences" },
  { link: "#contact", title: "Contact" },
]

const Home = () => {
  const [callback, setCallback] = useState({
    moveTo: (link: string, index: number) => {},
    isUpdated: false,
  })

  const [currentSection, setCurrentSection] = useState<IPage>({
    link: "#introduction",
    title: "Who am I?",
  })

  const afterFirstLoad = useCallback(
    (anchor: string, index: number) => {
      if (anchor !== currentSection.link)
        setCurrentSection({
          link: anchor + "",
          title: pages[index].title,
        })
    },
    [currentSection]
  )

  return (
    <>
      <Head title={currentSection.title} />
      <Header
        onPageClick={(link, index) => {
          callback?.moveTo(link, index)
        }}
        pages={pages}
      />
      <Container maxWidth="lg">
        <ReactFullpage
          credits={{}}
          navigation
          anchors={pages.map((page) => page.link)}
          onLeave={(_, destination, _direction, _trigger) => {
            setCurrentSection({
              link: destination?.anchor + "",
              title: pages[destination?.index].title,
            })
            pageView(window.location.href, pages[destination?.index].title)
          }}
          afterLoad={(_, destination) =>
            afterFirstLoad(destination.anchor + "", destination.index)
          }
          render={({ fullpageApi }) => {
            !callback.isUpdated &&
              setCallback({ ...fullpageApi, isUpdated: true })
            return (
              <ReactFullpage.Wrapper>
                <Introduction
                  isCurrent={currentSection.link === "#introduction"}
                  timeout={transformTimeout}
                />
                <Skills
                  isCurrent={currentSection.link === "#skills"}
                  timeout={transformTimeout}
                />
                <Education
                  isCurrent={currentSection.link === "#education"}
                  timeout={transformTimeout}
                />
                <Experiences
                  isCurrent={currentSection.link === "#experiences"}
                  timeout={transformTimeout}
                />
                <Contact
                  isCurrent={currentSection.link === "#contact"}
                  timeout={transformTimeout}
                />
              </ReactFullpage.Wrapper>
            )
          }}
        />
      </Container>
    </>
  )
}

export default Home
