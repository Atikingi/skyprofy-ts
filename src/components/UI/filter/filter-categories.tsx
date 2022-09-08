import React from 'react';
import { FilterProps } from '../../../types';

const FilterCategories = ({ text, isActive }: FilterProps) => {
  return (
    <div
      className={
        isActive
          ? 'filter__button filter__button_active _btn-text'
          : 'filter__button _btn-text'
      }
    >
      <div>{text}</div>
      <div className={isActive ? 'filter__button-count filter__button-count_active' : 'filter__button-count'}>5</div>
    </div>
  );
};

export default FilterCategories;
