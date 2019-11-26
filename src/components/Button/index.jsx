import React from 'react';

// Styles
import {
  Wrapper
} from "./styles";

export default function Button({
  color = 'primaryLighten',
  padding = 'medium',
  children,
  ...props
}) {
  return (
    <Wrapper
      color={color}
      padding={padding}
      {...props}
    >
      {children}
    </Wrapper>
  )
};
