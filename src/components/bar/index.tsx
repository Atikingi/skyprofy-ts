import React, { useContext } from 'react';
import Player from './player';
import * as S from './style';
import { ThemeContext } from '../context/themeContext';
import { useSelector } from 'react-redux';

const Bar = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const isShow = useSelector((state: any) => state.player.showPlayer);

  return (
      <S.Bar isDarkTheme={isDarkTheme} isPlaying={isShow}>
        <Player/>
      </S.Bar>
  );
};

export default Bar;
