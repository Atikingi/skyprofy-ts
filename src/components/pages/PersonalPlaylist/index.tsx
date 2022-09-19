import React, { useContext } from 'react';
import { CenterBlock, CenterBlockTitle } from '../../main/center-block/style';
import Search from '../../UI/search';
import Content from '../../main/center-block/content';
import { PersonalPlaylistItems } from '../../../mocks/personal-playlist';
import Layout from '../../layout/Layout';
import { ThemeContext } from '../../context/themeContext';

const PersonalPlaylist = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <Layout>
      <CenterBlock>
        <Search/>
        <CenterBlockTitle isDarkTheme={isDarkTheme}>Мой плейлист</CenterBlockTitle>
        <Content playlist={PersonalPlaylistItems}/>
      </CenterBlock>
    </Layout>
  );
};

export default PersonalPlaylist;
