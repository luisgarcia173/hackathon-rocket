import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, List, Logo } from './styles';
import logo from './logo.png';

function Aside() {
  return (
    <Wrapper>
      <Logo src={logo} alt="Logo do sistema" />
      <List>
        <Link to="/dashboard">Início</Link>
        <Link to="/conquistas">Conquistas</Link>
        <Link to="/vagas">Vagas</Link>
      </List>
    </Wrapper>
  )
}

export default Aside;
