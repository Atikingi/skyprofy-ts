import React from 'react';
import PlaylistTitle from './playlist/playlist-title/playlist-title';
import PlaylistItems from './playlist/playlist-items';
import * as S from './center-block.style';

const Content = () => {
  return (
        <S.CenterBlockContent>
            <PlaylistTitle />
            <PlaylistItems />
        </S.CenterBlockContent>
  );
};

export default Content;
