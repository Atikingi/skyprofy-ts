import React from 'react';
import * as S from './style';

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
