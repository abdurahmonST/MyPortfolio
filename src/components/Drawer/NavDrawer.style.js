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
  z-index: 2;
`;

export const MenuList = styled.ul`
  padding: 10px 30px;
  list-style: none;
`;

export const MenuItem = styled.li``;
