import styled from 'styled-components';

const COLORS = {
  'filter-link': '#FFFFFF',
  'filter-link-hover': '#B672FF',
  'filter-link-underline': '#B672FF'
};

export const FilterItemLink = styled.a`
  max-width: 150px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: ${COLORS['filter-link']};
  text-decoration: none;

  &:hover {
    color: ${COLORS['filter-link-hover']};
    text-decoration: underline ${COLORS['filter-link-underline']};
  }
`;
