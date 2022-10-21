import styled from 'styled-components';

const COLORS = {
  'player-button': '#FFFFFF'
};

export const TrackPlayLikeDisWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`;

export const TrackPlayLikeButton = styled.div`
  padding: 5px;
  fill: transparent;
  stroke: ${COLORS['player-button']};
  cursor: pointer;
`;

export const TrackPlayLikeDisButtonIconWrapper = styled.div<{isDarkTheme: boolean}>`
  --color: ${props => props.isDarkTheme ? '#696969' : '#B1B1B1'};
  --color-hover: ${props => props.isDarkTheme ? '#ACACAC' : '#707070'};
  --color-active: ${props => props.isDarkTheme ? '#FFFFFF' : 'transparent'};
  --color-active-fill: ${props => props.isDarkTheme ? '#696969' : '#AD61FF'};
  
  width: 14px;
  height: 12px;
  color: var(--color);
  
  :active {
    fill: var(--color-active-fill);
    cursor: pointer;
    color: var(--color);
  }
  
  :hover {
    cursor: pointer;
    color: var(--color-hover);
  }
`;

export const TrackPlayDisButton = styled(TrackPlayLikeButton)`
  margin-left: 28.5px;
`;
