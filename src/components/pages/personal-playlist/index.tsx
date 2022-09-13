import React from 'react';
import * as S from '../main/style';
import Navigation from '../../main/nav';
import { CenterBlock, CenterBlockTitle } from '../../main/center-block/style';
import Search from '../../UI/search';
import Content from '../../main/center-block/content';
import { PersonalPlaylistItems } from '../../../mocks/personal-playlist';
import Bar from '../../bar';
import Sidebar from '../../main/sidebar';

const PersonalPlaylist = () => {
  return (
    <S.Main>
      <Navigation/>
      <CenterBlock>
        <Search/>
        <CenterBlockTitle>Мой плейлист</CenterBlockTitle>
        <Content playlist={PersonalPlaylistItems}/>
      </CenterBlock>
      <Sidebar/>
      <Bar/>
    </S.Main>
  );
};

export default PersonalPlaylist;
