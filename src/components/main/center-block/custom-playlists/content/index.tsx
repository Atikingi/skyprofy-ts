import React from 'react';
import PlaylistTitle from '../../playlist/playlist-title';
import * as S from '../../style';
import CustomPlaylist from '../playlist/index.ts';

const CustomContent = () => {
  return (
    <S.CenterBlockContent>
      <PlaylistTitle />
      <CustomPlaylist />
    </S.CenterBlockContent>
  );
};

export default CustomContent;
