import React from 'react';
import Link from 'next/link';

import { Container, Logo, Menu } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <nav className="navbar">
        <Logo>
          <Link href="/">
            <img src="./logotipo.svg" alt="Logotipo DevTrails" />
          </Link>
        </Logo>
        <Menu>
          <Link href="#about">
            <a>Sobre</a>
          </Link>
          <Link href="#highlights">
            <a>Destaques</a>
          </Link>
          <Link href="#works">
            <a>Projetos</a>
          </Link>
          <Link href="#blog">
            <a>Blog</a>
          </Link>
          <Link href="#contact">
            <a>Contato</a>
          </Link>
        </Menu>
      </nav>
    </Container>
  );
};

export default Header;
