import styled from "styled-components";

export const ProjectsWrapper = styled.div``;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px;
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`;

export const ProjectCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 50px auto;
`;
