import React from 'react';
import PlaylistTitle from './playlist/playlist-title';
import PlaylistItems from './playlist/playlist-items';

const Content = () => {
  return (
        <div className="centerblock__content">
            <PlaylistTitle />
            <PlaylistItems />
        </div>
  );
};

export default Content;
