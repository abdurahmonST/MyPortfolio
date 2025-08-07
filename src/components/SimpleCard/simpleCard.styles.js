import styled from "styled-components";
import { motion } from "framer-motion";

export const SimpleCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  width: 600px;
  height: 400px;
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
  transform: translate(-10%, -10%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: auto;
  color: white;
  font-weight: 600;
  font-size: 14px;
  z-index: 5;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 600px;
  height: 400px;
  object-fit: contain;
  /* background-color: #1e201e50; */
`;
