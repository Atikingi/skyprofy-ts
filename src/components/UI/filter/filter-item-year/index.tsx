import React, { useContext } from 'react';
import * as S from './style';
import { ThemeContext } from '../../../context/themeContext';
import { filterByYear } from '../../../../store/slices/filterSlice';
import { useDispatch } from 'react-redux';

const FilterItemYears = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const onYearFilter = (e: React.MouseEvent) => {
    dispatch(filterByYear((e.target as HTMLInputElement).value));
  };

  return (
    <S.FilterItemsYearWrapper>
      <S.FilterItemsYearLabel htmlFor="year-filter">
        <input
          id="year-filter-new"
          name="year-filter"
          type="radio"
          value="newest"
          onClick={onYearFilter}
        />
        <S.FilterYearLabel isDarkTheme={isDarkTheme} htmlFor="year-filter-new">
          Более новые
        </S.FilterYearLabel>
        <input
          id="year-filter-old"
          name="year-filter"
          type="radio"
          value="oldest"
          onClick={onYearFilter}
        />
        <S.FilterYearLabel isDarkTheme={isDarkTheme} htmlFor="year-filter-old">
          Более старые
        </S.FilterYearLabel>
        <input
          id="year-filter-default"
          name="year-filter"
          type="radio"
          value="default"
          onClick={onYearFilter}
        />
        <S.FilterYearLabel
          isDarkTheme={isDarkTheme}
          htmlFor="year-filter-default"
        >
          По умолчанию
        </S.FilterYearLabel>
      </S.FilterItemsYearLabel>
    </S.FilterItemsYearWrapper>
  );
};

export default FilterItemYears;
