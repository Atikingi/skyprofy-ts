import React, { useContext, useEffect, useRef, useState } from 'react';
import * as S from './style';
import { ThemeContext } from '../../context/themeContext';
import { useDispatch, useSelector } from 'react-redux';
import { play } from '../../../store/slices/playerSlice';

interface Props {
  track: HTMLAudioElement;
}

const playerBarProgress = ({ track }: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);
  console.log('re-render progress bar');

  const isPlaying = useSelector((state: any) => state.player.isPlaying);

  const [trackProgress, setTrackProgress] = useState<number>(0);

  const progressBarInterval = useRef<number | null>(null);
  const { duration } = track;
  const progressByPercent = (trackProgress / duration) * 100;

  const dispatch = useDispatch();

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

  const onThumbChange = (value: string) => {
    clearProgressBarInterval();

    track.currentTime = Number(value);
    setTrackProgress(Number(value));
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
      onChange={(e) => onThumbChange((e.target as HTMLInputElement).value)}
    />
  );
};

export default playerBarProgress;
