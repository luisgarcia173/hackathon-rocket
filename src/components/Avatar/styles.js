import styled, { css } from 'styled-components';

function handleSize({ size }) {
  if (!size) {
    return css`
      width: 100%;
      padding-bottom: 100%;
    `;

  }

  return css`
    width: ${size}px;
    height: ${size}px;
  `
}

export const Wrapper = styled.div`
  position: relative;
  ${handleSize};
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${p => p.type === 'rounded' && css`
      border-radius: 100%;
    `}
  }
`;
