import React from 'react';
import SvgImage from '../../svg';
import * as S from './style';

interface Props {
  isPlaying: boolean,
  onTogglePlay: () => void
}

const PlayerControls = ({ isPlaying, onTogglePlay }: Props) => {
  return (
    <S.PlayerControls>
      <S.PlayerButton>
        <S.PrevIconWrapper>
          <SvgImage href="/skyprofy-ts/img/icon/sprite.svg#icon-prev" ariaLabel="prev" />
        </S.PrevIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton onClick={() => onTogglePlay()}>
        {isPlaying
          ? <S.PlayIconWrapper>
            <SvgImage href="/skyprofy-ts/img/icon/sprite.svg#icon-pause" ariaLabel="pause"/>
          </S.PlayIconWrapper>
          : <S.PlayIconWrapper>
              <SvgImage href="/skyprofy-ts/img/icon/sprite.svg#icon-play" ariaLabel="play"/>
            </S.PlayIconWrapper>
        }
      </S.PlayerButton>
      <S.PlayerButton>
        <S.NextIconWrapper>
          <SvgImage href="/skyprofy-ts/img/icon/sprite.svg#icon-next" ariaLabel="next" />
        </S.NextIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton>
        <S.RepeatIconWrapper>
          <SvgImage href="/skyprofy-ts/img/icon/sprite.svg#icon-repeat" ariaLabel="repeat" />
        </S.RepeatIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton>
        <S.ShuffleIconWrapper>
          <SvgImage href="/skyprofy-ts/img/icon/sprite.svg#icon-shuffle" ariaLabel="shuffle" />
        </S.ShuffleIconWrapper>
      </S.PlayerButton>
    </S.PlayerControls>
  );
};

export default PlayerControls;
