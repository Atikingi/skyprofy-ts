import React from 'react';
import { ShowHideMenu } from '../../../../types';
import * as S from './burger.style';

const BurgerLines = ({ menuActive }: ShowHideMenu) => {
  return (
        <S.BurgerLine active={menuActive}></S.BurgerLine>
  );
};

export default BurgerLines;
