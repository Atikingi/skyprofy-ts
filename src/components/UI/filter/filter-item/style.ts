import styled from 'styled-components';

const COLORS = {
  'filter-link': '#FFFFFF',
  'filter-link-hover': '#B672FF',
  'filter-link-underline': '#B672FF'
};

export const FilterItemLink = styled.a<{isDarkTheme: boolean}>`
  --color: ${props => props.isDarkTheme ? '#FFFFFF' : '#000000'};
  max-width: 150px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: var(--color);
  text-decoration: none;

  &:hover {
    color: ${COLORS['filter-link-hover']};
    text-decoration: underline ${COLORS['filter-link-underline']};
  }
`;
