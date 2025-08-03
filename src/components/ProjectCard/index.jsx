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

const ProjectCard = ({ image, title, role, date }) => {
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 30 });
  const springY = useSpring(y, { stiffness: 200, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const handleClick = () => {
    alert("Real Demo clicked!");
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
              borderRadius: ["50%", "25%", "50%"],
              opacity: [0.8, 1, 0.8],
              transition: {
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
            onClick={handleClick}
            style={{ left: springX, top: springY }}
          >
            <Typography type="linkText">Real Demo</Typography>
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
