import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, List } from './styles';

function Aside() {
  return (
    <Wrapper>
      <List>
        <Link to="/dashboard">Início</Link>
        <Link to="/conquistas">Conquistas</Link>
        <Link to="/vagas">Vagas</Link>
      </List>
    </Wrapper>
  )
}

export default Aside;
