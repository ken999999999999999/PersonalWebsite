import Header from "@/components/Header"
import Introduction from "@/components/Introduction"
import Skills from "@/components/Skills"
import ReactFullpage from "@fullpage/react-fullpage"
import { Container } from "@mui/material"
import { useState } from "react"

const Home = () => {
  const [callback, setCallback] = useState({
    moveTo: (link: string, index: number) => {},
  })

  return (
    <>
      <Header onPageClick={(link, index) => callback?.moveTo(link, index)} />
      <Container maxWidth="lg">
        <ReactFullpage
          credits={{}}
          navigation
          anchors={[
            "#introduction",
            "#skills",
            "#education",
            "#experiences",
            "#contact",
          ]}
          scrollingSpeed={1000} /* Options here */
          render={({ _, fullpageApi }) => {
            setCallback(fullpageApi)
            return (
              <ReactFullpage.Wrapper>
                <Introduction />
                <Skills />
              </ReactFullpage.Wrapper>
            )
          }}
        />
      </Container>
    </>
  )
}

export default Home
