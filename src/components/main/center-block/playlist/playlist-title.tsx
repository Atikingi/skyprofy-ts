import React, { FC } from 'react';
import SvgImage from '../../../svg-image';
import { TextsElements } from '../../../../types';

const PlaylistTitles: FC<TextsElements> = ({ className, text }) => {
  return (
      <div className={className}>{text}</div>
  );
};

const PlaylistTitle: FC = () => {
  return (
        <div className="content__title playlist-title">
          <PlaylistTitles className={'playlist-title__col col01'} text={'Трек'}/>
          <PlaylistTitles className={'playlist-title__col col02'} text={'ИСПОЛНИТЕЛЬ'}/>
          <PlaylistTitles className={'playlist-title__col col03'} text={'АЛЬБОМ'}/>
          <div className={'playlist-title__col col04'}>
            <SvgImage className={'playlist-title__svg'} href="img/icon/sprite.svg#icon-watch" ariaLabel='time'/>
          </div>
        </div>
  );
};

export default PlaylistTitle;
