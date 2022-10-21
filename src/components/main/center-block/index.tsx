import React, { useContext } from 'react';
import Search from '../../UI/search';
import Filter from '../../UI/filter';
import Content from './content';
import * as S from './style';
import { ThemeContext } from '../../context/themeContext';

const CenterBlock = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
        <S.CenterBlock>
            <Search />
            <S.CenterBlockTitle isDarkTheme={isDarkTheme}>Треки</S.CenterBlockTitle>
            <Filter />
            <Content/>
        </S.CenterBlock>
  );
};

export default CenterBlock;
