import { createGlobalStyle } from "styled-components";

export const colors = {
  primaryDarken: '#100f14',
  primary: '#18171f',
  primaryLighten: '#41356b',
  secondary: '#fff',
};

export const padding = {
  small: 10,
  medium: 15,
  large: 20,
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    
    &:after,&:before {
      box-sizing: border-box;
    }
  }
  
  html {
    font-size: 14px;
    font-family: Source Sans Pro, sans-serif;  
  }
`;
