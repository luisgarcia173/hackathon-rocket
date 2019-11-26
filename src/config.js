import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: 'red',
  secondary: 'blue',
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }
  
  html {
    font-size: 14px;
    font-family: Source Sans Pro, sans-serif;  
  }
`