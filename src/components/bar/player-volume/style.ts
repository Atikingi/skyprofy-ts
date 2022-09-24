import styled from 'styled-components';

const COLORS = {
  'slider-runnable-track-border': '#797979'
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

export const PlayerVolumeSVGWrapper = styled.div<{isDarkTheme: boolean}>`
  --color: ${props => props.isDarkTheme ? '#D9D9D9' : '#B1B1B1'};
  width: 18px;
  height: 18px;
  cursor: pointer;
  color: var(--color);
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
    --bg-color: ${props => props.isDarkTheme ? '#1A1A1A' : '#FFFFFF'};
    --border-color: ${props => props.isDarkTheme ? '#FFFFFF' : '#979696'};
    
    background: var(--bg-color);
    border: 2px solid var(--border-color);
    width: 13px;
    height: 13px;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -6px;
  }

  ::-webkit-slider-runnable-track {
    --bg-color: ${props => props.isDarkTheme ? '#FFFFFF' : '#AD61FF'};
    
    width: 100%;
    height: 0;
    border: 2px solid ${COLORS['slider-runnable-track-border']};
    background: var(--bg-color);
    border-radius: 2px;
  }
`;
