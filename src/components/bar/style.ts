import styled from 'styled-components';

const COLORS = {
  'bar-background': 'rgba(28, 28, 28, 0.5)'
};

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${COLORS['bar-background']};
`;
