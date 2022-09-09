import React from 'react';
import SvgImage from '../../../svg-image';

const PlaylistTitle = () => {
  return (
        <div className="content__title playlist-title">
          <div className='playlist-title__col col01'>Трек</div>
          <div className='playlist-title__col col02'>ИСПОЛНИТЕЛЬ</div>
          <div className='playlist-title__col col03'>АЛЬБОМ</div>
          <div className={'playlist-title__col col04'}>
            <div className="playlist-title__svg">
              <SvgImage href="img/icon/sprite.svg#icon-watch" ariaLabel='time'/>
            </div>
          </div>
        </div>
  );
};

export default PlaylistTitle;
