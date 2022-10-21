import React, { useEffect, useState } from 'react';
import * as S from '../../playlist/style';
import { PlaylistProps } from '../../../../../types';
import TrackSkeleton from '../../../../UI/skeletons/track-skeleton';
import PlaylistItem from '../../playlist/playlist-item';
import { useDispatch, useSelector } from 'react-redux';
import { clearTracksId, getTracksId } from '../../../../../store/slices/playerSlice';
import {
  useGetAllTracksQuery
} from '../../../../../services/music';
import { checkFavoriteTrack } from '../../../../../utils/check-favorite-track';
import getCookie from '../../../../../utils/get-cookie';

interface Props {
  playlist: PlaylistProps[];
}

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

  const username = getCookie('username');

  let tracks: any;

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const { data, isError, error, isLoading, isSuccess } =
    useGetAllTracksQuery(page);
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
        {countOfSkeletons.map((arr, i) => (
          <TrackSkeleton key={i} />
        ))}
      </S.PlaylistContent>
    );
  }

  if (isSuccess) {
    console.log(data.results);
    if (data.next === null) {
      tracks = content
        .concat(data.results)
        .filter(({ name }) =>
          (name as string).toLowerCase().includes(trackTitle)
        ).filter(({ stared_user }: any) => checkFavoriteTrack(stared_user))
        .map(
          ({
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
          )
        );
      return <S.PlaylistContent>{tracks}</S.PlaylistContent>;
    }

    setPage(page + 1);
    setContent(content.concat(data.results));
  }
  return (
    <S.PlaylistContent>
      <></>
    </S.PlaylistContent>
  );
};

export default FavoritePlaylist;
