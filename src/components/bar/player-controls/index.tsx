import React, { useContext } from 'react';
import * as S from './style';
import { ThemeContext } from '../../context/themeContext';
import PrevIcon from '../../icons/prevIcon';
import PauseIcon from '../../icons/iconPause';
import PlayIcon from '../../icons/playIcon';
import NextIcon from '../../icons/nextIcon';
import RepeatIcon from '../../icons/repeatIcon';
import ShuffleIcon from '../../icons/shuffleIcon';

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
          <PrevIcon aria-label="prev"/>
        </S.PrevIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton onClick={() => onTogglePlay()}>
        {isPlaying
          ? <S.PlayIconWrapper isDarkTheme={isDarkTheme}>
            <PauseIcon aria-label="pause"/>
          </S.PlayIconWrapper>
          : <S.PlayIconWrapper isDarkTheme={isDarkTheme}>
              <PlayIcon aria-label="play"/>
            </S.PlayIconWrapper>
        }
      </S.PlayerButton>
      <S.PlayerButton>
        <S.NextIconWrapper isDarkTheme={isDarkTheme}>
          <NextIcon aria-label="next"/>
        </S.NextIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton>
        <S.RepeatIconWrapper isDarkTheme={isDarkTheme}>
          <RepeatIcon aria-label="repeat"/>
        </S.RepeatIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton>
        <S.ShuffleIconWrapper isDarkTheme={isDarkTheme}>
          <ShuffleIcon aria-label='shuffle'/>
        </S.ShuffleIconWrapper>
      </S.PlayerButton>
    </S.PlayerControls>
  );
};

export default PlayerControls;
