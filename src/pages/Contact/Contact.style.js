import styled from "styled-components";

export const ContactWrapper = styled.div`
  background-color: #1e201e;
  width: 100%; /* To‘liq kenglikni egallashi uchun */
`;

export const ContactContainer = styled.div`
  display: flex;
  margin: 10px auto;
  width: 1200px; /* Ortiqcha chiqib ketmaslik uchun maksimal kenglik */
  width: 100%; /* Mavjud kenglikni to‘liq ishlatish */
  padding: 0 20px;
`;

export const ContactImageWrapper = styled.div`
  width: 446px;
  height: 310px;
  background-color: #d9d9d9;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 50%;
`;

export const TextSection = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  margin-left: 66px;
`;
