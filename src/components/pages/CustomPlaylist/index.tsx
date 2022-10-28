import React, { useContext } from 'react';
import Search from '../../UI/search';
import Layout from '../../layout/Layout';
import CustomContent from '../../main/center-block/custom-playlists/content';
import { useAppSelector } from '../../../store/hooks';
import { ThemeContext } from '../../context/themeContext';
import { CenterBlock, CenterBlockTitle } from '../../main/center-block/style';

const CustomPlaylist = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const playlistName = useAppSelector((state) => state.playlists.name);

  return (
    <Layout>
      <CenterBlock>
        <Search />
        <CenterBlockTitle isDarkTheme={isDarkTheme}>
          {playlistName}
        </CenterBlockTitle>
        <CustomContent />
      </CenterBlock>
    </Layout>
  );
};

export default CustomPlaylist;
