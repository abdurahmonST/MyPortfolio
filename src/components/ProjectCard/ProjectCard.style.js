import styled from "styled-components";
import { motion } from "framer-motion";

export const Card = styled.div`
  position: relative;
  width: 610px;
  height: 612px;
  margin: 10px;
  background-color: #fbfffe50;
  overflow: hidden;
  cursor: pointer;
`;

export const BubbleWrapper = styled(motion.div)`
  position: absolute;
  width: 130px;
  height: 130px;
  background-color: #f97316;
  border-radius: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: auto; /* allow click */
  color: white;
  font-weight: 600;
  font-size: 14px;
  z-index: 5;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 610px;
  height: 500px;
  object-fit: contain;
  background-color: #1e201e50;
`;

export const TextStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 26px;
`;
