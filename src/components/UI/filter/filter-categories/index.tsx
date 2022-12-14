import React, { useContext } from 'react';
import * as S from './style';
import { ThemeContext } from '../../../context/themeContext';

interface Props {
  text: string,
  isActive: boolean,
  count: string
}

const FilterCategories = ({ text, isActive, count }: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <S.FilterButton isActive={isActive} isDarkTheme={isDarkTheme}>
      <S.Title isDarkTheme={isDarkTheme}>{text}</S.Title>
      <S.FilterButtonCount isActive={isActive}>{count}</S.FilterButtonCount>
    </S.FilterButton>
  );
};

export default FilterCategories;
