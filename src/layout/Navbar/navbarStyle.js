import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  margin: 38px 32px;
`;

export const LogoWrapper = styled.div`
  font-family: 'Agdasima', sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 26px;
  font-weight: 700; 
  width: 50%;
  cursor: pointer;
`;

export const NavbarSections = styled.div`
  font-family: 'Manrope', sans-serif;
  display: flex;
  align-items: center;
  gap: 38px;
  font-size: 28px;
  .linkStyle {
    text-decoration: none;
    color: #000000;
    font-weight: 100;
  }
`;

export const NavbarAction = styled.div`
    button {
        font-family: 'Manrope', sans-serif;
        font-size: 28px;
        padding: 14px 34px;
        outline: none;
        background: none;
        border: 2px solid black;
        cursor: pointer;
        font-weight: 100;
    }
`