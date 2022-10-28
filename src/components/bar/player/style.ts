import styled from 'styled-components';

export const BarPlayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const BarContent = styled.div<{isDarkTheme: boolean, isPlaying: boolean}>`
  --bg-color: ${props => props.isDarkTheme ? '#181818' : '#FFFFFF'};
  position: absolute;
  bottom: ${props => props.isPlaying ? '0' : '-100%'};
  left: 0;
  width: 100%;
  background: var(--bg-color);
  transition: background-color, bottom 0.5s ease;
`;

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
