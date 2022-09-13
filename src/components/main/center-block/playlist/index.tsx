import React, { useEffect, useState } from 'react';
import PlaylistItem from './playlist-item';
import * as S from './style';
import { PlaylistProps, PlaylistItemProps } from '../../../../types';

interface Props {
  playlist: PlaylistProps[]
}

const PlaylistContent = ({ playlist }: Props) => {
  const currentPlaylist: PlaylistProps = playlist[0];

  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => {
      clearTimeout(loadTimer);
    };
  });
  return (
    <S.PlaylistContent>
      {currentPlaylist.tracks.map((track: PlaylistItemProps) =>
        <PlaylistItem
          key={track.trackTitleText}
          trackTitleLink={track.trackTitleLink}
          trackTitleText={track.trackTitleText}
          trackAuthorLink={track.trackAuthorLink}
          trackAuthorText={track.trackAuthorText}
          trackAlbumLink={track.trackAlbumLink}
          trackAlbumText={track.trackAlbumText}
          trackTime={track.trackTime}
          isLoading={isLoading}
        />)}
    </S.PlaylistContent>
  );
};

export default PlaylistContent;
