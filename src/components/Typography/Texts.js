import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Agdasima';
    src: url('/fonts/Agdasima/Agdasima-Regular.ttf') format('truetype');
    font-weight: 400; /* Regular */
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Agdasima';
    src: url('/fonts/Agdasima/Agdasima-Bold.ttf') format('truetype');
    font-weight: 700; /* Bold */
    font-style: normal;
    font-display: swap;
  }
`;