import React from "react";
import {
  BottomSection,
  HeaderImage,
  HeaderSection,
  HomeWrapper,
  LeftSide,
  ProjectsSection,
  RightSide,
  ShortIntro,
  SimpleCard,
  SimpleCardWrapper,
} from "./Home.styles";
import Typography from "../../components/Typography";
import { Button } from "../../components";
import { NavLink } from "react-router";

const HomePage = () => {
  return (
    <HomeWrapper className="container">
      <HeaderSection>
        <Typography type="pageHeader">ABDURAHMON BEKMIRZAYEV</Typography>
        <HeaderImage>
          <BottomSection>
            <LeftSide>
              <NavLink to="/contact">
                <Button type="normalButton" color="#1e201e">
                  Let's Talk
                </Button>
              </NavLink>
            </LeftSide>
            <RightSide>
              <Typography type="titleText">Fullstack Developer</Typography>
            </RightSide>
          </BottomSection>
          <img src="/Images/HeaderImage.jpg" alt="header image" />
        </HeaderImage>
      </HeaderSection>
      <ShortIntro>
        <LeftSide>
          <Typography type="paragraphText">
            Hey there! I’m Abdurahmon, a 16-year-old Fullstack Developer
            building creative and efficient digital solutions.
          </Typography>
        </LeftSide>

        <RightSide>
          <NavLink to="/about">
            <Button color="#1e201e09">
              More <br /> about me!
            </Button>
          </NavLink>
        </RightSide>
      </ShortIntro>

      <ProjectsSection>
        <Typography type="sectionHeader">Favorite Projects</Typography>
        <SimpleCardWrapper>
          <LeftSide>
            <SimpleCard>
              <Typography type="linkText">ECOMMERCE PLATFORM</Typography>
            </SimpleCard>
          </LeftSide>
          <RightSide>
            <SimpleCard>
              <Typography type="linkText">CODE MUSEUM</Typography>
            </SimpleCard>
          </RightSide>
        </SimpleCardWrapper>
        <NavLink to="/pojects">
          <Button color="#1e201e09">More Works</Button>
        </NavLink>
      </ProjectsSection>
    </HomeWrapper>
  );
};

export default HomePage;
