import React from 'react';
import * as S from './style';

const FilterItemYears = () => {
  return (
    <S.FilterItemsYearWrapper>
      <label htmlFor="year-filter">
      <input id="year-filter-new" name="year-filter" type="radio" value="new" />
      <S.FilterYearLabel htmlFor="year-filter-new">Более новые</S.FilterYearLabel>
      <input id="year-filter-old" name="year-filter" type="radio" value="old" />
      <S.FilterYearLabel htmlFor="year-filter-old">Более старые</S.FilterYearLabel>
      </label>
    </S.FilterItemsYearWrapper>
  );
};

export default FilterItemYears;
