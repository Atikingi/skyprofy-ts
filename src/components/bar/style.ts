import styled from 'styled-components';

export const Bar = styled.div<{isDarkTheme: boolean}>`
  --bg-color: ${props => props.isDarkTheme ? '#181818' : '#FFFFFF'};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: var(--bg-color);
  transition: background-color 0.5s ease;
`;
