import styled from "styled-components";

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    .IntroText {
        font-family: 'Outfit', sans-serif;
        font-size: 32px;
        font-weight: 100;
        padding: 28px;
        margin: 138px;
        border: 2px solid black;
        box-shadow: 4px 4px 0 rgba(0, 0, 0, 1);
    }

    justify-content: center;
    align-items: center;
`;

export const SliderSide = styled.div`
    font-family: 'Agdasima', sans-serif;
    font-size: 90px;
    font-weight: 900;
    color: #FFFFFF;
    background-color: #000000;
    padding: 18px 232px;
    margin: 0 auto;
`

export const BoxWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 8px;
    margin: 8px auto;
    margin-bottom: 40px;
    width: 100%;
`;

export const Box = styled.div`
    background-color: gray;
    padding: 200px;
    width: 50%;
    transition: all 0.3s ease-in-out;
    cursor: url('/Cursor/cursorHover.svg') 0 0, auto;
`;