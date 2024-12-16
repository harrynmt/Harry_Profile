import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { CodingIcon, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <CodingIcon width={40} height={40} /> Skills
          </Title>
          {/* <Description>
            Frontend Development I specialize in React, building responsive,
            interactive user interfaces. I use HTML5 and CSS3 to craft semantic,
            mobile-first layouts, while JavaScript enables me to develop
            high-performance features with ES6+ syntax.
          </Description> */}
          <Description>
            {/* <strong>I like to CODE</strong> */}
            <ul>
              <li>
                <strong>Testing:</strong> Jest, Postman, Selenium, Enzyme.
              </li>
              <li>
                <strong>Cloud & Hosting:</strong> AWS, Azure.
              </li>
              <li>
                <strong>Web Security:</strong> OAuth 2.0, JWT,HTTPS/SSL,OWASP.
              </li>
              <li>
                <strong>DevOps & Deployment:</strong> GitLab CI/CD,
                Vercel/Netlify.
              </li>
              <li>
                <strong>Other Skills:</strong> Agile Methodology, Service
                Workers, Communication.
              </li>
            </ul>
          </Description>
          {/* <Description>
            <strong></strong>
            <ul>
              <li>DevOps & Deployment: GitLab CI/CD, Vercel/Netlify.</li>
              <li>
                Other Skills, Tools & Libraries: Agile Methodology, Service
                Workers, Progressive Web Apps (PWAs), Microservices, Babel,
                npm/Yarn, ESLint/Prettier, JupyterLab.
              </li>
              <li>
                Soft Skills: Problem Solving, Team Collaboration, Communication,
                Time Management.
              </li>
            </ul>
            <ul>
              Other Skills, Tools & Libraries: Agile Methodology, Service
              Workers, Progressive Web Apps (PWAs), Microservices, Babel,
              npm/Yarn, ESLint/Prettier, JupyterLab.
            </ul>
            <ul>
              Soft Skills: Problem Solving, Team Collaboration, Communication,
              Time Management.
            </ul>
          </Description> */}
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Technical Skills
          </Title>
          <Description></Description>
          <Description>
            <strong></strong>
            <ul>
              <li>
                <strong>Frontend Development:</strong> HTML5, CSS3, JavaScript,
                React, CSS Frameworks - Bootstrap, Tailwind, State Management-
                Redux, React Context API.
              </li>
              <li>
                <strong>Backend Development:</strong> Node.js, Express.js,
                Django, Flask, Java, RESTful APIs, PostgreSQL, MongoDB.
              </li>
            </ul>
          </Description>
          {/* <Description>
              <strong></strong>
              <p></p>
            </Description> */}
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
