import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  body {
    background: ${props => props.theme.colors.gainsboro};
    color: ${props => props.theme.colors.onyx100};
    font: 400 16px Roboto, sans-serif;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
`;
