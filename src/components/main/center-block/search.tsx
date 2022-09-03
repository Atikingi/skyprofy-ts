import React, { FC } from 'react';
import SvgImage from '../../svg-image';

const Search: FC = () => {
  return (
        <div className="centerblock__search search">
            <SvgImage className="search__svg" href="img/icon/sprite.svg#icon-search" ariaLabel="search"/>
            <input className="search__text" type="search" placeholder="Поиск" name="search"/>
        </div>
  );
};

export default Search;
