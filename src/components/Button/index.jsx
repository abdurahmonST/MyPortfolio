import React from "react";
import { NormalButton } from "./Button.stlyles";

const components = {
  normalButton: NormalButton,
};

const Button = ({
  type = "normalButton",
  text,
  children,
  styles = {},
  color = "#d9d9d910",
}) => {
  const Component = components[type];
  if (!Component) return null;

  return (
    <Component style={{ ...styles, backgroundColor: color }}>
      {text || children}
    </Component>
  );
};

export default Button;
