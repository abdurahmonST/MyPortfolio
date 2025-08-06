// Badge.style.js
import styled from "styled-components";

export const BadgeWrapper = styled.div`
  position: fixed;
  top: 16px;
  right: 20px;
  /* left: 1410px; */
  width: 94px;
  height: 94px;
  background-color: ${({ $isActive }) => ($isActive ? "#f97316" : "#1e201e")};
  border: 1px solid #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: 6;

  &::before {
    content: "";
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ $isActive }) => ($isActive ? "#1e201e" : "#f97316")};
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    bottom: 0;
  }

  .icon-container {
    position: relative;
    width: 70%;
    height: 70%;
  }

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
  }

  .icon-visible {
    transform: translateY(0);
  }

  .icon-hidden {
    transform: translateY(${(props) => (props.$isActive ? "-100%" : "100%")});
  }
`;
