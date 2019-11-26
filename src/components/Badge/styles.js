import styled, { css } from 'styled-components';
import { darken, lighten, readableColor } from 'polished';

// Config
import { colors, padding, fonts } from "config";

export const Wrapper = styled.div`
  display: flex;
  padding: ${padding.small}px;
`;

export const Container = styled.label`
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 50px;
  font-size: ${p => fonts[p.fontSize]}px;
  border: 1px solid ${p => colors[p.color]};
  background-color: ${p => colors[p.color]};
  padding: ${p => padding[p.padding] / 2}px ${p => padding[p.padding]}px;
  color: ${p => readableColor(colors[p.color], colors.primary, colors.secondary)};
  
  ${p => p.onClick && css`
    cursor: pointer;
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
  `}
`;
