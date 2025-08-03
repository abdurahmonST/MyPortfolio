import React from "react";
import Typography from "../Typography";
import { Input, Textarea } from "./Input.style";

const components = {
  input: Input,
  textarea: Textarea,
};

const InputComponent = ({ type = "input", text, children, ...props }) => {
  const Component = components[type] || Input; // Agar type topilmasa, default Input

  return (
    <div>
      {(text || children) && (
        <Typography type="inputText" color="#d9d9d9">
          {text || children}
        </Typography>
      )}
      <Component {...props} />
    </div>
  );
};

export default InputComponent;
