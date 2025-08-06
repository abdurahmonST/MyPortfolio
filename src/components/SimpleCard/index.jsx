import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { SimpleCard, BubbleWrapper, Image } from "./simpleCard.styles";
import Typography from "../Typography";
import { NavLink } from "react-router";

const SimpleCardComponent = ({ name, image }) => {
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 40 });
  const springY = useSpring(y, { stiffness: 200, damping: 40 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const bubbleWidth = 130; // Adjust based on BubbleWrapper width
    const bubbleHeight = 130; // Adjust based on BubbleWrapper height
    x.set(e.clientX - rect.left - bubbleWidth / 2);
    y.set(e.clientY - rect.top - bubbleHeight / 2);
  };

  const handleClick = () => {
    console.log(`Navigating to project: ${name}`);
  };

  return (
    <SimpleCard
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {image && <Image src={image} alt={`${name} Photo`} />}
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
            onClick={handleClick}
            style={{ left: springX, top: springY }}
          >
            <NavLink to="/projects" style={{ textDecoration: "none" }}>
              <Typography type="cardHeader">Let's See</Typography>
            </NavLink>
          </BubbleWrapper>
        )}
      </AnimatePresence>
      <Typography type="logoText">{name}</Typography>
    </SimpleCard>
  );
};

export default SimpleCardComponent;
