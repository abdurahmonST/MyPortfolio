import styled from "styled-components";
import "../../styles/fonts.css";

export const NormalButton = styled.button`
  font-family: "OutfitThin";
  font-size: 40px;
  color: #f97316;
  border: 1px solid #f9731650;
  padding: 14px 32px;
  background-color: black;

  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background: transparent;

  &::before {
    content: "";
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f97316;
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    bottom: 0;
  }

  &:hover {
    color: #d9d9d9;
    /* transform: translateY(-2px); */
  }
`;
