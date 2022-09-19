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

  const changeIconColor = () => {
    return isDarkTheme ? 'dark' : 'light';
  };

  return (
    <S.PlayerControls>
      <S.PlayerButton>
        <S.PrevIconWrapper>
          <SvgImage href={`/skyprofy-ts/img/icon/sprite.svg#icon-prev-${changeIconColor()}`} ariaLabel="prev" />
        </S.PrevIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton onClick={() => onTogglePlay()}>
        {isPlaying
          ? <S.PlayIconWrapper>
            <SvgImage href={`/skyprofy-ts/img/icon/sprite.svg#icon-pause-${changeIconColor()}`} ariaLabel="pause"/>
          </S.PlayIconWrapper>
          : <S.PlayIconWrapper>
              <SvgImage href={`/skyprofy-ts/img/icon/sprite.svg#icon-play-${changeIconColor()}`} ariaLabel="play"/>
            </S.PlayIconWrapper>
        }
      </S.PlayerButton>
      <S.PlayerButton>
        <S.NextIconWrapper>
          <SvgImage href={`/skyprofy-ts/img/icon/sprite.svg#icon-next-${changeIconColor()}`} ariaLabel="next" />
        </S.NextIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton>
        <S.RepeatIconWrapper>
          <SvgImage href={`/skyprofy-ts/img/icon/sprite.svg#icon-repeat-${changeIconColor()}`} ariaLabel="repeat" />
        </S.RepeatIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton>
        <S.ShuffleIconWrapper>
          <SvgImage href={`/skyprofy-ts/img/icon/sprite.svg#icon-shuffle-${changeIconColor()}`} ariaLabel="shuffle" />
        </S.ShuffleIconWrapper>
      </S.PlayerButton>
    </S.PlayerControls>
  );
};

export default PlayerControls;
