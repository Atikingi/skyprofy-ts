import React, { useContext } from 'react';
import SvgImage from '../../svg';
import * as S from './style';
import { ThemeContext } from '../../context/themeContext';

const Search = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <S.SearchBlock>
      <S.SearchIconWrapper isDarkTheme={isDarkTheme}>
        <SvgImage
          href='/skyprofy-ts/img/icon/sprite.svg#icon-search'
          ariaLabel="search"
        />
      </S.SearchIconWrapper>
      <S.SearchInput isDarkTheme={isDarkTheme} type="search" placeholder="Поиск" name="search" />
    </S.SearchBlock>
  );
};

export default Search;
