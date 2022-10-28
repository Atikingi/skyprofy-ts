import PrevIcon from '../../icons/prevIcon';
import PauseIcon from '../../icons/iconPause';
import PlayIcon from '../../icons/playIcon';
import NextIcon from '../../icons/nextIcon';
import RepeatIcon from '../../icons/repeatIcon';
import ShuffleIcon from '../../icons/shuffleIcon';
import * as S from './style';
import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from '../../context/themeContext';
import {
  getTrackId,
  play,
  playNextTrack,
  playPrevTrack,
  repeatTrack,
  shuffleTracks,
  sortTracks
} from '../../../store/slices/playerSlice';
import { useAppSelector } from '../../../store/hooks';

interface Props {
  track: HTMLAudioElement;
}

const PlayerControls = ({ track }: Props) => {
  const dispatch = useDispatch();

  const { isDarkTheme } = useContext(ThemeContext);

  const isPlaying = useAppSelector((state) => state.player.isPlaying);
  const trackIds = useAppSelector((state) => state.player.ids);
  const trackId = useAppSelector((state) => state.player.id);
  const isShuffle = useAppSelector((state) => state.player.isShuffle);
  const isRepeat = useAppSelector((state) => state.player.isRepeat);

  const onTogglePlay = () => {
    dispatch(play(!isPlaying));
  };

  const onNextTrack = () => {
    const currentTrack = +trackIds.indexOf(trackId);
    if (currentTrack + 1 === trackIds.length) {
      dispatch(getTrackId(trackIds[0]));
      return;
    }
    dispatch(playNextTrack(currentTrack));
  };

  const onPrevTrack = () => {
    const currentTrack = +trackIds.indexOf(trackId);
    if (!currentTrack) {
      dispatch(getTrackId(trackIds[0]));
      return;
    }
    dispatch(playPrevTrack(currentTrack));
  };

  const onShuffle = () => {
    isShuffle ? dispatch(sortTracks()) : dispatch(shuffleTracks());
  };

  const onRepeat = () => {
    track.loop = true;
    dispatch(repeatTrack());
  };

  useEffect(() => {
    if (isPlaying) {
      track.play().catch((e) => {
        console.log(e);
      });
    } else {
      track.pause();
    }
  }, [isPlaying]);

  return (
    <S.PlayerControls>
      <S.PlayerButton onClick={onPrevTrack}>
        <S.PrevIconWrapper isDarkTheme={isDarkTheme}>
          <PrevIcon aria-label="prev" />
        </S.PrevIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton onClick={onTogglePlay}>
        {isPlaying
          ? (
          <S.PlayIconWrapper isDarkTheme={isDarkTheme}>
            <PauseIcon aria-label="pause" />
          </S.PlayIconWrapper>
            )
          : (
          <S.PlayIconWrapper isDarkTheme={isDarkTheme}>
            <PlayIcon aria-label="play" />
          </S.PlayIconWrapper>
            )}
      </S.PlayerButton>
      <S.PlayerButton onClick={onNextTrack}>
        <S.NextIconWrapper isDarkTheme={isDarkTheme}>
          <NextIcon aria-label="next" />
        </S.NextIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton onClick={onRepeat}>
        <S.RepeatIconWrapper isDarkTheme={isDarkTheme} isRepeat={isRepeat}>
          <RepeatIcon aria-label="repeat" />
        </S.RepeatIconWrapper>
      </S.PlayerButton>
      <S.PlayerButton onClick={onShuffle}>
        <S.ShuffleIconWrapper isDarkTheme={isDarkTheme} isShuffle={isShuffle}>
          <ShuffleIcon aria-label="shuffle" />
        </S.ShuffleIconWrapper>
      </S.PlayerButton>
    </S.PlayerControls>
  );
};

export default PlayerControls;
