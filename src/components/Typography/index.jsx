import React from "react";
import {
  CardHeader,
  DrawerLink,
  InputText,
  LinkText,
  LogoText,
  PageHeader,
  ParagraphText,
  SectionHeader,
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
};

const Typography = ({ type = "pageHeader", text, children, styles = null }) => {
  const Component = components[type];
  if (!Component) return null;

  return <Component style={styles}>{text || children}</Component>;
};

export default Typography;
