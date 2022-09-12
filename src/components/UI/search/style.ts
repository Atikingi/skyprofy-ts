import styled from 'styled-components';

const COLORS = {
  'search-border': '#4E4E4E',
  'search-icon': '#FFFFFF',
  'search-input': '#FFFFFF',
  'search-placeholder': '#FFFFFF'
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

export const SearchInput = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS['search-input']};
  outline: none;

  &::placeholder {
    background-color: transparent;
    color: ${COLORS['search-placeholder']};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
