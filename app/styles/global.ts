'use client';

import { createGlobalStyle } from 'styled-components';

import * as V from './variables';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${V.color.purple};
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

export default GlobalStyles;
