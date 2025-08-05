import styled from "styled-components";
import "../../styles/fonts.css";

export const NormalButton = styled.button`
  font-family: "OutfitThin";
  font-size: 40px;
  color: #f97316;
  border: 1px solid #f97316;
  border: none;
  padding: 14px 32px;
  background-color: #d9d9d910;

  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;

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
