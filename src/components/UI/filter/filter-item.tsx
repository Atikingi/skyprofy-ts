import React from 'react';

interface FilterItemProps {
  text: string,
  href: string
}

const FilterItem = ({ text, href }: FilterItemProps) => {
  return (
    <a className="filter__items-link" href={href}>{text}</a>
  );
};

export default FilterItem;
