import styled from 'styled-components';

const COLORS = {
  'search-border': '#4E4E4E',
  'search-icon': '#FFFFFF',
  'search-input-dark': '#FFFFFF',
  'search-input-light': '#000000',
  'search-placeholder-dark': '#FFFFFF',
  'search-placeholder-light': '#000000'
};

export const SearchBlock = styled.div`
  width: 100%;
  border-bottom: 1px solid ${COLORS['search-border']};
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchIconWrapper = styled.div`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: ${COLORS['search-icon']};
  fill: transparent;
`;

export const SearchInput = styled.input<{isDarkTheme: boolean}>`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.isDarkTheme ? COLORS['search-input-dark'] : COLORS['search-input-light']};
  outline: none;

  &::placeholder {
    background-color: transparent;
    color: ${props => props.isDarkTheme ? COLORS['search-placeholder-dark'] : COLORS['search-placeholder-light']};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
