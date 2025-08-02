import React from "react";
import { Drawer, MenuList, MenuItem } from "./NavDrawer.style";
import Typography from "../Typography";

const NavDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer $isOpen={isOpen}>
      <MenuList>
        <MenuItem onClick={onClose}>
          <Typography type="drawerLink">ABOUT</Typography>
        </MenuItem>
        <MenuItem onClick={onClose}>
          <Typography type="drawerLink">PROJECTS</Typography>
        </MenuItem>
        <MenuItem onClick={onClose}>
          <Typography type="drawerLink">CONTACT</Typography>
        </MenuItem>
      </MenuList>
    </Drawer>
  );
};

export default NavDrawer;
