import React, { ReactElement } from 'react';
import SvgImage from '../../../svg-image';

interface PlaylistItemProps {
  trackTitleLink: string
  trackTitleText: string
  trackAuthorLink: string
  trackAuthorText: string
  trackAlbumLink: string
  trackAlbumText: string
  trackTime: string
}

function PlaylistItem ({ trackTitleLink, trackTitleText, trackAuthorLink, trackAuthorText, trackAlbumLink, trackAlbumText, trackTime }: PlaylistItemProps): ReactElement<HTMLDivElement> {
  return (
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <SvgImage className="track__title-svg" href="img/icon/sprite.svg#icon-note" ariaLabel={'music'}/>
                    </div>
                    <div className="track__title-text">
                        <a className="track__title-link" href={trackTitleLink}>{trackTitleText}
                            <span className="track__title-span"></span>
                        </a>
                    </div>
                </div>
                <div className="track__author">
                    <a className="track__author-link" href={trackAuthorLink}>{trackAuthorText}</a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href={trackAlbumLink}>{trackAlbumText}</a>
                </div>
                <div className="track__time">
                    <SvgImage className="track__time-svg" href="img/icon/sprite.svg#icon-like" ariaLabel="time"/>
                    <span className="track__time-text">{trackTime}</span>
                </div>
            </div>
        </div>
  );
}

export default PlaylistItem;
