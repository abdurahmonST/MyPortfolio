import styled from "styled-components";
import "../../styles/fonts.css";

export const PageHeader = styled.p`
  font-family: "LondrinaBlack", sans-serif;
  font-size: 128px;
  color: #1e201e;
`;

export const SectionHeader = styled.p`
  font-family: "LondrinaBlack", sans-serif;
  font-size: 96px;
  color: #1e201e;
`;

export const CardHeader = styled.p`
  font-family: "LondrinaBlack", sans-serif;
  font-size: 40px;
  color: #1e201e;
`;

export const DrawerLink = styled.a`
  display: inline-block;
  font-family: "LondrinaBlack", sans-serif;
  font-size: 210px;
  color: #d9d9d9;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    color: #f97316;
  }
`;

export const LinkText = styled.p`
  font-family: "OutfitThin", sans-serif;
  font-size: 24px;
  color: #1e201e;
  position: relative;
  display: inline-block;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 100%;
    height: 1px;
    background-color: ${({ hoverBgColor }) => hoverBgColor || "#d9d9d9"};
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
`;

export const ParagraphText = styled.p`
  font-family: "OutfitLight", sans-serif;
  font-size: 32px;
  color: #1e201e;
`;

export const LogoText = styled.p`
  font-family: "OutfitExtraLight", sans-serif;
  font-size: 34px;
  color: #1e201e;
`;

export const TitleText = styled.p`
  font-family: "OutfitExtraLight", sans-serif;
  font-size: 38px;
  color: #1e201e;
`;

export const FooterText = styled.p`
  font-family: "OutfitExtraLight", sans-serif;
  font-size: 24px;
  color: #1e201e;
`;

export const InputText = styled.p`
  font-family: "OutfitExtraLight", sans-serif;
  font-size: 36px;
  color: #1e201e;
`;
