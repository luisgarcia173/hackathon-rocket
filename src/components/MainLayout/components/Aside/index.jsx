import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard, MdGroup, MdClose } from 'react-icons/md';
import { FaTrophy } from 'react-icons/fa';
import { Wrapper, List, Logo, Spacer } from './styles';
import logo from './logo.png';

function Aside() {
  return (
    <Wrapper>
      <Logo src={logo} alt="Logo do sistema" />
      <List>
        <Link to="/dashboard"><MdDashboard /> Início</Link>
        <Link to="/conquistas"><FaTrophy /> Conquistas</Link>
        <Link to="/vagas"><MdGroup /> Vagas</Link>
      </List>
      <Spacer />
      <List>
        <a href="#"><MdClose /> Sair</a>
      </List>
    </Wrapper>
  )
}

export default Aside;
