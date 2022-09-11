import React from 'react';
import Player from './player/player';
import PlayerVolume from './player-volume/player-volume';
import * as S from './bar.style';

const Bar = () => {
  return (
      <S.Bar>
        <S.BarContent>
            <S.BarPlayerProgress></S.BarPlayerProgress>
            <S.BarPlayerBlock>
                <Player/>
                <PlayerVolume/>
            </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
  );
};

export default Bar;
