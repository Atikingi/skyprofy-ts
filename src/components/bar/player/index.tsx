import React, { useEffect, useRef, useState } from 'react';
import PlayerControls from '../player-controls';
import PlayerTrack from '../player-track';
import * as S from './style';
import PlayerVolume from '../player-volume';

const Player = () => {
  const [isLoading, setStatus] = useState<boolean>(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setStatus(false);
    }, 0);
    return () => {
      clearTimeout(loadTimer);
    };
  });

  // Player control

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [trackProgress, setTrackProgress] = useState<number>(0);
  const [isVolumeOn, setIsVolumeOn] = useState<boolean>(true);

  const audioRef = useRef(new Audio('/skyprofy-ts/music/never-gonna.mp3'));
  const progressBarInterval = useRef<number | null>(null);

  const { duration } = audioRef.current;
  const progressByPercent = (trackProgress / duration) * 100;

  const onTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const startProgressTimer = (): void => {
    clearProgressBarInterval();

    progressBarInterval.current = window.setInterval(() => {
      setTrackProgress(audioRef.current.currentTime);

      if (audioRef.current.ended) {
        setIsPlaying(false);
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

    audioRef.current.currentTime = Number(value);
    setTrackProgress(Number(value));
    startProgressTimer();
  };

  const onVolumeChange = (e: React.ChangeEvent) => {
    audioRef.current.volume = Number((e.target as HTMLInputElement).value);
    setIsVolumeOn(true);
  };

  const onVolumeToggle = () => {
    setIsVolumeOn(!isVolumeOn);
    isVolumeOn
      ? (audioRef.current.volume = 0)
      : (audioRef.current.volume = 0.5);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
        .catch((e) => {
          console.log(e);
        });

      startProgressTimer();
    } else {
      audioRef.current.pause();
      clearProgressBarInterval();
    }
  }, [isPlaying]);

  return (
    <S.BarContent>
      <S.BarPlayerProgress
        type="range"
        step="1"
        min="0"
        max={isNaN(duration) ? '100' : `${duration}`}
        value={trackProgress}
        gradientValue={isNaN(progressByPercent) ? '0' : `${progressByPercent}`}
        onChange={(e) => onThumbChange((e.target as HTMLInputElement).value)}
      />
      <S.BarPlayerBlock>
        <S.BarPlayer>
          <PlayerControls
            isPlaying={isPlaying}
            onTogglePlay={() => onTogglePlay()}
          />
          <PlayerTrack
            isLoading={isLoading}
            trackLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            trackName="Never gonna give you up"
            authorLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            authorName="Rick Astley"
          />
        </S.BarPlayer>
        <PlayerVolume
          value={audioRef.current.volume}
          onVolumeChange={onVolumeChange}
          onVolumeToggle={() => onVolumeToggle()}
          onVolumeOn={isVolumeOn}
        />
      </S.BarPlayerBlock>
    </S.BarContent>
  );
};

export default Player;
