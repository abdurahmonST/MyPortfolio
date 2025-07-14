import styled from "styled-components";

export const CTA1 = styled.button`
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 62px;
    padding: 35px 145px;
    background-color: #111111;
    cursor: pointer;
`;

export const CTA2 = styled.button`
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 30px;
    padding: 15px 145px;
    background-color: #111111;
    cursor: pointer;
`;

export const CTA3 = styled.button`
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 30px;
    padding: 15px 145px;
    background-color: #111111;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
    }
  
    :active {
      transform: scale(0.98);
    }
  
    :focus {
      outline: 2px solid white;
    }
  `;  
