import React from 'react';
import SvgImage from '../../svg';
import * as S from './style';

interface Props {
  value: number
  onVolumeChange: (e: React.ChangeEvent) => void
  onVolumeToggle: () => void
  onVolumeOn: boolean
}

const PlayerVolume = ({ value, onVolumeChange, onVolumeToggle, onVolumeOn = true }: Props) => {
  return (
    <S.PlayerVolumeBlock>
      <S.PlayerVolumeContent>
        <S.PlayerVolumeImageWrapper>
          <S.PlayerVolumeSVGWrapper onClick={() => onVolumeToggle()}>
            <SvgImage
              href={onVolumeOn ? '/skyprofy-ts/img/icon/sprite.svg#icon-volume' : '/skyprofy-ts/img/icon/sprite.svg#icon-volume-off'}
              ariaLabel="volume"
            />
          </S.PlayerVolumeSVGWrapper>
        </S.PlayerVolumeImageWrapper>
        <S.PlayerVolumeProgressWrapper>
          <S.PlayerVolumeProgressLine
            type="range"
            name="volume"
            min='0'
            max='1'
            step='0.01'
            value={value}
            onChange={(e) => onVolumeChange(e)}
          />
        </S.PlayerVolumeProgressWrapper>
      </S.PlayerVolumeContent>
    </S.PlayerVolumeBlock>
  );
};

export default PlayerVolume;
