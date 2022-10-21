import React, { useContext } from 'react';
import { CenterBlock, CenterBlockTitle } from '../../main/center-block/style';
import Search from '../../UI/search';
import Layout from '../../layout/Layout';
import { ThemeContext } from '../../context/themeContext';
import CustomContent from '../../main/center-block/custom-playlists/content';
import { useSelector } from 'react-redux';

const CustomPlaylist = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const playlistName = useSelector((state: any) => state.playlists.name);

  return (
    <Layout>
      <CenterBlock>
        <Search/>
        <CenterBlockTitle isDarkTheme={isDarkTheme}>{playlistName}</CenterBlockTitle>
        <CustomContent />
      </CenterBlock>
    </Layout>
  );
};

export default CustomPlaylist;
