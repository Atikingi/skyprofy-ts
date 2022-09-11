import React from 'react';
import SvgImage from '../../svg/svg-image';
import * as S from './player-controls.style';

const PlayerControls = () => {
  return (
    <S.PlayerControls>
      <S.PlayerButton>
        <S.PrevIconWrapper>
          <SvgImage href="img/icon/sprite.svg#icon-prev" ariaLabel="prev" />
        </S.PrevIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton>
        <S.PlayIconWrapper>
          <SvgImage href="img/icon/sprite.svg#icon-play" ariaLabel="play" />
        </S.PlayIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton>
        <S.NextIconWrapper>
          <SvgImage href="img/icon/sprite.svg#icon-next" ariaLabel="next" />
        </S.NextIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton>
        <S.RepeatIconWrapper>
          <SvgImage href="img/icon/sprite.svg#icon-repeat" ariaLabel="repeat" />
        </S.RepeatIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton>
        <S.ShuffleIconWrapper>
          <SvgImage href="img/icon/sprite.svg#icon-shuffle" ariaLabel="shuffle" />
        </S.ShuffleIconWrapper>
      </S.PlayerButton>
    </S.PlayerControls>
  );
};

export default PlayerControls;
