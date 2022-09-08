import React, { useState } from 'react';
import FilterCategories from './filter-categories';
import FilterItem from './filter-item';
import { trackData } from '../../main/center-block/playlist/track-data';
import FilterItemYears from './filter-item-years';

const Filter = () => {
  const [authorActive, setAuthorActive] = useState<boolean>(false);
  const [yearActive, setYearActive] = useState<boolean>(false);
  const [genreActive, setGenreActive] = useState<boolean>(false);

  const active1 = (): void => {
    console.log('1');
    setAuthorActive(!authorActive);
    setYearActive(false);
    setGenreActive(false);
  };

  const active2 = (): void => {
    console.log('2');
    setAuthorActive(false);
    setYearActive(!yearActive);
    setGenreActive(false);
  };

  const active3 = (): void => {
    console.log('3');
    setAuthorActive(false);
    setYearActive(false);
    setGenreActive(!genreActive);
  };

  const genre: string[] = [
    'Рок',
    'Хип-Хоп',
    'Джаз',
    'Альтернатива',
    'Рэп',
    'Классическая'
  ];

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="filter__button-wrapper" onClick={() => active1()}>
        <FilterCategories text="исполнителю" isActive={authorActive} />
        <div
          className={
            authorActive
              ? 'filter__items-wrapper filter__items-wrapper_active'
              : 'filter__items-wrapper'
          }
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

      <div className="filter__button-wrapper" onClick={() => active2()}>
        <FilterCategories text="году выпуска" isActive={yearActive} />
        <div
          className={
            yearActive
              ? 'filter__items-year-wrapper filter__items-year-wrapper_active'
              : 'filter__items-year-wrapper'
          }
          onClick={(e) => e.stopPropagation()}
        >
          <FilterItemYears />
        </div>
      </div>
      <div className="filter__button-wrapper" onClick={() => active3()}>
        <FilterCategories text="жанру" isActive={genreActive} />
        <div
          className={
            genreActive
              ? 'filter__items-wrapper filter__items-wrapper_active'
              : 'filter__items-wrapper'
          }
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
