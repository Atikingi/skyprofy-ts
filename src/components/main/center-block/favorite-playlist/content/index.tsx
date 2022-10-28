import React from 'react';
import PlaylistTitle from '../../playlist/playlist-title';
import FavoritePlaylist from '../playlist/index.ts';
import * as S from '../../style';

const FavoriteContent = () => {
  return (
    <S.CenterBlockContent>
      <PlaylistTitle />
      <FavoritePlaylist />
    </S.CenterBlockContent>
  );
};

export default FavoriteContent;
