import React from 'react';
import Search from '../../UI/search';
import Filter from '../../UI/filter';
import Content from './content';
import * as S from './style';
import { trackData } from '../../../mocks/track-data';

const CenterBlock = () => {
  return (
        <S.CenterBlock>
            <Search />
            <S.CenterBlockTitle>Треки</S.CenterBlockTitle>
            <Filter />
            <Content playlist={trackData}/>
        </S.CenterBlock>
  );
};

export default CenterBlock;
