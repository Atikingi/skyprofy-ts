import TrackSkeleton from '../../../../UI/skeletons/track-skeleton';
import PlaylistItem from '../../playlist/playlist-item';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../../store/hooks';
import { useGetPlaylistByIdQuery } from '../../../../../services/music';
import { useParams } from 'react-router-dom';
import {
  clearTracksId,
  getTracksId
} from '../../../../../store/slices/playerSlice';
import { getPlaylistName } from '../../../../../store/slices/playlistsSlice';
import { checkFavoriteTrack } from '../../../../../utils/check-favorite-track';
import { TrackProps } from '../../../../../types';
import * as S from '../../playlist/style';

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

  const dispatch = useDispatch();
  const params = useParams();

  const trackTitle = useAppSelector((state) => state.search.searchValue);

  const playlistId = params.id;

  const { data, isLoading, isSuccess } =
    useGetPlaylistByIdQuery(playlistId);

  useEffect(() => {
    dispatch(clearTracksId());
    data?.items.map((track: TrackProps) => dispatch(getTracksId(track.id)));
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(getPlaylistName(data.name));
    }
  }, [playlistId, data]);

  if (isLoading) {
    return (
      <S.PlaylistContent>
        {countOfSkeletons.map((arr, i) => (
          <TrackSkeleton key={i} />
        ))}
      </S.PlaylistContent>
    );
  }

  if (isSuccess) {
    return (
      <S.PlaylistContent>
        {data?.items
          .filter(({ name }: TrackProps) =>
            name.toLowerCase().includes(trackTitle)
          )
          .map(
            ({
              id,
              name,
              author,
              album,
              track_file,
              duration_in_seconds,
              stared_user
            }: TrackProps) => (
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
            )
          )}
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
