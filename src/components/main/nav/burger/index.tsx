import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/themeContext';
import * as S from './style';
import { ShowHideMenu } from '../../../../types';

const BurgerLines = ({ menuActive }: ShowHideMenu) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <S.BurgerLine isDarkTheme={isDarkTheme} active={menuActive}></S.BurgerLine>
  );
};

export default BurgerLines;
