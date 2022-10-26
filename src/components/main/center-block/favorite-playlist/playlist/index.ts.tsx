import React, { useEffect } from 'react';
import * as S from '../../playlist/style';
import TrackSkeleton from '../../../../UI/skeletons/track-skeleton';
import PlaylistItem from '../../playlist/playlist-item';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../../store/hooks';
import { useGetFavoriteTracksQuery } from '../../../../../services/music';
import {
  clearTracksId,
  getTracksId
} from '../../../../../store/slices/playerSlice';
import { TrackProps } from '../../../../../types';

const FavoritePlaylist = () => {
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

  const { data, isLoading, isSuccess } =
    useGetFavoriteTracksQuery('');

  const trackTitle = useAppSelector((state) => state.search.searchValue);

  useEffect(() => {
    dispatch(clearTracksId());

    if (isSuccess) {
      data?.map((track: TrackProps) => dispatch(getTracksId(track.id)));
    }
  }, [data]);

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
        {data
          ?.filter(({ name }: TrackProps) =>
            name.toLowerCase().includes(trackTitle)
          )
          .map(
            ({
              id,
              name,
              author,
              album,
              track_file,
              duration_in_seconds
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
                isFavorite={true}
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

export default FavoritePlaylist;
