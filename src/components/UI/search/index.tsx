import React, { ChangeEvent, useContext } from 'react';
import * as S from './style';
import { ThemeContext } from '../../context/themeContext';
import SearchIcon from '../../icons/searchIcon';
import { useDispatch } from 'react-redux';
import { search } from '../../../store/slices/searchSlice';
import { store } from '../../../store/store';

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
        onChange={(e) => onChangeHandler(e)}
        isDarkTheme={isDarkTheme}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.SearchBlock>
  );
};

export default Search;
