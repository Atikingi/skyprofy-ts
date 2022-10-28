import React, { useContext } from 'react';
import FavoriteContent from '../../main/center-block/favorite-playlist/content';
import Search from '../../UI/search';
import Layout from '../../layout/Layout';
import { ThemeContext } from '../../context/themeContext';
import { CenterBlock, CenterBlockTitle } from '../../main/center-block/style';

const PersonalPlaylist = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <Layout>
      <CenterBlock>
        <Search />
        <CenterBlockTitle isDarkTheme={isDarkTheme}>
          Мой плейлист
        </CenterBlockTitle>
        <FavoriteContent />
      </CenterBlock>
    </Layout>
  );
};

export default PersonalPlaylist;
