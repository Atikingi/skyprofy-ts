import React, { FC } from 'react';

const BurgerLines: FC = () => {
  return (
        <span className="burger__line"></span>
  );
};

const Burger: FC = () => {
  return (
        <div className="nav__burger burger">
            <BurgerLines/>
            <BurgerLines/>
            <BurgerLines/>
        </div>
  );
};

export default Burger;
