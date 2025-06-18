import { createGlobalStyle } from 'styled-components';

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Regular.ttf') format('ttf');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-SemiBold.ttf') format('ttf');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Bold.ttf') format('ttf');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }
`;