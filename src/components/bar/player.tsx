import React, { useEffect, useState } from 'react';
import PlayerControls from './player-controls';
import PlayerTrack from './player-track';

const Player = () => {
  const [isLoading, setStatus] = useState<boolean>(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setStatus(false);
    }, 5000);
    return () => {
      clearTimeout(loadTimer);
    };
  });
  return (
        <div className="bar__player player">
            <PlayerControls/>
            <PlayerTrack isLoading={isLoading} trackLink="https://" trackName="Ты та..." authorLink="https://" authorName="Баста"/>
        </div>
  );
};

export default Player;
