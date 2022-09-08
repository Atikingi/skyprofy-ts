import React from 'react';
import SvgImage from '../svg-image';
import { ControlButtonsProps } from '../../types';

const ControlsButton = ({ className, imageClassName, imageHref, ariaLabel }: ControlButtonsProps) => {
  return (
            <div className={className}>
              <div className={imageClassName}>
                <SvgImage href={imageHref} ariaLabel={ariaLabel}/>
              </div>
            </div>
  );
};

const PlayerControls = () => {
  return (
        <div className="player__controls">
            <ControlsButton className="player__btn-prev _btn" imageClassName="player__btn-prev-svg" imageHref="img/icon/sprite.svg#icon-prev" ariaLabel="prev"/>
            <ControlsButton className="player__btn-play _btn" imageClassName="player__btn-play-svg" imageHref="img/icon/sprite.svg#icon-play" ariaLabel="play"/>
            <ControlsButton className="player__btn-next _btn" imageClassName="player__btn-next-svg" imageHref="img/icon/sprite.svg#icon-next" ariaLabel="next"/>
            <ControlsButton className="player__btn-repeat _btn-icon" imageClassName="player__btn-repeat-svg" imageHref="img/icon/sprite.svg#icon-repeat" ariaLabel="repeat"/>
            <ControlsButton className="player__btn-shuffle _btn-icon" imageClassName="player__btn-shuffle-svg" imageHref="img/icon/sprite.svg#icon-shuffle" ariaLabel="shuffle"/>
        </div>
  );
};

export default PlayerControls;
