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
  cursor: pointer;
  width: 50%;
`;

export const NavbarSections = styled.div`
  font-family: 'Manrope', sans-serif;
  display: flex;
  align-items: center;
  gap: 38px;
  font-size: 28px;

  .linkStyle {
    position: relative;
    text-decoration: none;
    color: #000000;
    font-weight: 100;
    transition: color 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 0%;
      height: 1px;
      background-color: #000000;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
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
        transition: all 0.3s ease-in-out ;

        &:hover{
          background-color: #000000;
          color: #ffffff;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
        }
    }
`