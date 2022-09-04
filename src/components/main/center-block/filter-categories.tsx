import React, { FC } from 'react';
import { TextsElements } from '../../../types';

const FilterCategories: FC<TextsElements> = ({ className, text }) => {
  return (
    <div className={className}>{text}</div>
  );
};

export default FilterCategories;
