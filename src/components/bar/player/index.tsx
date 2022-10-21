import React, { useEffect, useState } from 'react';
import PlayerControls from '../player-controls';
import PlayerTrack from '../player-track';
import * as S from './style';
import PlayerVolume from '../player-volume';
import { useDispatch, useSelector } from 'react-redux';
import PlayerBarProgress from '../player-bar-progress';
import { useGetTrackByIdQuery } from '../../../services/music';
import { getCurrentTrack } from '../../../store/slices/playerSlice';

const Player = () => {
  const dispatch = useDispatch();

  const currentTrackLink = useSelector((state: any) => state.player.currentTrackLink);
  const isPlaying = useSelector((state: any) => state.player.isPlaying);
  const trackId = useSelector((state: any) => state.player.id);

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
    console.log(track);

    setTrack(new Audio(currentTrackLink));
    console.log('re-render new audio');
  }, [currentTrackLink]);

  console.log('re-render player component');

  return (
    <S.BarContent>
      <PlayerBarProgress track={track}/>
      <S.BarPlayerBlock>
        <S.BarPlayer>
          <PlayerControls
            track={track}
          />
          <PlayerTrack/>
        </S.BarPlayer>
        <PlayerVolume
          track={track}
        />
      </S.BarPlayerBlock>
    </S.BarContent>
  );
};

export default Player;
