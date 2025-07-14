import React from 'react'
import { CTA1, CTA2, CTA3 } from './ButtonStyle'

const components = {
  button: CTA1,
  button2: CTA2,
  button3: CTA3,
}



const Button = ({ type = 'button', text, children }) => {
  const Component = components[type]
  if(!Component) return null
  
  return (
    <Component>
      { text || children}
    </Component>
  )
}

export default Button
