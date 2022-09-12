import styled from 'styled-components';

const COLORS = {
  'player-icon': '#D9D9D9',
  'player-icon-secondary': '#696969',
  'player-icon-hover': '#cccccc'
};

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

export const PrevIconWrapper = styled.div`
  width: 15px;
  height: 14px;
  margin-right: 23px;
  cursor: pointer;
`;

export const PlayIconWrapper = styled.div`
  width: 22px;
  height: 20px;
  margin-right: 23px;
  fill: ${COLORS['player-icon']};
  cursor: pointer;
`;

export const NextIconWrapper = styled.div`
  width: 15px;
  height: 14px;
  margin-right: 28px;
  fill: ${COLORS['player-icon']};
  cursor: pointer;
`;

export const RepeatIconWrapper = styled.div`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: ${COLORS['player-icon-secondary']};
  margin-right: 24px;
  cursor: pointer;
  
  :hover {
    stroke: ${COLORS['player-icon-hover']};
  }
`;

export const ShuffleIconWrapper = styled.div`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: ${COLORS['player-icon-secondary']};
  margin-right: 24px;
  cursor: pointer;
  
  :hover {
    stroke: ${COLORS['player-icon-hover']};;
  }
`;
