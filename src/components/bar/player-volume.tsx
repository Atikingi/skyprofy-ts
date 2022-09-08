import React from 'react';
import SvgImage from '../svg-image';

const PlayerVolume = () => {
  return (
        <div className="bar__volume-block volume">
          <div className="volume__content">
            <div className="volume__image">
              <div className="volume__svg">
                <SvgImage href="img/icon/sprite.svg#icon-volume" ariaLabel="volume"/>
              </div>
            </div>
            <div className="volume__progress _btn">
              <input className="volume__progress-line _btn" type="range" name="range"/>
            </div>
          </div>
        </div>
  );
};

export default PlayerVolume;
