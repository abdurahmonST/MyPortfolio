import React from "react";
import {
  LogoWrapper,
  NavbarAction,
  NavbarSections,
  NavbarWrapper,
} from "./navbarStyle";
import { NavLink } from "react-router";
import { GlobalStyle } from "../../styles/GlobalStyle";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <GlobalStyle />
      <LogoWrapper>
        <p>
          Abdurahmon
          <br />
          Bekmirzayev
        </p>
      </LogoWrapper>
      <NavbarSections>
        <NavLink className="linkStyle" to="./home">
          Home
        </NavLink>
        <NavLink className="linkStyle" to="./about">
          About
        </NavLink>
        <NavLink className="linkStyle" to="./projects">
          Projects
        </NavLink>
        <NavLink className="linkStyle" to="./contact">
          Contact
        </NavLink>
        <NavbarAction>
          <button>Resume</button>
        </NavbarAction>
      </NavbarSections>
    </NavbarWrapper>
  );
};

export default Navbar;
