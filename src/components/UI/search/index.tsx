import React from 'react';
import SvgImage from '../../svg';
import * as S from './style';

const Search = () => {
  return (
        <S.SearchBlock>
          <S.SearchIconWrapper>
            <SvgImage href="/img/icon/sprite.svg#icon-search" ariaLabel="search"/>
          </S.SearchIconWrapper>
            <S.SearchInput type="search" placeholder="Поиск" name="search"/>
        </S.SearchBlock>
  );
};

export default Search;
