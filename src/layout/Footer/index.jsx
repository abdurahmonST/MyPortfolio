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
        <NavLink
          to="https://www.linkedin.com/in/abdurahmon-bekmirzayev/"
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener norefferer"
        >
          <Typography type="linkText" color="#d9d9d9">
            Linkedin
          </Typography>
        </NavLink>
        <NavLink
          to="https://github.com/abdurahmonST"
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener norefferer"
        >
          <Typography type="linkText" color="#d9d9d9">
            Github
          </Typography>
        </NavLink>
        <NavLink
          to="https://x.com/Abdurahmon17384"
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener norefferer"
        >
          <Typography type="linkText" color="#d9d9d9">
            Twitter
          </Typography>
        </NavLink>
        <NavLink
          to="https://t.me/abdurahmon_developer"
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener norefferer"
        >
          <Typography type="linkText" color="#d9d9d9">
            Telegram
          </Typography>
        </NavLink>
      </SocialLinksWrapper>
    </FooterWrapper>
  );
};

export default FooterLayout;
