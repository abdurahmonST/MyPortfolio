import React from "react";
import { Drawer, MenuList, MenuItem, Overlay } from "./NavDrawer.style";
import Typography from "../Typography";
import { NavLink } from "react-router";

const NavDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <Drawer $isOpen={isOpen}>
        <MenuList>
          <MenuItem onClick={onClose}>
            <NavLink to="/about">
              <Typography type="drawerLink" color="#d9d9d9">
                ABOUT
              </Typography>
            </NavLink>
          </MenuItem>
          <MenuItem onClick={onClose}>
            <NavLink to="/projects">
              <Typography type="drawerLink" color="#d9d9d9">
                PROJECTS
              </Typography>
            </NavLink>
          </MenuItem>
          <MenuItem onClick={onClose}>
            <NavLink to="/contact">
              <Typography type="drawerLink" color="#d9d9d9">
                CONTACT
              </Typography>
            </NavLink>
          </MenuItem>
        </MenuList>
      </Drawer>
    </>
  );
};

export default NavDrawer;
