import styled from "styled-components";

export const HomeWrapper = styled.div`
  padding: 0;
`;

export const HeaderSection = styled.div``;

export const HeaderImage = styled.div`
  width: 1280px;
  height: 600px;
  background-color: #f9731650;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const BottomSection = styled.div`
  padding: 0 14px;
  padding-top: 506px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const ShortIntro = styled.div`
  padding: 107px 0;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const ProjectsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
`;

export const SimpleCardWrapper = styled.div`
  padding: 56px 0;
  display: flex;
  justify-content: center;
  gap: 80px;
  align-items: center;
`;
