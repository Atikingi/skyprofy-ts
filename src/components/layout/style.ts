import styled from 'styled-components';
import { COLORS } from '../../style/colors';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: ${COLORS['primary-background']};
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: ${COLORS['secondary-background']};
  overflow: hidden;
`;
