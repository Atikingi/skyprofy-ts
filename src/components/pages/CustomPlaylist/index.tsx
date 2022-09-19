import React, { useContext } from 'react';
import { CenterBlock, CenterBlockTitle } from '../../main/center-block/style';
import Search from '../../UI/search';
import Content from '../../main/center-block/content';
import { customPlaylists } from '../../../mocks/custom-playlists';
import { useParams } from 'react-router-dom';
import Layout from '../../layout/Layout';
import { ThemeContext } from '../../context/themeContext';

const CustomPlaylist = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const params = useParams();
  const currenPlaylist = customPlaylists.filter((item) => item.id === params.id);
  return (
    <Layout>
      <CenterBlock>
        <Search/>
        <CenterBlockTitle isDarkTheme={isDarkTheme}>{currenPlaylist[0].title}</CenterBlockTitle>
        <Content playlist={currenPlaylist}/>
      </CenterBlock>
    </Layout>
  );
};

export default CustomPlaylist;
