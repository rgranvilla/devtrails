import React from 'react';
import Link from 'next/link';
import { NavMenu } from './styles';

import { useBurger } from '../../contexts/BurgerContext';

export function RightNav(): JSX.Element {
  const { isOpen, handleSwitch } = useBurger();
  return (
    <NavMenu open={isOpen}>
      <Link href="#about">
        <a onClick={handleSwitch}>Sobre</a>
      </Link>
      <Link href="#highlights">
        <a onClick={handleSwitch}>Destaques</a>
      </Link>
      {/* <Link href="#works">
        <a onClick={handleSwitch}>Projetos</a>
      </Link>
      <Link href="#blog">
        <a onClick={handleSwitch}>Blog</a>
      </Link> */}
      <Link href="#contact">
        <a onClick={handleSwitch}>Contato</a>
      </Link>
    </NavMenu>
  );
}

export default RightNav;
