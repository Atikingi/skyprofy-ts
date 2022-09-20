import styled from 'styled-components';

export const FilterItemsYearWrapper = styled.div`
  display: flex;
`;

export const FilterYearLabel = styled.label<{ isDarkTheme: boolean }>`
  --color: ${props => props.isDarkTheme ? '#FFFFFF' : '#000000'};
  margin-left: 10px;
  margin-right: 19px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: var(--color);
`;
