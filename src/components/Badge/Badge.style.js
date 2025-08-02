// Badge.style.js
import styled from "styled-components";

export const BadgeWrapper = styled.div`
  position: fixed;
  top: 40px;
  left: 1380px;
  width: 94px;
  height: 94px;
  background-color: ${({ $isActive }) => ($isActive ? "#f97316" : "#1e201e")};
  color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
  overflow: hidden;

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
`;
