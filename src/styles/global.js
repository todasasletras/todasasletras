import { createGlobalStyle } from 'styled-components';

import * as V from 'styles/variables';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${V.color.white};
    color: ${V.color.black};
    font-family: 'Inter', sans-serif;
    margin: 0;
    overflow-x: hidden;
    padding: 0;
    width: 100%;
  }

  #root {
    position: relative;
  }
`;
export default GlobalStyle;
