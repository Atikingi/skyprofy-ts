import styled from 'styled-components';
import { COLORS } from '../../style/colors';

export const Wrapper = styled.div<{ isDarkTheme: boolean }>`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: ${props => props.isDarkTheme ? COLORS['primary-background'] : COLORS['light-background']};
`;

export const Container = styled.div<{ isDarkTheme: boolean }>`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: ${props => props.isDarkTheme ? COLORS['secondary-background'] : COLORS['light-background']};
  overflow: hidden;
`;
