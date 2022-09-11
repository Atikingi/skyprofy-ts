import React from 'react';
import { PlaylistItemProps } from '../../../../../types';
import * as S from './playlist-item.style';
import TrackTitle from './track-title/track-title';
import TrackAuthor from './track-author/track-author';
import TrackAlbum from './track-album/track-album';
import TrackTime from './track-time/track-time';

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
