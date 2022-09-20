import styled from 'styled-components';

const COLORS = {
  'search-border': '#4E4E4E',
  'search-icon-dark': '#FFFFFF',
  'search-icon-light': '#000000'
};

export const SearchBlock = styled.div`
  width: 100%;
  border-bottom: 1px solid ${COLORS['search-border']};
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchIconWrapper = styled.div<{isDarkTheme: boolean}>`
  --bg: ${props => props.isDarkTheme ? '#FFFFFF' : '#000000'};
  width: 17px;
  height: 17px;
  margin-right: 5px;
  fill: transparent;
  stroke: currentColor;
  color: var(--bg);
`;

export const SearchInput = styled.input<{isDarkTheme: boolean}>`
  --color: ${props => props.isDarkTheme ? '#FFFFFF' : '#000000'};
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--color);
  outline: none;

  &::placeholder {
    --color: ${props => props.isDarkTheme ? '#FFFFFF' : '#000000'};
    background-color: transparent;
    color: var(--color);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
