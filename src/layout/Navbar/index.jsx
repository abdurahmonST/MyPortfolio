import React from "react";
import { LinkWrapper, LogoWrapper, NavbarWrapper } from "./Navbar.style";
import Typography from "../../components/Typography";
import { NavLink } from "react-router";
import { AboutPage } from "../../pages";

const NavbarLayout = () => {
  return (
    <NavbarWrapper>
      <LogoWrapper>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Typography type="logoText">Code by Abdurahmon</Typography>
        </NavLink>
      </LogoWrapper>
      <LinkWrapper>
        <NavLink to="/about" style={{ textDecoration: "none" }}>
          <Typography type="linkText">About</Typography>
        </NavLink>
        <NavLink to="/projects" style={{ textDecoration: "none" }}>
          <Typography type="linkText">Projects</Typography>
        </NavLink>
        <NavLink to="/contact" style={{ textDecoration: "none" }}>
          <Typography type="linkText">Contact</Typography>
        </NavLink>
      </LinkWrapper>
    </NavbarWrapper>
  );
};

export default NavbarLayout;
