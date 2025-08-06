import React from "react";
import {
  BottomSection,
  CTAWrapper,
  ImageWrapper,
  LeftSide,
  RightSide,
} from "./CTA.style";
import Typography from "../Typography";
import Button from "../Button";
import { NavLink } from "react-router";

const CallToAction = () => {
  return (
    <CTAWrapper>
      <Typography type="sectionHeader" color="#d9d9d9">
        Let's work together
      </Typography>
      <ImageWrapper src="/Images/CallToAction.jpg" alt="CTA photo" />
      {/* <img src="/Images/CallToAction.jpg" alt="CTA photo" /> */}
      {/* </ImageWrapper> */}
      <BottomSection>
        <LeftSide>
          <NavLink style={{ textDecoration: "none" }}>
            <Typography type="linkText" color="#d9d9d9">
              +998 94 004 35 08
            </Typography>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }}>
            <Typography type="linkText" color="#d9d9d9">
              abdurahmonbekmirzayev3@gmail.com
            </Typography>
          </NavLink>
        </LeftSide>
        <RightSide>
          <NavLink to="/contact">
            <Button>Get in Touch</Button>
          </NavLink>
        </RightSide>
      </BottomSection>
    </CTAWrapper>
  );
};

export default CallToAction;
