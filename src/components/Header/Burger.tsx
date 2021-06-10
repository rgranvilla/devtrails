import React from 'react';
import RightNav from './RightNav';
import { StyledBurger } from './styles';

import { useBurger } from '../../contexts/BurgerContext';

const Burger: React.FC = () => {
  const { isOpen, handleSwitch } = useBurger();

  return (
    <>
      <StyledBurger open={isOpen} onClick={handleSwitch}>
        <div className="burgerContainer">
          <div />
          <div />
          <div />
        </div>
      </StyledBurger>
      <div className="menuContent">
        <RightNav />
      </div>
    </>
  );
};

export default Burger;
