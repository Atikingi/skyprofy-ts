import React, { useContext } from 'react';
import { CenterBlock } from '../../main/center-block/style';
import Layout from '../../layout/Layout';
import Search from '../../UI/search';
import * as S from '../../main/center-block/style';
import Filter from '../../UI/filter';
import Content from '../../main/center-block/content';
import { ThemeContext } from '../../context/themeContext';

const Main = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <Layout>
      <CenterBlock>
        <Search />
        <S.CenterBlockTitle isDarkTheme={isDarkTheme}>Треки</S.CenterBlockTitle>
        <Filter />
        <Content/>
      </CenterBlock>
    </Layout>
  );
};

export default Main;
