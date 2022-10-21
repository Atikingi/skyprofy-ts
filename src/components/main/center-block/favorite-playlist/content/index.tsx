import React from 'react';
import PlaylistTitle from '../../playlist/playlist-title';
import * as S from '../../style';
import FavoritePlaylist from '../playlist/index.ts';

const FavoriteContent = () => {
  return (
    <S.CenterBlockContent>
      <PlaylistTitle />
      <FavoritePlaylist />
    </S.CenterBlockContent>
  );
};

export default FavoriteContent;
