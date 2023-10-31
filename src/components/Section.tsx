interface ISection {
  children: React.ReactNode
  isLastSection?: boolean
}

const Section = ({
  children,
  isLastSection = false,
}: ISection): JSX.Element => {
  return <div className="section">{children}</div>
}

export default Section
