import React, { FC } from 'react';
import SvgImage from '../svg-image';
import { Track } from '../../types';

const PlayerTrack: FC<Track> = ({ trackLink, trackName, authorLink, authorName }) => {
  return (
        <div className="player__track-play track-play">
          <div className="track-play__contain">
            <div className="track-play__image">
              <SvgImage className="track-play__svg" href="img/icon/sprite.svg#icon-note" ariaLabel="music"/>
            </div>
            <div className="track-play__author">
              <a className="track-play__author-link" href={trackLink}>{trackName}</a>
            </div>
            <div className="track-play__album">
              <a className="track-play__album-link" href={authorLink}>{authorName}</a>
            </div>
          </div>
          <div className="track-play__like-dis">
            <div className="track-play__like _btn-icon">
              <SvgImage className="track-play__like-svg" href="img/icon/sprite.svg#icon-like" ariaLabel="like"/>
            </div>
            <div className="track-play__dislike _btn-icon">
              <SvgImage className="track-play__dislike-svg" href="img/icon/sprite.svg#icon-dislike" ariaLabel="dislike"/>
            </div>
          </div>
        </div>
  );
};

export default PlayerTrack;
