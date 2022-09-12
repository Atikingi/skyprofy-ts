import React from 'react';
import * as S from './style';

interface Props {
  text: string,
  isActive: boolean
}

const FilterCategories = ({ text, isActive }: Props) => {
  return (
    <S.FilterButton isActive={isActive}>
      <div>{text}</div>
      <S.FilterButtonCount isActive={isActive}>5</S.FilterButtonCount>
    </S.FilterButton>
  );
};

export default FilterCategories;
