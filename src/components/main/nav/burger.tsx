import React, { ReactElement } from 'react';

function BurgerLines (): ReactElement<HTMLSpanElement> {
  return (
        <span className="burger__line"></span>
  );
}

function Burger (): ReactElement<HTMLDivElement> {
  return (
        <div className="nav__burger burger">
            <BurgerLines/>
            <BurgerLines/>
            <BurgerLines/>
        </div>
  );
}

export default Burger;
