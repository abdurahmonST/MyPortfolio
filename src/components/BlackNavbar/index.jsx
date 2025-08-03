import React from "react";
import { LinkWrapper, LogoWrapper, NavbarWrapper } from "./Navbar.style";
import Typography from "../Typography";
import { NavLink } from "react-router";

const DarkNavbar = () => {
  return (
    <NavbarWrapper>
      <LogoWrapper>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Typography type="logoText" color="#d9d9d9">
            Code by Abdurahmon
          </Typography>
        </NavLink>
      </LogoWrapper>
      <LinkWrapper>
        <NavLink to="/about" style={{ textDecoration: "none" }}>
          <Typography type="linkText" color="#d9d9d9">
            About
          </Typography>
        </NavLink>
        <NavLink to="/projects" style={{ textDecoration: "none" }}>
          <Typography type="linkText" color="#d9d9d9">
            Projects
          </Typography>
        </NavLink>
        <NavLink to="/contact" style={{ textDecoration: "none" }}>
          <Typography type="linkText" color="#d9d9d9">
            Contact
          </Typography>
        </NavLink>
      </LinkWrapper>
    </NavbarWrapper>
  );
};

export default DarkNavbar;
