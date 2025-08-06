import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const MarqueeWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  margin-left: calc(-50vw + 50%);
  background-color: #1e201e;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

export const MarqueeContent = styled.div`
  display: inline-block;
  animation: ${scroll} 15s linear infinite;
`;

export const MarqueeInner = styled.span`
  display: inline-block;
  padding-right: 2rem;
  font-size: 24px;
  font-weight: 500;
`;
