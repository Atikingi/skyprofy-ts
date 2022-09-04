import React, { FC } from 'react';
import SvgImage from '../svg-image';

const PlayerVolume: FC = () => {
  return (
        <div className="bar__volume-block volume">
          <div className="volume__content">
            <div className="volume__image">
              <SvgImage className="volume__svg" href="img/icon/sprite.svg#icon-volume" ariaLabel="volume"/>
            </div>
            <div className="volume__progress _btn">
              <input className="volume__progress-line _btn" type="range" name="range"/>
            </div>
          </div>
        </div>
  );
};

export default PlayerVolume;
