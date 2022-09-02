import React, { ReactElement } from 'react';
import PlaylistTitle from './playlist/playlist-title';
import PlaylistItems from './playlist/playlist-items';

function Content (): ReactElement<HTMLDivElement> {
  return (
        <div className="centerblock__content">
            <PlaylistTitle />
            <PlaylistItems />
        </div>
  );
}

export default Content;
