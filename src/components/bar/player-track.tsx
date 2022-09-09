import React from 'react';
import SvgImage from '../svg-image';
import SkeletonImg from '../UI/skeletons/skeleton-img';
import SkeletonTitles from '../UI/skeletons/skeleton-titles';

interface PropsType {
  trackLink: string,
  trackName: string,
  authorLink: string,
  authorName: string,
  isLoading: boolean
}

const PlayerTrack = ({ trackLink, trackName, authorLink, authorName, isLoading = true }: PropsType) => {
  return (
        <div className="player__track-play track-play">
          <div className="track-play__contain">
            <div className="track-play__image">
              {isLoading
                ? <SkeletonImg/>
                : <div className="track-play__svg">
                <SvgImage href="img/icon/sprite.svg#icon-note" ariaLabel="music"/>
              </div>}
            </div>
            <div className="track-play__author">
              {isLoading ? <SkeletonTitles/> : <a className="track-play__author-link" href={trackLink}>{trackName}</a>
              }
            </div>
            <div className="track-play__album">
              {isLoading ? <SkeletonTitles/> : <a className="track-play__album-link" href={authorLink}>{authorName}</a>}
            </div>
          </div>
          <div className="track-play__like-dis">
            <div className="track-play__like _btn-icon">
              <div className="track-play__like-svg">
                <SvgImage href="img/icon/sprite.svg#icon-like" ariaLabel="like"/>
              </div>
            </div>
            <div className="track-play__dislike _btn-icon">
              <div className="track-play__dislike-svg">
                <SvgImage href="img/icon/sprite.svg#icon-dislike" ariaLabel="dislike"/>
              </div>
            </div>
          </div>
        </div>
  );
};

export default PlayerTrack;
