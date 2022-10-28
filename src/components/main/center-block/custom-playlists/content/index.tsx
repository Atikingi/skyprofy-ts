import React from 'react';
import PlaylistTitle from '../../playlist/playlist-title';
import CustomPlaylist from '../playlist/index.ts';
import * as S from '../../style';

const CustomContent = () => {
  return (
    <S.CenterBlockContent>
      <PlaylistTitle />
      <CustomPlaylist />
    </S.CenterBlockContent>
  );
};

export default CustomContent;
