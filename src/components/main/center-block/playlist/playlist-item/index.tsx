import React from 'react';
import TrackTitle from './track-title';
import TrackAuthor from './track-author';
import TrackAlbum from './track-album';
import TrackTime from './track-time';
import { useDispatch } from 'react-redux';
import { getTrackId, play } from '../../../../../store/slices/playerSlice';
import { PlaylistItemProps } from '../../../../../types';
import * as S from './style';

const PlaylistItem = ({
  id,
  trackTitleLink,
  trackTitleText,
  trackAuthorLink,
  trackAuthorText,
  trackAlbumLink,
  trackAlbumText,
  trackTime,
  isFavorite
}: PlaylistItemProps) => {
  const dispatch = useDispatch();

  const playTrackHandler = (
    e: MouseEvent | React.MouseEvent<HTMLDivElement>
  ) => {
    e.preventDefault();

    dispatch(getTrackId(+(e.target as HTMLDivElement).id));
    dispatch(play(true));
  };

  return (
    <S.PlaylistItem onClick={(e) => playTrackHandler(e)}>
      <S.Track onClick={(e) => playTrackHandler(e)}>
        <TrackTitle
          onClick={(e: MouseEvent) => playTrackHandler(e)}
          id={id}
          trackTitleLink={trackTitleLink}
          trackTitleText={trackTitleText}
        />
        <TrackAuthor
          onClick={(e) => playTrackHandler(e)}
          id={id}
          trackAuthorLink={trackAuthorLink}
          trackAuthorText={trackAuthorText}
        />
        <TrackAlbum
          onClick={(e) => playTrackHandler(e)}
          id={id}
          trackAlbumLink={trackAlbumLink}
          trackAlbumText={trackAlbumText}
        />
        <TrackTime trackTime={trackTime} isFavorite={isFavorite} />
      </S.Track>
    </S.PlaylistItem>
  );
};

export default PlaylistItem;
