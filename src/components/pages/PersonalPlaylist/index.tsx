import React from 'react';
import { CenterBlock, CenterBlockTitle } from '../../main/center-block/style';
import Search from '../../UI/search';
import Content from '../../main/center-block/content';
import { PersonalPlaylistItems } from '../../../mocks/personal-playlist';
import Layout from '../../layout/Layout';

const PersonalPlaylist = () => {
  return (
    <Layout>
      <CenterBlock>
        <Search/>
        <CenterBlockTitle>Мой плейлист</CenterBlockTitle>
        <Content playlist={PersonalPlaylistItems}/>
      </CenterBlock>
    </Layout>
  );
};

export default PersonalPlaylist;
