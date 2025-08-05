import React from "react";
import {
  CardHeader,
  DrawerLink,
  FooterText,
  InputText,
  LinkText,
  LogoText,
  PageHeader,
  ParagraphText,
  SectionHeader,
  TitleText,
} from "./Typography.style";

const components = {
  pageHeader: PageHeader,
  sectionHeader: SectionHeader,
  cardHeader: CardHeader,
  linkText: LinkText,
  paragraphText: ParagraphText,
  logoText: LogoText,
  inputText: InputText,
  drawerLink: DrawerLink,
  footerText: FooterText,
  titleText: TitleText,
};

const Typography = ({
  type = "pageHeader",
  text,
  children,
  color = "#1e201e",
  hoverBgColor,
}) => {
  const Component = components[type];
  if (!Component) return null;

  return (
    <Component style={{ color: color }} hoverBgColor={hoverBgColor}>
      {text || children}
    </Component>
  );
};

export default Typography;
