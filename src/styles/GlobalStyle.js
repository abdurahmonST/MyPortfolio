import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Agdasima';
    src: url('/fonts/Agdasima/Agdasima-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Agdasima';
    src: url('/fonts/Agdasima/Agdasima-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Manrope';
    src: url('/fonts/Manrope/ManropeVariableFont_wght.ttf') format('truetype');
    font-weight: 200 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Manrope';
    src: url('/fonts/Manrope/static/Manrope-ExtraLight.ttf') format('truetype');
    font-weight: 100;
    font-style: inherit;
    font-display: swap;
  }
`;

 