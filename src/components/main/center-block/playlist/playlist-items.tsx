import React, { useEffect, useState } from 'react';
import PlaylistItem from './playlist-item/playlist-item';
import { trackData } from './track-data';
import * as S from './playlist-items.style';

const PlaylistItems = () => {
  const [status, setStatus] = useState<boolean>(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setStatus(false);
    }, 5000);
    return () => {
      clearTimeout(loadTimer);
    };
  });
  return (
    <S.PlaylistContent>
      {trackData.map((track) =>
        <PlaylistItem
          key={track.trackTitleText}
          trackTitleLink={track.trackTitleLink}
          trackTitleText={track.trackTitleText}
          trackAuthorLink={track.trackAuthorLink}
          trackAuthorText={track.trackAuthorText}
          trackAlbumLink={track.trackAlbumLink}
          trackAlbumText={track.trackAlbumText}
          trackTime={track.trackTime}
          isLoading={status}
        />
      )}
    </S.PlaylistContent>
  );
};

export default PlaylistItems;
