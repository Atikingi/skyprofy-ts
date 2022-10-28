import React, { ChangeEvent, useContext, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../store/hooks';
import { ThemeContext } from '../../context/themeContext';
import * as S from './style';
import { play } from '../../../store/slices/playerSlice';

interface Props {
  track: HTMLAudioElement;
}

const playerBarProgress = ({ track }: Props) => {
  const dispatch = useDispatch();

  const { isDarkTheme } = useContext(ThemeContext);

  const isPlaying = useAppSelector(state => state.player.isPlaying);

  const [trackProgress, setTrackProgress] = useState<number>(0);

  const progressBarInterval = useRef<number | null>(null);
  const { duration } = track;
  const progressByPercent = (trackProgress / duration) * 100;

  const startProgressTimer = (): void => {
    clearProgressBarInterval();

    progressBarInterval.current = window.setInterval(() => {
      setTrackProgress(track.currentTime);

      if (track.ended) {
        dispatch(play(false));
      }
    }, 1000);
  };

  const clearProgressBarInterval = () => {
    if (typeof progressBarInterval.current === 'number') {
      clearInterval(progressBarInterval.current);
    }
  };

  const onThumbChange = (e: ChangeEvent) => {
    clearProgressBarInterval();

    track.currentTime = Number((e.target as HTMLInputElement).value);
    setTrackProgress(Number((e.target as HTMLInputElement).value));
    startProgressTimer();
  };

  if (isPlaying) {
    startProgressTimer();
  }

  return (
    <S.BarPlayerProgress
      isDarkTheme={isDarkTheme}
      type="range"
      step="1"
      min="0"
      max={isNaN(duration) ? '100' : `${duration}`}
      value={trackProgress}
      gradientValue={isNaN(progressByPercent) ? '0' : `${progressByPercent}`}
      onChange={onThumbChange}
    />
  );
};

export default playerBarProgress;
