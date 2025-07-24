import React from "react";
import { AboutWrapper, Box, BoxWrapper, SliderSide } from "./aboutStyles";

const index = () => {
  return (
    <AboutWrapper>
      <h2 className="IntroText">
        I'm a fullstack developer who loves building clean, responsive, and
        user-centered web applications. From frontend interactions to backend
        logic - I care about every detail that brings an idea to life.
      </h2>

      <SliderSide>
        <h3>LET ME INTRODUCE MY SKILLS</h3>
        <h3>LET ME INTRODUCE MY SKILLS</h3>
      </SliderSide>

      <BoxWrapper>
        <Box>
          <h2>Frontend</h2>
        </Box>
        <Box>
          <h2>Frontend</h2>
        </Box>
      </BoxWrapper>
    </AboutWrapper>
  );
};

export default index;
