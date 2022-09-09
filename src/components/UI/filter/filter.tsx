import React, { useState } from 'react';
import FilterCategories from './filter-categories';
import FilterItem from './filter-item';
import { trackData } from '../../main/center-block/playlist/track-data';
import FilterItemYears from './filter-item-years';

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
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div
        className="filter__button-wrapper"
        onClick={() =>
          setActive((prevState) => (prevState === null ? 'author' : null))
        }
      >
        <FilterCategories text="исполнителю" isActive={isActive === 'author'} />
        <div
          className={`filter__items-wrapper ${
            isActive === 'author' ? 'filter__items-wrapper_active' : ''
          }`}
        >
          <div className="filter__items">
            {trackData.map((item) => (
              <FilterItem
                key={item.trackTitleText}
                text={item.trackAuthorText}
                href="#"
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="filter__button-wrapper"
        onClick={() =>
          setActive((prevState) => (prevState === null ? 'year' : null))
        }
      >
        <FilterCategories text="году выпуска" isActive={isActive === 'year'} />
        <div
          className={`filter__items-year-wrapper ${
            isActive === 'year' ? 'filter__items-year-wrapper_active' : ''
          }`}
        >
          <FilterItemYears />
        </div>
      </div>
      <div
        className="filter__button-wrapper"
        onClick={() =>
          setActive((prevState) => (prevState === null ? 'genre' : null))
        }
      >
        <FilterCategories text="жанру" isActive={isActive === 'genre'} />
        <div
          className={`filter__items-wrapper ${
            isActive === 'genre' ? 'filter__items-wrapper_active' : ''
          }`}
        >
          <div className="filter__items">
            {genre.map((item) => (
              <FilterItem key={item} text={item} href="#" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
