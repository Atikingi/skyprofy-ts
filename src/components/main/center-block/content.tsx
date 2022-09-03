import React, { FC } from 'react';
import PlaylistTitle from './playlist/playlist-title';
import PlaylistItems from './playlist/playlist-items';

const Content: FC = () => {
  return (
        <div className="centerblock__content">
            <PlaylistTitle />
            <PlaylistItems />
        </div>
  );
};

export default Content;
