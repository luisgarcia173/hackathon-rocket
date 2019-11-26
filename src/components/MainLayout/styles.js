import styled from 'styled-components'
import { padding } from "../../config";

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  position: fixed;
  left: 300px;
  top: 0;
  bottom: 0;
  right: 0;
  padding: ${padding.large}px;
`;

