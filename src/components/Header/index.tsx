import React from 'react';
import Link from 'next/link';

import { Container } from './styles';
import Burger from './Burger';

const Header: React.FC = () => {
  return (
    <Container>
      <nav className="navbar">
        <div className="logoImage">
          <Link href="/">
            <a>
              <img src="./logotipo.svg" alt="Logotipo DevTrails" />
            </a>
          </Link>
        </div>
        <Burger />
      </nav>
    </Container>
  );
};

export default Header;
