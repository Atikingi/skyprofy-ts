import React from 'react';
import SvgImage from '../../../svg-image';
import { PlaylistItemProps } from '../../../../types';
import SkeletonImg from '../../../UI/skeletons/skeleton-img';
import SkeletonTitles from '../../../UI/skeletons/skeleton-titles';

const PlaylistItem = ({
  trackTitleLink,
  trackTitleText,
  trackAuthorLink,
  trackAuthorText,
  trackAlbumLink,
  trackAlbumText,
  trackTime,
  isLoading
}: PlaylistItemProps) => {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image-wrapper">
          {isLoading === true
            ? <SkeletonImg />
            : <div
              className='track__title-image'
            >
              <div className="track__title-svg">
                <SvgImage
                  href="img/icon/sprite.svg#icon-note"
                  ariaLabel={'music'}
                />
              </div>
            </div>
          }
            </div>
            <div className="track__title-text">
            {isLoading === true
              ? <SkeletonTitles />
              : <a className="track__title-link" href={trackTitleLink}>
                {trackTitleText}
                <span className="track__title-span"></span>
              </a>
            }
            </div>
        </div>
        <div className="track__author">
          {isLoading === true
            ? <SkeletonTitles/>
            : <a className="track__author-link" href={trackAuthorLink}>
            {trackAuthorText}
          </a>}
        </div>
        <div className="track__album">
          {isLoading === true
            ? <SkeletonTitles/>
            : <a className="track__album-link" href={trackAlbumLink}>
          {trackAlbumText}
            </a>}
        </div>
        <div className="track__time">
          {isLoading === true
            ? <SkeletonTitles/>
            : <div className="track__time-wrapper">
              <div className="track__time-svg">
                <SvgImage
                  href="img/icon/sprite.svg#icon-like"
                  ariaLabel="time"
                />
              </div>
              <span className="track__time-text">{trackTime}</span>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
