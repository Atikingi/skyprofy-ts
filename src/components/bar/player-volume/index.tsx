import React, { useContext } from 'react';
import * as S from './style';
import { ThemeContext } from '../../context/themeContext';
import VolumeIcon from '../../icons/volumeIcon';
import VolumeOffIcon from '../../icons/volumeOffIcon';

interface Props {
  value: number;
  onVolumeChange: (e: React.ChangeEvent) => void;
  onVolumeToggle: () => void;
  onVolumeOn: boolean;
}

const PlayerVolume = ({
  value,
  onVolumeChange,
  onVolumeToggle,
  onVolumeOn = true
}: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <S.PlayerVolumeBlock>
      <S.PlayerVolumeContent>
        <S.PlayerVolumeImageWrapper>
          <S.PlayerVolumeSVGWrapper isDarkTheme={isDarkTheme} onClick={() => onVolumeToggle()}>
              {onVolumeOn
                ? <VolumeIcon aria-label="volume"/>
                : <VolumeOffIcon aria-label="volume-off"/>
              }
          </S.PlayerVolumeSVGWrapper>
        </S.PlayerVolumeImageWrapper>
        <S.PlayerVolumeProgressWrapper>
          <S.PlayerVolumeProgressLine
            isDarkTheme={isDarkTheme}
            type="range"
            name="volume"
            min="0"
            max="1"
            step="0.01"
            value={value}
            onChange={(e) => onVolumeChange(e)}
          />
        </S.PlayerVolumeProgressWrapper>
      </S.PlayerVolumeContent>
    </S.PlayerVolumeBlock>
  );
};

export default PlayerVolume;
