import React, { FC } from 'react';
import PlaylistItem from './playlist-item';
import { trackData } from './track-data';

const PlaylistItems: FC = () => {
  return (
    <div className="content__playlist playlist">
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
        />
      )}
    </div>
  );
};

export default PlaylistItems;
