import styled from "styled-components";

export const FooterWrapper = styled.footer`
`

export const LinkWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Manrope', sans-serif;
  font-weight: 100;
  gap: 80px;
  width: 100%;
  font-size: 28px;

  .footerLink {
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
`

export const BottomSentence = styled.footer`
display: flex;
justify-content: center;
align-items: center;
  font-family: 'Manrope', sans-serif;
  margin-top: 50px;
  font-size: 20;
  font-weight: 100;
  margin-bottom: 10px;
`