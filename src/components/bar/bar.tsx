import React, { FC } from 'react';
import Player from './player';
import PlayerVolume from './player-volume';

const Bar: FC = () => {
  return (
      <div className="bar">
        <div className="bar__content">
            <div className="bar__player-progress"></div>
            <div className="bar__player-block">
                <Player/>
                <PlayerVolume/>
            </div>
        </div>
      </div>
  );
};

export default Bar;
