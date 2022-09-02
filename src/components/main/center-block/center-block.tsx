import React, { ReactElement } from 'react';
import Search from './search';
import Filter from './filter';
import Content from './content';

function CenterBlock (): ReactElement<HTMLDivElement> {
  return (
        <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <Filter />
            <Content />
        </div>
  );
}

export default CenterBlock;
