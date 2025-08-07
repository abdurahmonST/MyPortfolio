import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  Card,
  Image,
  TextStyle,
  TextWrapper,
  BubbleWrapper,
} from "./ProjectCard.style";
import Typography from "../Typography";
import { NavLink } from "react-router";

const ProjectCard = ({ image, title, role, date, linkName }) => {
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 30 });
  const springY = useSpring(y, { stiffness: 200, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = 130;
    const height = 130;
    x.set(e.clientX - rect.left - width / 2);
    y.set(e.clientY - rect.top - height / 2);
  };

  return (
    <Card
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <BubbleWrapper
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            whileTap={{
              scale: [1, 1.6, 1],
              opacity: [0.8, 1, 0.8],
              transition: {
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
            style={{ left: springX, top: springY }}
          >
            <NavLink
              to={linkName}
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <Typography type="cardHeader">Real Demo</Typography>
            </NavLink>
          </BubbleWrapper>
        )}
      </AnimatePresence>

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
