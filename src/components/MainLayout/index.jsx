import React from 'react';
import Aside from './components/Aside';
import { Wrapper, Container } from './styles';

function MainLayout({ children }) {
  return (
    <Wrapper>
      <Aside />
      <Container>
        {children}
      </Container>
    </Wrapper>
  )
}

export default MainLayout;