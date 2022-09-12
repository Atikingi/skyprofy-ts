import React from 'react';
import { PlaylistItemProps } from '../../../../../types';
import * as S from './style';
import TrackTitle from './track-title';
import TrackAuthor from './track-author';
import TrackAlbum from './track-album';
import TrackTime from './track-time';

const PlaylistItem = ({
  trackTitleLink,
  trackTitleText,
  trackAuthorLink,
  trackAuthorText,
  trackAlbumLink,
  trackAlbumText,
  trackTime,
  isLoading
}: PlaylistItemProps) => {
  return (
    <S.PlaylistItem>
      <S.Track>
        <TrackTitle isLoading={isLoading} trackTitleLink={trackTitleLink} trackTitleText={trackTitleText}/>
        <TrackAuthor isLoading={isLoading} trackAuthorLink={trackAuthorLink} trackAuthorText={trackAuthorText}/>
        <TrackAlbum isLoading={isLoading} trackAlbumLink={trackAlbumLink} trackAlbumText={trackAlbumText}/>
        <TrackTime isLoading={isLoading} trackTime={trackTime}/>
      </S.Track>
    </S.PlaylistItem>
  );
};

export default PlaylistItem;
