import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetTrackByIdQuery } from '../../../services/music';
import { ThemeContext } from '../../context/themeContext';
import { useAppSelector } from '../../../store/hooks';
import * as S from './style';
import PlayerControls from '../player-controls';
import PlayerTrack from '../player-track';
import PlayerVolume from '../player-volume';
import PlayerBarProgress from '../player-bar-progress';
import { getCurrentTrack } from '../../../store/slices/playerSlice';

const Player = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const currentTrackLink = useAppSelector(
    (state) => state.player.currentTrackLink
  );
  const isPlaying = useAppSelector((state) => state.player.isPlaying);
  const trackId = useAppSelector((state) => state.player.id);
  const isShow = useAppSelector((state) => state.player.showPlayer);

  const { data } = useGetTrackByIdQuery(trackId);

  const [track, setTrack] = useState(new Audio(currentTrackLink));

  if (isPlaying) {
    track.autoplay = true;
  }

  useEffect(() => {
    dispatch(getCurrentTrack(data?.track_file));
  }, [data]);

  useEffect(() => {
    track.pause();
    track.remove();

    setTrack(new Audio(currentTrackLink));
  }, [currentTrackLink]);

  return (
    <S.BarContent isDarkTheme={isDarkTheme} isPlaying={isShow}>
      <PlayerBarProgress track={track} />
      <S.BarPlayerBlock>
        <S.BarPlayer>
          <PlayerControls track={track} />
          <PlayerTrack />
        </S.BarPlayer>
        <PlayerVolume track={track} />
      </S.BarPlayerBlock>
    </S.BarContent>
  );
};

export default Player;
