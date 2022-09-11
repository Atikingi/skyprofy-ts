import React from 'react';
import * as S from './filter-item.style';

interface FilterItemProps {
  text: string,
  href: string
}

const FilterItem = ({ text, href }: FilterItemProps) => {
  return (
    <S.FilterItemLink href={href}>{text}</S.FilterItemLink>
  );
};

export default FilterItem;
