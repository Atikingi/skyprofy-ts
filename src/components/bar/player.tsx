import React, { FC } from 'react';
import PlayerControls from './player-controls';
import PlayerTrack from './player-track';

const Player: FC = () => {
  return (
        <div className="bar__player player">
            <PlayerControls/>
            <PlayerTrack trackLink="https://" trackName="Ты та..." authorLink="https://" authorName="Баста"/>
        </div>
  );
};

export default Player;
