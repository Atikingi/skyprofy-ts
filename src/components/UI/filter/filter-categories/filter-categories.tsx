import React from 'react';
import * as S from './filter-categories.style';

interface PropsType {
  text: string,
  isActive: boolean
}

const FilterCategories = ({ text, isActive }: PropsType) => {
  return (
    <S.FilterButton isActive={isActive}>
      <div>{text}</div>
      <S.FilterButtonCount isActive={isActive}>5</S.FilterButtonCount>
    </S.FilterButton>
  );
};

export default FilterCategories;
