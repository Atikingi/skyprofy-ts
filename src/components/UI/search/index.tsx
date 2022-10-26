import React, { ChangeEvent, useContext } from 'react';
import SearchIcon from '../../icons/searchIcon';
import { useDispatch } from 'react-redux';
import { search } from '../../../store/slices/searchSlice';
import { ThemeContext } from '../../context/themeContext';
import * as S from './style';

const Search = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const onChangeHandler = (e: ChangeEvent) => {
    dispatch(search((e.target as HTMLInputElement).value));
  };

  return (
    <S.SearchBlock>
      <S.SearchIconWrapper isDarkTheme={isDarkTheme}>
        <SearchIcon aria-label="search" />
      </S.SearchIconWrapper>
      <S.SearchInput
        onChange={onChangeHandler}
        isDarkTheme={isDarkTheme}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.SearchBlock>
  );
};

export default Search;
