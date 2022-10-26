import TrackSkeleton from '../../../UI/skeletons/track-skeleton';
import PlaylistItem from './playlist-item';
import React, { useEffect } from 'react';
import { useGetAllTracksQuery } from '../../../../services/music';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../store/hooks';
import {
  clearTracksId,
  getTracksId
} from '../../../../store/slices/playerSlice';
import { checkFavoriteTrack } from '../../../../utils/check-favorite-track';
import { filterByYear } from '../../../../utils/filter-by-year';
import { getAuthors, getGenres } from '../../../../store/slices/filterSlice';
import { TrackProps } from '../../../../types';
import * as S from './style';

const PlaylistContent = () => {
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

  const { data, isLoading, isSuccess } = useGetAllTracksQuery('');

  const trackTitle = useAppSelector((state) => state.search.searchValue);
  const filterValue = useAppSelector((state) => state.filter.filterYearValue);
  const genresValue = useAppSelector((state) => state.filter.filterGenresValue);
  const authorsValue = useAppSelector((state) => state.filter.filterAuthorsValue);

  useEffect(() => {
    dispatch(clearTracksId());

    if (isSuccess) {
      data?.map((track: TrackProps) => dispatch(getTracksId(track.id)));
      data?.map((track: TrackProps) => dispatch(getGenres(track.genre)));
      data?.map((track: TrackProps) => dispatch(getAuthors(track.author)));
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
          .filter(({ genre }: TrackProps) => {
            return genresValue.length ? genresValue.includes(genre) : genre;
          })
          .filter(({ author }: TrackProps) => {
            return authorsValue.length ? authorsValue.includes(author) : author;
          })
          .sort((a: TrackProps, b: TrackProps) =>
            filterByYear(a, b, filterValue)
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

export default PlaylistContent;
