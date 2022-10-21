import React, { useContext } from 'react';
import { CenterBlock, CenterBlockTitle } from '../../main/center-block/style';
import Search from '../../UI/search';
import Layout from '../../layout/Layout';
import { ThemeContext } from '../../context/themeContext';
import FavoriteContent from '../../main/center-block/favorite-playlist/content';

const PersonalPlaylist = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
  <Layout>
      <CenterBlock>
        <Search/>
        <CenterBlockTitle isDarkTheme={isDarkTheme}>Мой плейлист</CenterBlockTitle>
        <FavoriteContent />
      </CenterBlock>
  </Layout>
  );
};

export default PersonalPlaylist;
