import React from 'react';

import { Container, Logo, Menu } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <nav className="navbar">
        <Logo>
          <a href="">
            <img src="./logotipo.svg" alt="Logotipo DevTrails" />
          </a>
        </Logo>
        <Menu>
          <a href="">Sobre</a>
          <a href="">Projetos</a>
          <a href="">Blog</a>
          <a href="">Contato</a>
        </Menu>
      </nav>
    </Container>
  );
};

export default Header;
