import styled from 'styled-components';

export const Wrapper = styled.div<{ isDarkTheme: boolean }>`
  --bg-color: ${props => props.isDarkTheme ? '#383838' : '#FFFFFF'};
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: var(--bg-color);
`;

export const Container = styled.div<{ isDarkTheme: boolean }>`
  --bg-color: ${props => props.isDarkTheme ? '#181818' : '#FFFFFF'};
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: var(--bg-color);
  overflow: hidden;
`;
