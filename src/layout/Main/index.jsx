import React, { useState } from "react";
import NavbarLayout from "../Navbar";
import FooterLayout from "../Footer";
import Badge from "../../components/Badge";
import NavDrawer from "../../components/Drawer";
import { MainWrapper } from "./Main.style";
import { BlackNavbar, CallToAction } from "../../components";
import { useLocation } from "react-router";

const MainLayout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  return (
    <MainWrapper>
      <Badge
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        isActive={isDrawerOpen}
      />
      <NavDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      {location.pathname === "/contact" ? <BlackNavbar /> : <NavbarLayout />}
      {children}
      {location.pathname !== "/contact" && <CallToAction />}
      <FooterLayout />
    </MainWrapper>
  );
};

export default MainLayout;
