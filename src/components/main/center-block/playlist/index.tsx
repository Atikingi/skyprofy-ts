import React, { useEffect, useState } from 'react';
import PlaylistItem from './playlist-item';
import * as S from './style';
import { PlaylistProps, PlaylistItemProps } from '../../../../types';

interface Props {
  playlist: PlaylistProps[]
}

const PlaylistContent = ({ playlist }: Props) => {
  const [currentPlaylist]: PlaylistProps[] = playlist;

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => {
      clearTimeout(loadTimer);
    };
  });
  return (
    <S.PlaylistContent>
      {currentPlaylist.tracks.map(({ trackTitleText, trackTitleLink, trackAuthorLink, trackAuthorText, trackAlbumLink, trackAlbumText, trackTime }: PlaylistItemProps) =>
        <PlaylistItem
          key={trackTitleText}
          trackTitleLink={trackTitleLink}
          trackTitleText={trackTitleText}
          trackAuthorLink={trackAuthorLink}
          trackAuthorText={trackAuthorText}
          trackAlbumLink={trackAlbumLink}
          trackAlbumText={trackAlbumText}
          trackTime={trackTime}
          isLoading={isLoading}
        />)}
    </S.PlaylistContent>
  );
};

export default PlaylistContent;
