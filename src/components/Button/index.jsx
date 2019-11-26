import React from 'react';

// Styles
import {
  Wrapper
} from "./styles";

export default function Button({
  color = 'primary',
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
