import React from 'react';
import SvgImage from '../../svg/svg-image';
import * as S from './search.style';

const Search = () => {
  return (
        <S.SearchBlock>
          <S.SearchSVGWrapper>
            <SvgImage href="img/icon/sprite.svg#icon-search" ariaLabel="search"/>
          </S.SearchSVGWrapper>
            <S.SearchInput type="search" placeholder="Поиск" name="search"/>
        </S.SearchBlock>
  );
};

export default Search;
