import React from 'react';;
import { DesktopInput, MobileInput } from './inputStyles';

const components = {
    inputDesk: DesktopInput,
    inputMob: MobileInput,
    messageInputDesk: DesktopMessageINput,
    messageInputMobile: MobileMessageINput,
};

const Input = ({ type = 'input1', text, children}) => {
  const Component = components[type];
  if (!Component) return null;

  return (
    <Component placeholder="hello">
        {text || children}
    </Component>
  )
};

export default Input;
