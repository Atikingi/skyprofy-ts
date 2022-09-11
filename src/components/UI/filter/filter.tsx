import React, { useState } from 'react';
import FilterCategories from './filter-categories/filter-categories';
import FilterItem from './filter-item/filter-item';
import { trackData } from '../../main/center-block/playlist/track-data';
import FilterItemYears from './filter-item-year/filter-item-years';
import * as S from './filter.style';

const Filter = () => {
  const [isActive, setActive] = useState<'author' | 'year' | 'genre' | null>(
    null
  );

  enum Genre {
    Rock = 'Рок',
    HipHop = 'Хип-Хоп',
    Jazz = 'Джаз',
    Alternative = 'Альтернатива',
    Rap = 'Рэп',
    Classic = 'Классическая',
  }

  const genre: Genre[] = [
    Genre.Rock,
    Genre.HipHop,
    Genre.Jazz,
    Genre.Alternative,
    Genre.Rap,
    Genre.Classic
  ];

  return (
    <S.FilterWrapper>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterButtonWrapper
        onClick={() =>
          setActive((prevState) => (prevState === null ? 'author' : null))
        }
      >
        <FilterCategories text="исполнителю" isActive={isActive === 'author'} />
        <S.FilterItemsWrapperAuthor isActive={isActive}
        >
          <S.FilterItems>
            {trackData.map((item) => (
              <FilterItem
                key={item.trackTitleText}
                text={item.trackAuthorText}
                href="#"
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
        <FilterCategories text="году выпуска" isActive={isActive === 'year'} />
        <S.FilterItemsWrapperYear isActive={isActive}>
          <FilterItemYears />
        </S.FilterItemsWrapperYear>
      </S.FilterButtonWrapper>
      <S.FilterButtonWrapper
        onClick={() =>
          setActive((prevState) => (prevState === null ? 'genre' : null))
        }
      >
        <FilterCategories text="жанру" isActive={isActive === 'genre'} />
        <S.FilterItemsWrapperGenre isActive={isActive}>
          <S.FilterItems>
            {genre.map((item) => (
              <FilterItem key={item} text={item} href="#" />
            ))}
          </S.FilterItems>
        </S.FilterItemsWrapperGenre>
      </S.FilterButtonWrapper>
    </S.FilterWrapper>
  );
};

export default Filter;
