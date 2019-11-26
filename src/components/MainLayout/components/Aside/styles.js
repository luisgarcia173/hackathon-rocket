import styled from 'styled-components';
import { colors } from "config";

export const Wrapper = styled.aside`
  width: 300px;
  left: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  background-color: ${colors.primary};
`;

export const List = styled.nav`
  display: block;
  
  a {
    display: block;
    color: #fff;
    font-size: 16px;
    padding: 15px;
    text-decoration: none;
    
    :hover {
      background-color: rgba(0,0,0,.1);
    }
  }
`