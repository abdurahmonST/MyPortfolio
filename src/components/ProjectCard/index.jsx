import React from "react";
import { Card, Image, TextStyle, TextWrapper } from "./ProjectCard.style";
import Typography from "../Typography";

const ProjectCard = ({ image, title, role, date }) => {
  return (
    <Card>
      {image && <Image src={image} alt={`${title} Photo`} />}
      <TextStyle>
        <Typography type="cardHeader">{title}</Typography>
        <TextWrapper>
          <Typography type="linkText">{role}</Typography>
          <Typography type="linkText">{date}</Typography>
        </TextWrapper>
      </TextStyle>
    </Card>
  );
};

export default ProjectCard;
