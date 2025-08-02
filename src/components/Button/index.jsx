import React from "react";
import { NormalButton } from "./Button.stlyles";

const components = {
  normalButton: NormalButton,
};

const Button = ({ type = "normalButton", text, children, styles }) => {
  const Component = components[type];
  if (!Component) return null;

  return <Component style={styles}>{text || children}</Component>;
};

export default Button;
