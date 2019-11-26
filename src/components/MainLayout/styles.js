import styled from 'styled-components'
import { colors, padding } from "../../config";

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  position: fixed;
  left: 240px;
  top: 0;
  bottom: 0;
  right: 0;
  padding: ${padding.large}px;
  background-color: ${colors.primaryDarken};
`;

