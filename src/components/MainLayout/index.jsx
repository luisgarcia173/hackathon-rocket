import React from 'react';
import { Wrapper } from './styles';

function MainLayout({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default MainLayout;