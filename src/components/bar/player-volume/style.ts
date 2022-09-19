import styled from 'styled-components';

const COLORS = {
  'slider-thumb-border': '#FFFFFF',
  'slider-background': '#1A1A1A',
  'slider-runnable-track-border': '#797979',
  'slider-runnable-track-background': '#FFFFFF'
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

export const PlayerVolumeProgressLine = styled.input`
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
    background: ${COLORS['slider-background']};
    border: 2px solid ${COLORS['slider-thumb-border']};
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
    background: ${COLORS['slider-runnable-track-background']};
    border-radius: 2px;
  }
`;
