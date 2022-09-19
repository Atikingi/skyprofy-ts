import styled from 'styled-components';

const COLORS = {
  'title-dark': '#FFFFFF',
  'title-light': '#000000',
  'button-hover': '#D9B6FF',
  'button-border-hover': '#D9B6FF',
  'button-active': '#AD61FF',
  'button-border-active': '#AD61FF',
  'button-count': '#FFFFFF',
  'button-count-background': '#AD61FF',
  'button-border-dark': '#FFFFFF',
  'button-border-light': '#000000'
};

export const Title = styled.p<{isDarkTheme: boolean}>`
  color: ${props => props.isDarkTheme ? COLORS['title-dark'] : COLORS['title-light']};
`;

export const FilterButton = styled.div<{isActive: boolean, isDarkTheme: boolean}>`
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: ${props => props.isActive ? '1px solid #9A48F1' : `1px solid ${props.isDarkTheme ? COLORS['button-border-dark'] : COLORS['button-border-light']}`};
  border-radius: 60px;
  padding: 6px 20px;
  color: ${props => props.isActive ? '#B672FF' : ''};

  :hover {
    border-color: ${COLORS['button-border-hover']};
    color: ${COLORS['button-hover']};
    cursor: pointer;
  }

  :active {
    border-color: ${COLORS['button-border-active']};
    color: ${COLORS['button-active']};
    cursor: pointer;
  }
`;

export const FilterButtonCount = styled.div<{isActive: boolean}>`
  position: absolute;
  top: -10px;
  right: -10px;

  display: ${props => props.isActive ? 'block' : 'none'};
  width: 26px;
  height: 25.5px;

  text-align: center;
  color: ${COLORS['button-count']};

  background: ${COLORS['button-count-background']};
  border-radius: 50%;
`;
