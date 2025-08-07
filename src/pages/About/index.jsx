import React from "react";
import {
  AboutWrapper,
  HeaderWrapper,
  ImageWrapper,
  LeftSide,
  RightSide,
  SectionFiller,
  SectionWrapper,
} from "./About.style";
import { MarqueeText, Typography } from "../../components";

const AboutPage = () => {
  return (
    <AboutWrapper className="container">
      <HeaderWrapper>
        <LeftSide>
          <Typography>ABOUT ME</Typography>
          <ImageWrapper src="/Images/AboutImage.jpg"></ImageWrapper>
        </LeftSide>
        <RightSide>
          <Typography type="paragraphText">
            I’m a 16-year-old Fullstack Developer from Uzbekistan with a strong
            passion for creating user-focused, responsive, and modern web
            applications. I work primarily with JavaScript-based technologies,
            including React for the frontend and Node.js for the backend. I also
            enjoy working with tools like Express, MongoDB, and Tailwind CSS to
            build full-featured, scalable projects from scratch.
          </Typography>
        </RightSide>
      </HeaderWrapper>
      <MarqueeText text="About me • Fullstack Developer • Creative Person •" />
      <SectionWrapper>
        <LeftSide>
          <SectionFiller />
        </LeftSide>
        <RightSide>
          <Typography type="sectionHeader">My Journey</Typography>
          <Typography type="paragraphText">
            My journey into web development started with curiosity and quickly
            turned into a deep interest in building digital solutions that are
            not only functional but also clean and enjoyable to use. I believe
            in writing readable, maintainable code and designing interfaces that
            feel natural to users.
          </Typography>
        </RightSide>
      </SectionWrapper>
      <SectionWrapper>
        <LeftSide>
          <Typography type="sectionHeader">My Philosophy</Typography>
          <Typography type="paragraphText">
            I see development as more than just code — it's a form of
            expression. I care about the why just as much as the how. I value
            simplicity, usability, and purpose-driven design. At the heart of
            what I do is this belief: technology should be thoughtful, not just
            functional.
          </Typography>
        </LeftSide>
        <RightSide>
          <SectionFiller />
        </RightSide>
      </SectionWrapper>
      <SectionWrapper>
        <LeftSide>
          <SectionFiller />
        </LeftSide>
        <RightSide>
          <Typography type="sectionHeader">Why work with me?</Typography>
          <Typography type="paragraphText">
            My journey into web development started with curiosity and quickly
            turned into a deep interest in building digital solutions that are
            not only functional but also clean and enjoyable to use. I believe
            in writing readable, maintainable code and designing interfaces that
            feel natural to users.
          </Typography>
        </RightSide>
      </SectionWrapper>
    </AboutWrapper>
  );
};

export default AboutPage;
