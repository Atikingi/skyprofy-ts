import React, { useContext } from 'react';
import { ShowHideMenu } from '../../../../types';
import * as S from './style';
import { ThemeContext } from '../../../context/themeContext';

const BurgerLines = ({ menuActive }: ShowHideMenu) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
        <S.BurgerLine isDarkTheme={isDarkTheme} active={menuActive}></S.BurgerLine>
  );
};

export default BurgerLines;
