import styled from 'styled-components';
import { colors } from "config";

export const Wrapper = styled.aside`
  width: 291px;
  left: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  background-color: ${colors.primary};
`;

export const Logo = styled.img`
  width: 90px;
  margin: 25px 15px 15px;
`

export const List = styled.nav`
  display: block;
  
  svg {
    vertical-align: middle;
    margin-right: .5em;
  }
  
  a {
    display: block;
    color: #fff;
    font-size: 16px;
    padding: 15px;
    text-decoration: none;
    transition: background-color 200ms ease-in-out;
    will-change: background-color;
    
    :hover {
      background-color: rgba(0,0,0,.1);
    }
  }
`