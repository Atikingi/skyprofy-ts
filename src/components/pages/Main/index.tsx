import React, { useContext } from 'react';
import Filter from '../../UI/filter';
import Content from '../../main/center-block/content';
import Layout from '../../layout/Layout';
import Search from '../../UI/search';
import { ThemeContext } from '../../context/themeContext';
import { CenterBlock } from '../../main/center-block/style';
import * as S from '../../main/center-block/style';

const Main = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <Layout>
      <CenterBlock>
        <Search />
        <S.CenterBlockTitle isDarkTheme={isDarkTheme}>Треки</S.CenterBlockTitle>
        <Filter />
        <Content />
      </CenterBlock>
    </Layout>
  );
};

export default Main;
