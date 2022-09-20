import styled from 'styled-components';

export const PlayerControls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;

export const PlayerButton = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`;

export const PrevIconWrapper = styled.div<{isDarkTheme: boolean}>`
  --color: ${props => props.isDarkTheme ? '#D9D9D9' : '#B1B1B1'};
  width: 15px;
  height: 14px;
  margin-right: 23px;
  cursor: pointer;
  fill: currentColor;
  stroke: currentColor;
  color: var(--color);
`;

export const PlayIconWrapper = styled.div<{isDarkTheme: boolean}>`
  --color: ${props => props.isDarkTheme ? '#D9D9D9' : '#B1B1B1'};
  width: 22px;
  height: 20px;
  margin-right: 23px;
  fill: currentColor;
  stroke: currentColor;
  cursor: pointer;
  color: var(--color);
`;

export const NextIconWrapper = styled.div<{isDarkTheme: boolean}>`
  --color: ${props => props.isDarkTheme ? '#D9D9D9' : '#B1B1B1'};
  width: 15px;
  height: 14px;
  margin-right: 28px;
  fill: currentColor;
  stroke: currentColor;
  cursor: pointer;
  color: var(--color);
`;

export const RepeatIconWrapper = styled.div<{isDarkTheme: boolean}>`
  --color: ${props => props.isDarkTheme ? '#696969' : '#B1B1B1'};
  --color-hover: ${props => props.isDarkTheme ? '#ACACAC' : '#707070'};
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: currentColor;
  margin-right: 24px;
  cursor: pointer;
  color: var(--color);
  
  :hover {
    color: var(--color-hover);
  }
`;

export const ShuffleIconWrapper = styled.div<{isDarkTheme: boolean}>`
  --color: ${props => props.isDarkTheme ? '#696969' : '#B1B1B1'};
  --color-hover: ${props => props.isDarkTheme ? '#ACACAC' : '#707070'};
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: currentColor;
  margin-right: 24px;
  cursor: pointer;
  color: var(--color);
  
  :hover {
    color: var(--color-hover);
  }
`;
