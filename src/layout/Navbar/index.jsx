import React from 'react'
import { NavbarWrapper } from './navbarStyle'
import { NavLink } from 'react-router'

const NavbarLayout = () => {
  return (
    <NavbarWrapper>
      <LogoWrapper>
        <h2>Abdurahmon</h2>
      </LogoWrapper>
      <Sections>
        <NavLink to='./home' >Home</NavLink>
        <NavLink to='./about' >About</NavLink>
        <NavLink to='./projects' >Projects</NavLink>
        <NavLink to='./contact' >Contact</NavLink>
      </Sections>
    </NavbarWrapper>
  )
}

export default NavbarLayout
