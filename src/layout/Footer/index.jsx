import React from "react";
import {
  FooterWrapper,
  SocialLinksWrapper,
  VerifiedWrapper,
} from "./Footer.style";
import Typography from "../../components/Typography";
import { NavLink } from "react-router";

const FooterLayout = () => {
  return (
    <FooterWrapper>
      <VerifiedWrapper>
        <Typography type="footerText" color="#d9d9d9">
          © 2025 Abdurahmon. All rights reserved.
        </Typography>
      </VerifiedWrapper>
      <SocialLinksWrapper>
        <NavLink style={{ textDecoration: "none" }}>
          <Typography type="linkText" color="#d9d9d9">
            Linkedin
          </Typography>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }}>
          <Typography type="linkText" color="#d9d9d9">
            Github
          </Typography>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }}>
          <Typography type="linkText" color="#d9d9d9">
            Twitter
          </Typography>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }}>
          <Typography type="linkText" color="#d9d9d9">
            Telegram
          </Typography>
        </NavLink>
      </SocialLinksWrapper>
    </FooterWrapper>
  );
};

export default FooterLayout;
