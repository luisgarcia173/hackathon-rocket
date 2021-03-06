import React from 'react';

// Styles
import {
  Wrapper,
  Container
} from "./styles";

export default function Button({
  color = 'primaryLighten',
  padding = 'medium',
  children,
  ...props
}) {
  return (
    <Wrapper>
      <Container
        color={color}
        padding={padding}
        {...props}
      >
        {children}
      </Container>
    </Wrapper>
  )
};
