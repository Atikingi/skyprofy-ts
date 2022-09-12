import React from 'react';
import PlaylistTitle from '../playlist/playlist-title';
import Index from '../playlist';
import * as S from '../style';

const Content = () => {
  return (
        <S.CenterBlockContent>
            <PlaylistTitle />
            <Index />
        </S.CenterBlockContent>
  );
};

export default Content;
