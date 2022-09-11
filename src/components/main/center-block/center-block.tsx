import React from 'react';
import Search from '../../UI/search/search';
import Filter from '../../UI/filter/filter';
import Content from './content';
import * as S from './center-block.style';

const CenterBlock = () => {
  return (
        <S.CenterBlock>
            <Search />
            <S.CenterBlockTitle>Треки</S.CenterBlockTitle>
            <Filter />
            <Content />
        </S.CenterBlock>
  );
};

export default CenterBlock;
