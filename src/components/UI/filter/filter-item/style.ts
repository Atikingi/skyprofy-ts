import styled from 'styled-components';

const COLORS = {
  'filter-link': '#FFFFFF',
  'filter-link-hover': '#B672FF',
  'filter-link-underline': '#B672FF'
};

export const FilterItem = styled.input<{isDarkTheme: boolean}>`
  --color: ${props => props.isDarkTheme ? '#FFFFFF' : '#000000'};
  display: none;

  &:hover {
    color: ${COLORS['filter-link-hover']};
    text-decoration: underline ${COLORS['filter-link-underline']};
  }

  :checked + label {
    color: #B672FF;
  }
`;

export const FilterItemsLabel = styled.label<{isDarkTheme: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FilterLabel = styled.label<{ isDarkTheme: boolean }>`
  --color: ${props => props.isDarkTheme ? '#FFFFFF' : '#000000'};
  margin-left: 10px;
  margin-right: 19px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: var(--color);
  
  :hover {
    cursor: pointer;
    color: #B672FF;
    text-decoration: underline;
  }
`;
