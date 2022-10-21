import React, { useEffect } from 'react';
import * as S from '../../playlist/style';
import { PlaylistProps } from '../../../../../types';
import TrackSkeleton from '../../../../UI/skeletons/track-skeleton';
import PlaylistItem from '../../playlist/playlist-item';
import { useDispatch, useSelector } from 'react-redux';
import { clearTracksId, getTracksId } from '../../../../../store/slices/playerSlice';
import { useGetPlaylistByIdQuery } from '../../../../../services/music';
import { getPlaylistName } from '../../../../../store/slices/playlistsSlice';
import { useParams } from 'react-router-dom';
import { checkFavoriteTrack } from '../../../../../utils/check-favorite-track';

interface Props {
  playlist: PlaylistProps[];
}

const CustomPlaylist = () => {
  const countOfSkeletons: number[] = [];
  for (let i = 0; i < 12; i++) {
    countOfSkeletons.push(i);
  }

  const formatDuration = (durationInSeconds: number) => {
    const minutes = (durationInSeconds / 60).toFixed(0);
    const seconds = +(durationInSeconds / 60).toFixed(2).slice(-2) * 60;

    return `${minutes}:${seconds}`;
  };

  let tracks: any;

  const dispatch = useDispatch();

  const trackTitle = useSelector((state: any) => state.search.searchValue);

  const params = useParams();
  const playlistId = params.id;

  const { data, isLoading, isSuccess, isError, error } = useGetPlaylistByIdQuery(playlistId);

  useEffect(() => {
    dispatch(clearTracksId());
    tracks?.map((track: any) => dispatch(getTracksId(track.props.id)));
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(getPlaylistName(data.name));
    }
  }, [playlistId, data]);

  if (isError) {
    return (
      <S.PlaylistContent>
        <p>{error}</p>
      </S.PlaylistContent>
    );
  }

  if (isLoading) {
    return (
      <S.PlaylistContent>
        {countOfSkeletons.map((arr, i) => <TrackSkeleton key={i} />)}
      </S.PlaylistContent>
    );
  }

  if (isSuccess) {
    tracks = data.items.filter(({ name }: any) => (name).toLowerCase().includes(trackTitle)).map(({
      id,
      name,
      author,
      album,
      track_file,
      duration_in_seconds,
      stared_user
    }: any) => (
        <PlaylistItem
          key={id}
          id={id}
          trackTitleLink={track_file}
          trackTitleText={name}
          trackAuthorLink={track_file}
          trackAuthorText={author}
          trackAlbumLink={track_file}
          trackAlbumText={album}
          trackTime={formatDuration(duration_in_seconds)}
          isFavorite={checkFavoriteTrack(stared_user)}
        />
    ));
    return (
        <S.PlaylistContent>
          {tracks}
        </S.PlaylistContent>
    );
  }
  return (
    <S.PlaylistContent>
      <></>
    </S.PlaylistContent>
  );
};

export default CustomPlaylist;
