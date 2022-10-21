import React, { useEffect, useState } from 'react';
import * as S from './style';
import { PlaylistProps } from '../../../../types';
import { useGetAllTracksQuery } from '../../../../services/music';
import TrackSkeleton from '../../../UI/skeletons/track-skeleton';
import PlaylistItem from './playlist-item';
import { useDispatch, useSelector } from 'react-redux';
import { clearTracksId, getTracksId, pageUp } from '../../../../store/slices/playerSlice';
import { checkFavoriteTrack } from '../../../../utils/check-favorite-track';

interface Props {
  playlist: PlaylistProps[];
}

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

  let tracks: any;

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  // const page = useSelector((state: any) => state.player.page);
  const [content, setContent] = useState([]);

  const { data, isError, error, isLoading, isSuccess } = useGetAllTracksQuery(page);
  const trackTitle = useSelector((state: any) => state.search.searchValue);

  useEffect(() => {
    dispatch(clearTracksId());
    tracks?.map((track: any) => dispatch(getTracksId(track.props.id)));
  }, [data]);

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
    if (data.next === null) {
      tracks = content.concat(data.results).filter(({ name }) => (name as string).toLowerCase().includes(trackTitle)).map(({
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

    // dispatch(pageUp());
    setPage(page + 1);
    setContent(content.concat(data.results));
  }
  return (
      <S.PlaylistContent>
        <></>
      </S.PlaylistContent>
  );
};

export default PlaylistContent;
