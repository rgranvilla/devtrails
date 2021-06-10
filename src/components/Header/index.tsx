import React from 'react';
import Link from 'next/link';

import { Container, HeaderContainer } from './styles';
import Burger from './Burger';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <nav className="navBar">
          <div className="logoImage">
            <Link href="/">
              <a>
                <img src="./logotipo.svg" alt="Logotipo DevTrails" />
              </a>
            </Link>
          </div>
          <Burger />
        </nav>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
