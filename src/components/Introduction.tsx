import Section from "./Section"

interface IIntroduction {}

const Introduction = ({}: IIntroduction): JSX.Element => {
  return (
    <Section>
      <div>I am Developer</div>
    </Section>
  )
}

export default Introduction
