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

const HomePage = () => {
  return (
    <HomeWrapper className="container">
      <HeaderSection>
        <Typography type="pageHeader">ABDURAHMON BEKMIRZAYEV</Typography>
        <HeaderImage>
          <BottomSection>
            <LeftSide>
              <Button type="normalButton">Let's Talk</Button>
            </LeftSide>
            <RightSide>
              <Typography type="titleText">Fullstack Developer</Typography>
            </RightSide>
          </BottomSection>
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
          <Button>
            More <br /> about me!
          </Button>
        </RightSide>
      </ShortIntro>

      <ProjectsSection>
        <Typography type="sectionHeader">Favorite Projects</Typography>
        <SimpleCardWrapper>
          <LeftSide>
            <SimpleCard></SimpleCard>
          </LeftSide>
          <RightSide>
            <SimpleCard></SimpleCard>
          </RightSide>
        </SimpleCardWrapper>
        <Button>More Works</Button>
      </ProjectsSection>
    </HomeWrapper>
  );
};

export default HomePage;
