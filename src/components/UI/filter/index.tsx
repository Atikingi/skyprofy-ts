import FilterCategories from './filter-categories';
import FilterItem from './filter-item';
import FilterItemYears from './filter-item-year';
import React, { useContext, useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { useDispatch } from 'react-redux';
import { ThemeContext } from '../../context/themeContext';
import * as S from './style';
import {
  addFilterByAuthor,
  addFilterByGenre,
  deleteAuthors,
  deleteGenres
} from '../../../store/slices/filterSlice';

const Filter = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const genres = useAppSelector((state) => state.filter.genres);
  const authors = useAppSelector((state) => state.filter.authors);
  const filteredByYear = useAppSelector((state) => state.filter.filteredByYear);
  const filteredByGenre = useAppSelector(
    (state) => state.filter.filteredByGenre
  );
  const filteredByAuthor = useAppSelector(
    (state) => state.filter.filteredByAuthor
  );
  const genresValue = useAppSelector((state) => state.filter.filterGenresValue);
  const authorsValue = useAppSelector(
    (state) => state.filter.filterAuthorsValue
  );

  const [isActive, setActive] = useState<'author' | 'year' | 'genre' | null>(
    null
  );

  const onAddGenre = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!(e.target as HTMLInputElement).checked) {
      dispatch(deleteGenres((e.target as HTMLInputElement).value));
    } else {
      dispatch(addFilterByGenre((e.target as HTMLInputElement).value));
    }
  };

  const onAddAuthor = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!(e.target as HTMLInputElement).checked) {
      dispatch(deleteAuthors((e.target as HTMLInputElement).value));
    } else {
      dispatch(addFilterByAuthor((e.target as HTMLInputElement).value));
    }
  };

  return (
    <S.FilterWrapper>
      <S.FilterTitle isDarkTheme={isDarkTheme}>Искать по:</S.FilterTitle>
      <S.FilterButtonWrapper
        onClick={() =>
          setActive((prevState) => (prevState === null ? 'author' : null))
        }
      >
        <FilterCategories
          text="исполнителю"
          isActive={filteredByAuthor}
          count={String(authorsValue.length)}
        />
        <S.FilterItemsWrapperAuthor
          isDarkTheme={isDarkTheme}
          isActive={isActive}
        >
          <S.FilterItems isDarkTheme={isDarkTheme}>
            {authors
              .filter((item, pos) => authors.indexOf(item) === pos)
              .map((item: string) => (
                <FilterItem
                  key={item}
                  value={item}
                  onClickFunction={onAddAuthor}
                />
              ))}
          </S.FilterItems>
        </S.FilterItemsWrapperAuthor>
      </S.FilterButtonWrapper>

      <S.FilterButtonWrapper
        onClick={() =>
          setActive((prevState) => (prevState === null ? 'year' : null))
        }
      >
        <FilterCategories
          text="году выпуска"
          isActive={filteredByYear}
          count="1"
        />
        <S.FilterItemsWrapperYear isDarkTheme={isDarkTheme} isActive={isActive}>
          <FilterItemYears />
        </S.FilterItemsWrapperYear>
      </S.FilterButtonWrapper>
      <S.FilterButtonWrapper
        onClick={() =>
          setActive((prevState) => (prevState === null ? 'genre' : null))
        }
      >
        <FilterCategories
          text="жанру"
          isActive={filteredByGenre}
          count={String(genresValue.length)}
        />
        <S.FilterItemsWrapperGenre
          isDarkTheme={isDarkTheme}
          isActive={isActive}
        >
          <S.FilterItems isDarkTheme={isDarkTheme}>
            {genres
              .filter((item, pos) => genres.indexOf(item) === pos)
              .map((item: string) => (
                <FilterItem
                  key={item}
                  value={item}
                  onClickFunction={onAddGenre}
                />
              ))}
          </S.FilterItems>
        </S.FilterItemsWrapperGenre>
      </S.FilterButtonWrapper>
    </S.FilterWrapper>
  );
};

export default Filter;
