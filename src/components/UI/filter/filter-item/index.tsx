import React, { useContext } from 'react';
import * as S from './style';
import { ThemeContext } from '../../../context/themeContext';

interface FilterItemProps {
  value: string;
  onClickFunction: React.MouseEventHandler<HTMLInputElement>
}

const FilterItem = ({ value, onClickFunction }: FilterItemProps) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <S.FilterItemsLabel htmlFor="filter" isDarkTheme={isDarkTheme}>
      <S.FilterItem
        id={value}
        name="filter"
        type="checkbox"
        value={value}
        isDarkTheme={isDarkTheme}
        onClick={onClickFunction}
      />
      <S.FilterLabel isDarkTheme={isDarkTheme} htmlFor={value}>
        {value}
      </S.FilterLabel>
    </S.FilterItemsLabel>
  );
};

export default FilterItem;
