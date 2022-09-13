import React from 'react';
import * as S from '../main/style';
import Navigation from '../../main/nav';
import { CenterBlock, CenterBlockTitle } from '../../main/center-block/style';
import Search from '../../UI/search';
import Content from '../../main/center-block/content';
import Bar from '../../bar';
import Sidebar from '../../main/sidebar';
import { customPlaylists } from '../../../mocks/custom-playlists';
import { useParams } from 'react-router-dom';

const CustomPlaylist = () => {
  const params = useParams();
  const currenPlaylist = customPlaylists.filter((item) => item.id === params.id);
  return (
    <S.Main>
      <Navigation/>
      <CenterBlock>
        <Search/>
        <CenterBlockTitle>{currenPlaylist[0].title}</CenterBlockTitle>
        <Content playlist={currenPlaylist}/>
      </CenterBlock>
      <Sidebar/>
      <Bar/>
    </S.Main>
  );
};

export default CustomPlaylist;
