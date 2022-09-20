import React, { useContext } from 'react';
import SvgImage from '../../svg';
import * as S from './style';
import { ThemeContext } from '../../context/themeContext';

interface Props {
  isPlaying: boolean,
  onTogglePlay: () => void
}

const PlayerControls = ({ isPlaying, onTogglePlay }: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <S.PlayerControls>
      <S.PlayerButton>
        <S.PrevIconWrapper isDarkTheme={isDarkTheme}>
          <SvgImage href='/skyprofy-ts/img/icon/sprite.svg#icon-prev' ariaLabel="prev" />
        </S.PrevIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton onClick={() => onTogglePlay()}>
        {isPlaying
          ? <S.PlayIconWrapper isDarkTheme={isDarkTheme}>
            <SvgImage href='/skyprofy-ts/img/icon/sprite.svg#icon-pause' ariaLabel="pause"/>
          </S.PlayIconWrapper>
          : <S.PlayIconWrapper isDarkTheme={isDarkTheme}>
              <SvgImage href='/skyprofy-ts/img/icon/sprite.svg#icon-play' ariaLabel="play"/>
            </S.PlayIconWrapper>
        }
      </S.PlayerButton>
      <S.PlayerButton>
        <S.NextIconWrapper isDarkTheme={isDarkTheme}>
          <SvgImage href='/skyprofy-ts/img/icon/sprite.svg#icon-next' ariaLabel="next" />
        </S.NextIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton>
        <S.RepeatIconWrapper isDarkTheme={isDarkTheme}>
          <SvgImage href='/skyprofy-ts/img/icon/sprite.svg#icon-repeat' ariaLabel="repeat" />
        </S.RepeatIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton>
        <S.ShuffleIconWrapper isDarkTheme={isDarkTheme}>
          <SvgImage href='/skyprofy-ts/img/icon/sprite.svg#icon-shuffle' ariaLabel="shuffle" />
        </S.ShuffleIconWrapper>
      </S.PlayerButton>
    </S.PlayerControls>
  );
};

export default PlayerControls;
