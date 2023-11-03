import {
  Box,
  Fade,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Zoom,
} from "@mui/material"
import Section, { ICommonSection } from "./Section"
import Title from "./Title"
import React from "react"
import ExperienceCard from "./ExperienceCard"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
import Dot from "@/assets/Dot.json"
import Lottie from "lottie-react"
const works = [
  {
    company: "Stacktics Inc.",
    jobTitle: "Full Stack Developer I",
    period: "Jun 2023 - Oct 2023",
    descriptions: [
      "- Designed and developed 10+ RESTful APIs with Python and SQL, enabling efficient data retrieval and storage in Google Big Query for a leading Canadian bank's Digital Marketing Management platform",
      "- Created responsive and intuitive frontend interfaces using ReactJS and Redux for a leading Canadian bank's financial management system, empowering clients to effectively oversee budgets up to $100,000",
      "- Optimized backend processes by restructuring and updating RESTful APIs with Python and SQL, resulting in a performance boost of 50%",
      "- Maintained and enhanced 20+ ETL solutions with Google APIs and Python for operations on large data sets, scaling, and automation across 5+ Google Platforms",
    ],
  },
  {
    company: "Mouxidea Limited",
    jobTitle: "Freelance Developer",
    period: "March 2023 - Sep 2023",
    descriptions: [
      "- Integrated various workflow platforms with the current system and implemented workflow management with OutSystems",
      "- Designed and managed expense reimbursement processes with Business Process Technology and integrate them into applications",
      "- Collaborated with design team and followed the UI/UX guidelines to developed Reactive Web App with Responsive interface that can be run on all browsers and devices",
    ],
  },
  {
    company: "Mouxidea Limited",
    jobTitle: "Analyst Programmer",
    period: "June 2020 - Oct 2022",
    descriptions: [
      "- Collaborated with development members from the offshore team to develop and maintain 3+ big-scale projects",
      "- Migrated a top tier property management organization's annual appraisal (5000+ employees) from paper to online web application by using TypeScript, ReactJS and retrieving Microsoft SQL Server data, which reduced 50% manual work of the HR department",
      "- Designed and developed a responsive multilingual assesmdent platform with Ant-Design for an international HR company which can be used in all browsers and devices",
      "- Designed and provided RESTful APIs and 30+ data models with C# backend using ASP.Net Core for retrieving and storing various data in Microsoft SQL Server for a mdart social service system of top tier non-governmental organization, which serve 1,000,000+ head counts per year",
      "- Built multiple choice scanner and test grader for 1000+ performance appraisal forms detection for a top tier property management organization's annual appraisal along with Python and OpenCV",
      "- Configured CI/CD with Bitbucket Pipelines for deploying web application to Azure, which led to a 30% boost in deployment efficiency",
    ],
  },
  {
    company: "Flying Milk Tea",
    jobTitle: "Frontend Web Developer (Part-time)",
    period: "Apr 2020 - July 2020",
    descriptions: [
      "-	Created responsive and intuitive product pages using ReactJS and Material UI for an international e-commerce website",
    ],
  },
]

const Experiences = ({ isCurrent, timeout }: ICommonSection): JSX.Element => {
  return (
    <Section>
      <Fade in={isCurrent} timeout={timeout}>
        <Box mb="20%">
          <Title textAlign="center">Professional Experiences</Title>
          <Stepper orientation="vertical">
            {works.map((work, index) => (
              <Zoom
                key={`work${index}`}
                in={isCurrent}
                timeout={timeout}
                style={{ transitionDelay: index * 100 + "ms" }}
              >
                <Step active>
                  <StepLabel
                    icon={
                      <Lottie
                        style={{ height: "20px", width: "20px" }}
                        animationData={Dot}
                      />
                    }
                  >
                    {work.period}
                  </StepLabel>
                  <StepContent>
                    <ExperienceCard {...work} />
                  </StepContent>
                </Step>
              </Zoom>
            ))}
          </Stepper>
        </Box>
      </Fade>
    </Section>
  )
}

export default Experiences
