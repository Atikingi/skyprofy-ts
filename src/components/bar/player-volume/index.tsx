import VolumeIcon from '../../icons/volumeIcon';
import VolumeOffIcon from '../../icons/volumeOffIcon';
import React, { useContext, useState } from 'react';
import * as S from './style';
import { ThemeContext } from '../../context/themeContext';

interface Props {
  track: HTMLAudioElement;
}

const PlayerVolume = ({
  track
}: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);

  const [isVolumeOn, setIsVolumeOn] = useState<boolean>(true);
  const [volumeValue, setVolumeValue] = useState<number>(0.2);
  const [prevVolumeValue, setPrevVolumeValue] = useState<number>(0);

  track.volume = volumeValue;

  const onVolumeChange = (e: React.ChangeEvent) => {
    if (!isVolumeOn) {
      setIsVolumeOn(true);
    }
    setVolumeValue(Number((e.target as HTMLInputElement).value));
  };

  const onVolumeToggle = () => {
    setIsVolumeOn(!isVolumeOn);
    if (isVolumeOn) {
      setPrevVolumeValue(volumeValue);
      setVolumeValue(0);
    } else {
      setVolumeValue(prevVolumeValue);
    }
  };

  return (
    <S.PlayerVolumeBlock>
      <S.PlayerVolumeContent>
        <S.PlayerVolumeImageWrapper>
          <S.PlayerVolumeSVGWrapper isDarkTheme={isDarkTheme} onClick={() => onVolumeToggle()}>
              {isVolumeOn
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
            value={volumeValue}
            onChange={(e) => onVolumeChange(e)}
          />
        </S.PlayerVolumeProgressWrapper>
      </S.PlayerVolumeContent>
    </S.PlayerVolumeBlock>
  );
};

export default PlayerVolume;
