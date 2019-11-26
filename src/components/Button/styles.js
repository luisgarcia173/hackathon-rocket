import styled from 'styled-components';

// Config
import { colors, padding } from "config";

export const Wrapper = styled.button`
  border: 1px solid ${p => colors[p.color]};
  background-color: ${p => colors[p.color]};
`;
