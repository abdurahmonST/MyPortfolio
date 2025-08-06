import styled from "styled-components";

export const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e201e;
  padding: 70px;
`;

export const ImageWrapper = styled.img`
  width: 790px;
  height: 320px;
  background-color: aliceblue;
  background-position: center;
  object-fit: cover;
  margin: 30px auto;
  opacity: 0.9;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 790px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`;
