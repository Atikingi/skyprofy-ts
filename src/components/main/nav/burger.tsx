import React from 'react';
import { ShowHideMenu } from '../../../types';

const BurgerLines = ({ menuActive }: ShowHideMenu) => {
  return (
        <span className={menuActive ? 'burger__line_active' : 'burger__line'}></span>
  );
};

export default BurgerLines;
