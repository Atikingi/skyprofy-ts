import styled from 'styled-components';

const COLORS = {
  'bar-background': 'rgba(28, 28, 28, 0.5)',
  'player-progress': '#2E2E2E'
};

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${COLORS['bar-background']};
`;

export const BarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: ${COLORS['player-progress']};
`;

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
