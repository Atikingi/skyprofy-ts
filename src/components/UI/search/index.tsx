import React, { useContext } from 'react';
import SvgImage from '../../svg';
import * as S from './style';
import { ThemeContext } from '../../context/themeContext';

const Search = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const searchIcon = () => {
    return isDarkTheme
      ? '/skyprofy-ts/img/icon/sprite.svg#icon-search'
      : '/skyprofy-ts/img/icon/sprite.svg#icon-search-light';
  };
  return (
    <S.SearchBlock>
      <S.SearchIconWrapper>
        <SvgImage
          href={searchIcon()}
          ariaLabel="search"
        />
      </S.SearchIconWrapper>
      <S.SearchInput isDarkTheme={isDarkTheme} type="search" placeholder="Поиск" name="search" />
    </S.SearchBlock>
  );
};

export default Search;
