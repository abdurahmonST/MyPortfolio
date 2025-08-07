import React from "react";
import {
  HeaderWrapper,
  LeftSide,
  ProjectCardsWrapper,
  ProjectsWrapper,
} from "./Projects.style";
import Typography from "../../components/Typography";
import ProjectCard from "../../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <ProjectsWrapper className="container">
      <HeaderWrapper>
        <Typography>MY PROJECTS</Typography>
        <LeftSide>
          <Typography type="paragraphText">
            Each project represents a step in my journey as a developer — built
            with care, curiosity, and attention to detail.
          </Typography>
        </LeftSide>
      </HeaderWrapper>
      <ProjectCardsWrapper>
        {/* <ProjectCard
          image="Images/ProjectOne.jpg"
          title="Ecommerce Platform"
          role="Fullstack Development"
          date="May, 2025"
        ></ProjectCard>
        <ProjectCard
          image="Images/ProjectTwo.jpg"
          title="Furniture Website"
          role="Frontend Development"
          date="July, 2025"
        ></ProjectCard> */}
        <ProjectCard
          image="Images/FurnitureWebsite.png"
          title="Furtniture Store"
          role="Frontend Development"
          date="March, 2025"
          linkName={"https://furniture-project-five.vercel.app/"}
        ></ProjectCard>
        <ProjectCard
          image="Images/CodeMuseum.png"
          title="Code Museum"
          role="Backend Development"
          date="August, 2025"
          linkName={"https://code-musuem.vercel.app"}
        ></ProjectCard>
      </ProjectCardsWrapper>
    </ProjectsWrapper>
  );
};

export default ProjectsPage;
