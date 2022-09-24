import React, { useContext } from 'react';
import * as S from './style';
import { ThemeContext } from '../../../context/themeContext';

interface FilterItemProps {
  text: string,
  href: string
}

const FilterItem = ({ text, href }: FilterItemProps) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <S.FilterItemLink isDarkTheme={isDarkTheme} href={href}>{text}</S.FilterItemLink>
  );
};

export default FilterItem;
