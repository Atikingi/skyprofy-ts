import React, { FC } from 'react';
import FilterCategories from './filter-categories';

const Filter: FC = () => {
  return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <FilterCategories className="filter__button button-author _btn-text" text="исполнителю"/>
            <FilterCategories className="filter__button button-year _btn-text" text="году выпуска"/>
            <FilterCategories className="filter__button button-genre _btn-text" text="жанру"/>
        </div>
  );
};

export default Filter;
