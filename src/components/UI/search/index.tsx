import React, { useContext } from 'react';
import * as S from './style';
import { ThemeContext } from '../../context/themeContext';
import SearchIcon from '../../icons/searchIcon';

const Search = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <S.SearchBlock>
      <S.SearchIconWrapper isDarkTheme={isDarkTheme}>
        <SearchIcon aria-label="search"/>
      </S.SearchIconWrapper>
      <S.SearchInput isDarkTheme={isDarkTheme} type="search" placeholder="Поиск" name="search" />
    </S.SearchBlock>
  );
};

export default Search;
