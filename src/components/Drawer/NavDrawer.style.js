import styled from "styled-components";

export const Drawer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%)
    translateY(${(props) => (props.$isOpen ? "0" : "-100%")});
  width: 1280px;
  height: 782px;
  background-color: #1e201e;
  transition: transform 0.3s ease-in-out;
  z-index: 6;
`;

export const MenuList = styled.ul`
  padding: 10px 30px;
  list-style: none;
`;

export const MenuItem = styled.li`
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f97316;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Yarim shaffof qora fon */
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 5; /* Drawer dan pastroq */
`;
