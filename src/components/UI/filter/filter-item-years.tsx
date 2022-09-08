import React from 'react';

const FilterItemYears = () => {
  return (
    <div className="filter__items-year">
      <label htmlFor="year-filter">
      <input id="year-filter-new" name="year-filter" type="radio" value="new" />
      <label className="filter__item-year" htmlFor="year-filter-new">Более новые</label>
      <input id="year-filter-old" name="year-filter" type="radio" value="old" />
      <label className="filter__item-year" htmlFor="year-filter-old">Более старые</label>
      </label>
    </div>
  );
};

export default FilterItemYears;
