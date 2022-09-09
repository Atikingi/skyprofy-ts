import React from 'react';

interface PropsType {
  text: string,
  isActive: boolean
}

const FilterCategories = ({ text, isActive }: PropsType) => {
  return (
    <div
      className={`filter__button _btn-text ${isActive ? 'filter__button_active' : ''}`}
    >
      <div>{text}</div>
      <div className={`filter__button-count ${isActive ? 'filter__button-count_active' : ''}`}>5</div>
    </div>
  );
};

export default FilterCategories;
