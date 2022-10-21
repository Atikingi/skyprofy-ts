import React from 'react';
import PlaylistTitle from '../playlist/playlist-title';
import PlaylistContent from '../playlist';
import * as S from '../style';
import { PlaylistProps } from '../../../../types';

interface Props {
  playlist: PlaylistProps[]
}

const Content = () => {
  return (
        <S.CenterBlockContent>
            <PlaylistTitle />
            <PlaylistContent />
        </S.CenterBlockContent>
  );
};

export default Content;
