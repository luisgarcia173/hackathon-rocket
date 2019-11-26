import styled from 'styled-components';
import { darken, lighten, readableColor } from 'polished';

// Config
import { colors, padding } from "config";

export const Wrapper = styled.button`
  outline: none;
  cursor: pointer;
  border: 1px solid ${p => colors[p.color]};
  background-color: ${p => colors[p.color]};
  padding: ${p => padding[p.padding] / 2}px ${p => padding[p.padding]}px;
  color: ${p => readableColor(colors[p.color], colors.primary, colors.secondary)};
  
  transition: transform .18s, background-color .18s, border .18s;
  will-change: transform, background-color, border;
  
  :hover {
    border: 1px solid ${p => lighten(0.05, colors[p.color])};
    background-color: ${p => lighten(0.05, colors[p.color])};  
    transform: scale(1.01);
  }
  
  :active {
    border: 1px solid ${p => darken(0.05, colors[p.color])};
    background-color: ${p => darken(0.05, colors[p.color])};  
    transform: scale(0.99);
  }
`;
