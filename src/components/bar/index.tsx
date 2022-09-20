import React, { useContext } from 'react';
import Player from './player';
import * as S from './style';
import { ThemeContext } from '../context/themeContext';

const Bar = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
      <S.Bar isDarkTheme={isDarkTheme}>
        <Player/>
      </S.Bar>
  );
};

export default Bar;
