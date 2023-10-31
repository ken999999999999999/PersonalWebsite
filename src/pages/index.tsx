import Introduction from "@/components/Introduction"

import ReactFullpage from "@fullpage/react-fullpage"

export default function Home() {
  return (
    <ReactFullpage
      credits={{}}
      navigation
      menu="#navbar"
      anchors={[
        "#introduction",
        "#skills",
        "#education",
        "#experiences",
        "#contact",
      ]}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Introduction />
            <Introduction />
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}
