import React from 'react';

// Styles
import {
  Wrapper,
  Container
} from "./styles";

export default function Badge({
  color = 'primaryLighten',
  padding = 'medium',
  fontSize = 'small',
  onClick,
  children,
  ...props
}) {
  return (
    <Wrapper>
      <Container
        color={color}
        padding={padding}
        fontSize={fontSize}
        onClick={onClick}
        {...props}
      >
        {children}
      </Container>
    </Wrapper>
  )
};
