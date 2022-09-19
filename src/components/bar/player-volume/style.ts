import styled from 'styled-components';

const COLORS = {
  'slider-thumb-border-dark': '#FFFFFF',
  'slider-thumb-border-light': '#C4C4C4',
  'slider-background-dark': '#1A1A1A',
  'slider-background-light': '#FFFFFF',
  'slider-runnable-track-border': '#797979',
  'slider-runnable-track-background-dark': '#FFFFFF',
  'slider-runnable-track-background-light': '#AD61FF'
};

export const PlayerVolumeBlock = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`;

export const PlayerVolumeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`;

export const PlayerVolumeImageWrapper = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;

export const PlayerVolumeSVGWrapper = styled.div`
  width: 18px;
  height: 18px;
  fill: transparent;
  cursor: pointer;
`;

export const PlayerVolumeProgressWrapper = styled.div`
  width: 109px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const PlayerVolumeProgressLine = styled.input<{isDarkTheme: boolean}>`
  -webkit-appearance: none;
  background: transparent;
  cursor: pointer;

  ::-ms-track {
    width: 100%;
    cursor: pointer;

    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: ${props => props.isDarkTheme ? COLORS['slider-background-dark'] : COLORS['slider-background-light']};
    border: 2px solid ${props => props.isDarkTheme ? COLORS['slider-thumb-border-dark'] : COLORS['slider-thumb-border-light']};
    width: 13px;
    height: 13px;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -6px;
  }

  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 0;

    border: 2px solid ${COLORS['slider-runnable-track-border']};
    background: ${props => props.isDarkTheme ? COLORS['slider-runnable-track-background-dark'] : COLORS['slider-runnable-track-background-light']};
    border-radius: 2px;
  }
`;
