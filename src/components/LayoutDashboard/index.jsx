import React from 'react';
import { GlobalStyle, Wrapper } from './styles';

function LayoutDashboard({ children }) {
  return (
    <Wrapper>
      <GlobalStyle />
      {children}
    </Wrapper>
  )
}

export default LayoutDashboard;