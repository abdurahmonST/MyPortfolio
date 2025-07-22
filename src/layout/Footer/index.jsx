import React from "react";
import { NavLink } from "react-router";
import { BottomSentence, FooterWrapper, LinkWrapper } from "./footerStyle";

const FooterLayout = () => {
  return (
    <FooterWrapper>
      <LinkWrapper>
        <NavLink
          className="footerLink"
          to="https://www.linkedin.com/in/abdurahmon-bekmirzayev/"
        >
          Linkedin
        </NavLink>
        <NavLink className="footerLink" to="https://github.com/abdurahmonST">
          Github
        </NavLink>
        <NavLink className="footerLink" to="https://t.me/bekmirzayevabdurahmon">
          Telegram
        </NavLink>
        <NavLink
          className="footerLink"
          to="https://www.instagram.com/bekmirzayev_page/"
        >
          Instagram
        </NavLink>
        <NavLink className="footerLink" to="https://x.com/Abdurahmon17384">
          Twitter
        </NavLink>
      </LinkWrapper>

      <BottomSentence>
        <p>© 2025 Abdurahmon. All rights reserved.</p>
      </BottomSentence>
    </FooterWrapper>
  );
};

export default FooterLayout;
